module.exports = {
    name: "Vital Strike",
    category: "on_attack",
    type: [
        "Skill",
        "(Advantage)",
    ],
    reqs_short: [
        "AGI | Perception",
    ],
    reqs_full: [
        "10 AGI | 10 Perception",
    ],
    tags: [
        "Offense",
        "Variable Damage",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: "If Parent Attack was with Advantage, add Bonus On-Hit Damage of the same Type.",
        },
        {
            type: "dots",
            content: [
                "This Ability can only be used once per Turn.",
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
                ["Requirement", "Advantage"],
                ["Bonus On-Hit Damage", "4 × ESS"],
            ],
        },
    ],
}