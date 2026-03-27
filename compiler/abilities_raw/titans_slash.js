module.exports = {
    name: "Titan's Slash",
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
        "Melee, Flow Cone AOE, Weapon Damage",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Titans Slash Stance</b>.`,
                `On your Next Turn you can Trigger the <b>Stance</b>.`,
                `On Trigger you make an AOE Melee Attack, Hit Entities take Damage.`,
                `The AOE Flows from one side edge to the other, like left to right.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
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
                ["Stance Trigger", "Main-Action at Your Next Turn"],
                ["Cone Length", "3 × STR^(1/3)"],
                ["Cone Spread", "180° (half-circle)"],
                ["Damage Of Weapon's Type", "1d12 × ESS"],
            ],
        },
    ],
}