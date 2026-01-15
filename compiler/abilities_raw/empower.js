module.exports = {
    name: "Empower",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "10 Anima",
    ],
    reqs_full: [
        "10 Anima",
    ],
    tags: [
        "Potency +",
        "SP -",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Spend SP to give Parent Ability <a href="../main/mechanics.html#potency">Potency.</a>`,
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
                ["Type", "Any"],
                ["SP to Potency", "1 to 1"],
                ["Max SP Spent", "Max SP / 5"],
            ],
        },
    ],
}