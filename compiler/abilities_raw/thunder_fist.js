module.exports = {
    name: "Thunder Fist",
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
        "Thunder Damage, Flow Line AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you create a powerful shockwave, extending out from you.",
                "This is a Flow Line AOE Melee Attack.",
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
                ["Cast Time", "Main-Action"],
                ["Damage", "(1d12 × ESS) Thunder"],
                ["Line Length", "3 × STR^(1/3)"],
                ["Line Width", "1 × STR^(1/3)"],
            ],
        },
    ],
}