module.exports = {
    name: "Alert",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Perception, 10 Intuition",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Perception, 10 Intuition",
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
                "When using this Ability, you are put in <b>Alert Stance.</b>",
                "While in Alert Stance Perception and Intuition Checks gain a Bonus of <box>10 × ESS</box> and INIT is increased by <box>10 × ESS</box>",
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
                "The Stance Breaks only when entering any other Stance.",
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
                ["Perception and Intuition Bonus", "10 × ESS"],
                ["INIT Increase", "10 × ESS"],
            ],
        },
    ],
}