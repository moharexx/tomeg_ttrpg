module.exports = {
    name: "Evasion",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "50 AGI | 20 Acrobatics",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 AGI | 20 Acrobatics",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, Negation",
        "Free-Action, HD",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Spend <b>HD</b> to give Your <b>AGI Save</b> a small Bonus.",
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
                ["Cooldown", "Start of Next Turn"],
                ["Trigger", "Make an AGI Save"],
                ["HD to AGI Save Bonus", "5 to 1"],
                ["Max HD Spent", "5 × ESS"],
            ],
        },
    ],
}