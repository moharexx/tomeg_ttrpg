module.exports = {
    name: "Swift Sensing",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "WILL",
        "Perception | Intuition",
    ],
    reqs_full: [
        "50 WILL",
        "20 Perception | 20 Intuition",
    ],
    tags: [
        "Utility",
        "Buff, Sense",
        "Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You make a <box>Perception | Intuition</box> d10 Check.",
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
                ["Cooldown", "1 Minute (20 Round)"],
            ],
        },
    ],
}