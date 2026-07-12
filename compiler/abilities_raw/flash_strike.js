module.exports = {
    name: "Flash Strike",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Flow Line AOE, Weapon Damage, Mobility",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Flash Strike Stance</b>.`,
                `On your Next Turn you can Trigger the <b>Stance</b>.`,
                `On Trigger you flash in a Flow Line AOE Melee Attack, you are the Flow of the AOE.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, (HD Decrease | Taking Damage)</box>`,
                `You select the HD Decrease or Taking Damage part when you are put in the Stance.`,
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
                ["Stance Trigger", "Main-Action at your Next Turn"],
                ["Line Length", "3 × MS"],
                ["Line Width", "ESS^(1/3)"],
                ["Damage Of Weapon's Type", "2d12 × ESS"],
            ],
        },
    ],
}