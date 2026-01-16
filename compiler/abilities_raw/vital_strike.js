module.exports = {
    name: "Vital Strike",
    category: "on_attack",
    type: [
        "Skill",
        "(Advantage)",
    ],
    reqs_short: [
        "10 AGI | 10 Perception",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 AGI | 10 Perception",
    ],
    tags: [
        "Offense, Cooldown",
        "Variable Damage",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: `If Parent Attack was with Advantage, add Bonus On-Hit Damage of the same Type.`,
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
                ["Trigger", "Advantage"],
                ["Cooldown", "Can use Next Round"],
                ["Bonus On-Hit Damage", "4 × ESS"],
            ],
        },
    ],
}