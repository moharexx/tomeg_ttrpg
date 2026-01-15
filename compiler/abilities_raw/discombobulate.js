module.exports = {
    name: "Discombobulate",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Debuff, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you make a Melee Attack with a Natural Weapon.",
                "This Deals no Damage, but on Hit, the Target makes a <b>VIT Save.</b>",
                `Targets who Fail the VIT Save will have the <a href="../main/mechanics.html#conditions">Stunned Condition</a> till the End of their Next Turn.`,
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> While this Attack doesn't deal any Damage by itself, On-Attacks and other modifiers can add Damage.",
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Main-Action"],
                ["VIT Save", "12 × ESS"],
            ],
        },
    ],
}