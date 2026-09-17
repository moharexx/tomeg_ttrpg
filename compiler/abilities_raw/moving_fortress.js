module.exports = {
    name: "Moving Fortress",
    category: "stance",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT",
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT",
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Defense",
        "Self, Negation, Debuff",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Moving Fortress Stance</b>.`,
                `While in <b>Moving Fortress Stance</b>, MS is Halved, but Reduce All incoming Damage Instances by <box>6 × ESS</box> and make <b>STR</b> and <b>VIT</b> Save with Advantage.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>HD Decrease, Taking Damage</box>`,
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
                ["Damage Reduction", "6 × ESS"],
                ["MS Divisor", "2"],
            ],
        },
    ],
}