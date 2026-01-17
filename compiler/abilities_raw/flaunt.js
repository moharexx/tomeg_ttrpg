module.exports = {
    name: "Flaunt",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Performance",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Performance",
    ],
    tags: [
        "Utility",
        "Self, Buff",
        "1 Minute / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Flaunt Stance</b>.`,
                `While in <b>Flaunt Stance</b> Performance Checks gain a Bonus of <box>10 × ESS</box>`,
                `While in <b>Flaunt Stance</b> you can do 1 Bonus-Action <a href="../main/mechanics.html#feint" target="_blank">Feint</a> as a Free-Action.`,
            ],
        },
        {
            type: "dots",
            content: [
                `This Ability Stays on even when <a href="../main/mechanics.html#conditions" target="_blank">Unconscious.</a>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Stance Trigger", "None"],
                ["Range", "Self"],
                ["Performance Bonus", "10 × ESS"],
            ],
        },
    ],
}