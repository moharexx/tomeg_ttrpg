module.exports = {
    name: "Posture",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "AGI",
        "Acrobatics",
    ],
    reqs_full: [
        "Innate: 20 AGI",
        "Skill: 10 Acrobatics",
    ],
    tags: [
        "Defense",
        "Negation, HD",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "Gain back HD.",
                "This Ability can only be used once per Turn.",
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
                ["Cast Time", "Bonus-Action"],
                ["HD Gain", "10 × ESS"],
            ],
        },
    ],
}