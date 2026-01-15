module.exports = {
    name: "True Strike",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Perception | 10 Intuition | 10 Divination",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Perception | 10 Intuition | 10 Divination",
    ],
    tags: [
        "Offense, Cooldown",
        "To-Hit",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Your Attack's d10 Check can be made twice, choosing the better of the two.`,
                `The Attack is also immune to Disadvantage.`,
            ]
        },
        {
            type: "p",
            content: [
                `When put on a Save the Target makes 2 Saves, choosing the worse of the two.`,
                `The Save is also immune to Advantage.`,
            ]
        },
        {
            type: "p",
            content: [
                `<b>Note:</b> On-Attacks, when used on an AOE, by default still only effect 1 Target!`,
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
                ["Cooldown", "1 Minute (20 Rounds)"],
            ],
        },
    ],
}