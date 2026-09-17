module.exports = {
    name: "Star Strike",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Weapon Damage",
        "Free-Action / Trigger",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Star Strike Stance</b>.`,
                `When you make any Single Target Melee Attack, you can Trigger this Stance.`,
                `On Stance Trigger: Enhance the Reach of said Melee Attack by <box>4 × ESS^(1/3)</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Cast Time", "Main-Action"],
                ["Stance Trigger", "Melee Attack-Action on your Next Turn"],
                ["Range", "Self"],
                ["Bonus Reach", "4 × ESS^(1/3)"],
            ],
        },
    ],
}