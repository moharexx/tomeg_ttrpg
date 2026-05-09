module.exports = {
    name: "Posture",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "20 AGI",
        "10 Acrobatics",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 AGI",
        "<b>Skill:</b> 10 Acrobatics",
    ],
    tags: [
        "Defense, Cooldown",
        "Negation, HD",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You fix your posture, gaining back HD.`,
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
                ["Cooldown", "Once per Turn"],
                ["HD Gain", "10 × ESS"],
            ],
        },
    ],
}