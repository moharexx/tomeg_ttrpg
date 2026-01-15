module.exports = {
    name: "Hold Fast!",
    category: "stance",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT | 50 WILL",
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL",
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Hold Fast! Stance.</b>",
                "While in <b>Hold Fast! Stance</b>, you gain <b>Armor VS All</b>, and make <b>STR Saves</b> with Advantage.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot CRIT.",
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "None"],
                ["Armor VS All", "4 × ESS"],
            ],
        },
    ],
}