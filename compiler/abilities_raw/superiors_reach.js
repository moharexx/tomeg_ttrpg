module.exports = {
    name: "Superior's Reach",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "50 Melee Weapon | 50 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Melee Weapon | 50 Martial Arts",
    ],
    tags: [
        "Utility",
        "Reach",
    ],
    unlock_cost: 0,
    description: [
        {
            type: "p",
            content: [
                `Multiply your Melee Reach.`,
                `The new Reach affects your Melee Attacks-Actions, and Abilities which scale based on your Melee Reach.`,
                `<b>Note:</b> This gives the same scaling to Melee Reach as Ranged Attacks have by default.`,
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
                ["Reach Multiplier", "ESS^(1/3)"],
            ],
        },
    ],
}