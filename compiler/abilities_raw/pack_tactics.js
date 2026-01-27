module.exports = {
    name: "Pack Tactics",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Melee Weapon | 5 Ballistic | 5 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 Melee Weapon | 5 Ballistic | 5 Martial Arts",
    ],
    tags: [
        "Offense",
        "Self, Variable Damage",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Pack Tactics Stance</b>.`,
                `While in <b>Pack Tactics Stance</b> every other ally in Range who is also in <b>Pack Tactics</b> gets an On-Hit Damage Bonus of <box>ESS</box>`,
                `The Damage Bonus you can get is Capped at <box>4 × ESS</box>`,
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "None"],
                ["Tactics Range", "5 × ESS^(1/3)"],
                ["Damage Bonus", "ESS"],
            ],
        },
    ],
}