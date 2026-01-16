module.exports = {
    name: "Fortitude",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "50 STR | 20 Athletics",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 AGI | 20 Athletics",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, Negation",
        "Free-Action, GRIT",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Spend <b>GRIT</b> to give Your <b>STR Save</b> a small Bonus.",
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
                ["Trigger", "Make an STR Save"],
                ["GRIT to STR Save Bonus", "2 to 1"],
                ["Max GRIT Spent", "4 × ESS"],
            ],
        },
    ],
}