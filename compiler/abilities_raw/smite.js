module.exports = {
    name: "Smite",
    category: "on_attack",
    type: [
        "Spell",
        "(Any)",
    ],
    reqs_short: [
        "Anima",
    ],
    reqs_full: [
        "10 Anima",
    ],
    tags: [
        "Offense",
        "To-Hit",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "If Parent Attack Hits, add Bonus On-Hit Damage of Chosen Type:",
                "<box>Psychic | Radiant | Necrotic</box>",
            ],
        },
        {
            type: "dots",
            content: [
                "This On-Attack Ability can be used after determiming if the Parent Attack Hits.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Evoken Smite</b> (20 Evocation):",
                "Two additional Damage Types: <box>Electric | Thunder</box>",
            ],
        }
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Bonus-Action"],
                ["Bonus On-Hit Damage", "(1d10 × ESS) Psychic | Thunder"],
                ["Bonus On-Hit Damage", "(1d8 × ESS) Electric"],
                ["Bonus On-Hit Damage", "(1d6 × ESS) Radiant | Necrotic"],
            ],
        },
    ],
}