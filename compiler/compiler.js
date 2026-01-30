const fs = require("fs")
const readline = require('readline');

let page_start = `<html lang="en">
<head>
<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=0.35">
<link rel="icon" type="image/x-icon" href="../assets/icon.png">
<link rel="stylesheet" href="../assets/style_main.css">
<script src="../assets/script_main.js"></script>
<title>`
let page_segment2 = `</title>
</head>
<main>`

let page_end = `</main>
</body>
</html>`

let content_generator = function (data) {
    if (data.type == "table") {
        let output = `<table width="` + data.full_width + `">`
        data.content.forEach(v => {
            output += `<tr>`
            let i = 0
            v.forEach(v => {
                output += `<td width=` + data.width[i] + `">` + v + `</td>`
                i += 1
            })
            output += `</tr>`
        })
        return output + "</table>"
    } else if (data.type == "p") {
        if (typeof data.content == "string") {
            return "<p>" + data.content + "</p>"
        } else {
            let output = "<p>"
            data.content.forEach(v => {
                output += v + "<br>"
            })
            return output + "</p>"
        }
    } else if (data.type == "list") {
        let output = `<p class="bottomless">` + data.content[0] + `</p><ul>`
        for (let i = 1; i < data.content.length; i++) {
            output += `<li>` + data.content[i] + `</li>`
        }
        return output + `</ul>`
    } else if (data.type == "dots") {
        let output = "<ul>"
        for (let i = 0; i < data.content.length; i++) {
            output += "<li>" + data.content[i] + "</li>"
        }
        return output + "</ul>"
    } else if (data.type == "raw") {
        return data.content
    }
}

ability_count = 0
let search_content = {
    active: [],
    on_attack: [],
    reactive: [],
    stance: [],
    meta: [],
    passive: [],
}
fs.readdirSync(__dirname + "/abilities_raw").forEach(v => {
    ability_count += 1
    let content = require(__dirname + "/abilities_raw/" + v)
    console.log(content.name)
    let page_content = `<h1>` + content.name + `</h1><hr><p class="bottomless"><b>Requirements:</b></p><ul>`
    content.reqs_full.forEach(v => {
        page_content += "<li>" + v + "</li>"
    })
    page_content += `</ul><p class="bottomless"><b>Unlock Cost:</b></p><ul><li>` + content.unlock_cost + ` XP</li></ul><p class="bottomless"><b>Tags:</b></p><ul>`
    content.tags.forEach(v => {
        page_content += `<li>` + v + `</li>`
    })
    page_content += `</ul><h2>Description</h2><hr>`
    content.description.forEach(v => {
        page_content += content_generator(v)
    })
    if (content.stats) {
        page_content += `<h2>Stats</h2><hr>`
        content.stats.forEach(v => {
            page_content += content_generator(v)
        })
    }
    fs.writeFileSync(__dirname + "/../abilities/" + v.split(".")[0] + ".html", page_start + content.name + page_segment2 + page_content + page_end)
    search_object = {
        name: content.name,
        //link: "./../abilities/" + v.split(".")[0] + ".html",
        link: v.split(".")[0],
        type: "",
        reqs: "",
        tags: "",
    }
    for (let i = 0; i < content.type.length - 1; i++) {
        search_object.type += content.type[i] + "@"
    } search_object.type += content.type[content.type.length - 1]
    for (let i = 0; i < content.reqs_short.length - 1; i++) {
        search_object.reqs += content.reqs_short[i] + "@"
    } search_object.reqs += content.reqs_short[content.reqs_short.length - 1]
    for (let i = 0; i < content.tags.length; i++) {
        search_object.tags += content.tags[i] + "@"
    } search_object.tags += content.unlock_cost + " XP"
    search_content[content.category].push(search_object)
})

fs.writeFileSync(__dirname + "/../assets/abilities_raw.json", JSON.stringify(search_content))
console.log("\nSuccessfully Compiled " + ability_count + " Abilities.")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("", () => {});
