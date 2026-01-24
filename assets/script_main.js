let head = null
let body = null
let header = null
let main = null
let side_menu = null
let side_orb = null

let side_bar_toggle = false
let side_orb_toggle = false

window.onload = function () {
    head = document.getElementsByTagName("head")[0]
    body = document.getElementsByTagName("body")[0]
    header = document.getElementsByTagName("header")[0]
    main = document.getElementsByTagName("main")[0]
    side_menu = document.getElementById("side_menu")
    side_orb = document.getElementById("side_orb")

    document.addEventListener("mousemove", (event) => {
        if (event.x <= 100 && side_bar_toggle == false && document.body.clientWidth > 1600) {
            if (side_bar_toggle == false) {
                side_orb_toggle = true
                side_orb.style.left = "-2rem"
            }
            side_orb.style.top = "calc(" + event.y + "px - 3rem)"
        } else {
            side_orb_toggle = false
            side_orb.style.left = "-6rem"
        }
    })

    for (const child of main.children) {
        if (child.tagName == "H1") {
            if (child.getAttribute("id") == null) {
                side_menu.innerHTML = side_menu.innerHTML + `<h1 onclick="window.location='#'">ERROR: MISSING ID</h1>`
            } else {
                side_menu.innerHTML = side_menu.innerHTML + `<h1 onclick="window.location='#` + child.getAttribute("id") + `'">` + child.innerHTML + `</h1>`
            }
        } else if (child.tagName == "H2") {
            if (child.getAttribute("id") == null) {
                side_menu.innerHTML = side_menu.innerHTML + `<h2 onclick="window.location='#'">■ ERROR: MISSING ID</h2>`
            } else {
                side_menu.innerHTML = side_menu.innerHTML + `<h2 onclick="window.location='#` + child.getAttribute("id") + `'">■ ` + child.innerHTML + `</h2>`
            }
        }
    }

    for (const elem of document.getElementsByClassName("collapsible")) {
        let open = false
        let base = elem.innerHTML
        let collapsed = elem.nextElementSibling.nextElementSibling;
        elem.innerHTML = "&#x25B6 " + base
        elem.onclick = function () {
            if (collapsed.style.display === "block") {
                elem.innerHTML = "&#x25B6 " + base
                collapsed.style.display = "none";
            } else {
                collapsed.style.display = "block";
                elem.innerHTML = "&#x25BC " + base
            }
        }
    }
}

let side_bar_on = function () {
    side_bar_toggle = true
    side_menu.classList.add("side_menu_active")
    main.classList.add("main_side_menu_active")
}
let side_bar_off = function () {
    side_bar_toggle = false
    side_menu.classList.remove("side_menu_active")
    main.classList.remove("main_side_menu_active")
}
let side_bar_func = function (val) {
    if (val == true || val == false) {
        if (val == true && side_bar_toggle == false) side_bar_on()
        else if (val == false && side_bar_toggle == true) side_bar_off()
    } else if (side_bar_toggle == false) side_bar_on()
    else side_bar_off()
}

let go_to = function (page) {
    window.location = "./../" + page
}