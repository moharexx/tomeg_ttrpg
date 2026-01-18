module.exports = {
    name: "Vigor",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "20 VIT",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 VIT",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, Negation",
        "Free-Action, REST-HP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Spend <b>REST-HP</b> to give Your <b>VIT Save</b> a small Bonus.",
                "This Ability can be used after determiming if the Save is a Fail or not.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can add +1 to Save Bonus.`,
                `This does not have additional <b>REST-HP</b> Cost.`,
            ],
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Start of Next Turn"],
                ["Trigger", "Make an VIT Save"],
                ["REST-HP to VIT Save Bonus", "5 to 1"],
                ["Max REST-HP Spent", "10 × ESS"],
            ],
        },
    ],
}