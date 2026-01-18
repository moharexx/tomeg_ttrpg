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
                "This Ability can be used after determiming if the Save is a Fail or not.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can add +1 to Save Bonus.`,
                `This does not have additional <b>GRIT</b> Cost.`,
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