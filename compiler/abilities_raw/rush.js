module.exports = {
    name: "Rush",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Athletics",
    ],
    reqs_full: [
        "10 Athletics",
    ],
    tags: [
        "Offense",
        "Variable Damage, Mobility",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You Rush to a Target in a Straight Line, and make a <box>Melee Attack-Action | Grapple | Shove</box> against it.",
                "If you are <b>Sprinting</b>, Double the Rush Distance.",
            ]
        },
        {
            type: "dots",
            content: [
                "When Rushing to a Target, the Target must end up inside your Melee Reach",
                "Rush's Movement cannot curve.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Rush Distance", "2 × MS"],
            ],
        },
    ],
}