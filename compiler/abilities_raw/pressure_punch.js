module.exports = {
    name: "Pressure Punch",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Martial Arts",
        "Evocation | Transmutation | Enchantment",
    ],
    reqs_full: [
        "10 Martial Arts",
        "(20 INT | 20 WILL | 20 EGO), (20 Evocation | 50 Transmutation | 200 Enchantment)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Touch",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, Touch a Target Entity and Knock it away.",
                "If the Hit Target Entity fails the STR Save, it gets Knocked away.",
                "If the Target Entity Hits a Solid Surface, it takes Physical Damage.",
            ],
        },
        {
            type: "dots",
            content: [
                "Entities cannot be knocked into the Surface they are standing on.",
                "The Physical Damage Type depends on the Hit surface.",
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
                ["STR Save", "10 × ESS"],
                ["Range", "Touch"],
                ["Knockback", "6 × ESS^(1/3)"],
                ["Damage From Surface Impact", "3d4 Physical"],
            ],
        },
    ],
}