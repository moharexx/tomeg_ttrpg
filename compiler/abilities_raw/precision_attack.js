module.exports = {
    name: "Precision Attack",
    category: "on_attack",
    type: [
        "Skill",
        "(Any)",
    ],
    reqs_short: [
        "Perception",
    ],
    reqs_full: [
        "10 Perception",
    ],
    tags: [
        "Offense",
        "To-Hit",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: "When you use an Attack, you can use this Ability to add a Bonus to the Attack Roll's To-Hit.",
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
                ["To-Hit Bonus", "10 × ESS"],
            ],
        },
    ],
}