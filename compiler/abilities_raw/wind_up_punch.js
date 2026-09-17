module.exports = {
    name: "Wind Up Punch",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Martial Arts",
    ],
    reqs_full: [
        "10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Weapon Damage, Mobility, Stacks",
        "Bonus-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Wind Up Punch Stance</b>.`,
                `While in <b>Wind Up Punch Stance</b>, you hold a Charged up Natural Melee Weapon Attack.`,
                `Each time you enter this Stance you gain a Stack.`,
                `On Stance Trigger: You Move <box>MS × Stack</box> meters, and Attack an Entity whithin Reach.`,
                `MAX Stack Count: <box>3</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities</box>`,
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
                ["Stance Trigger", "Main-Action at your next Turn."],
                ["Movement Distance", "MS × Stack"],
                ["To-Hit Bonus", "4 × Stack"],
                ["Damage Of Weapon's Type", "2d8 × ESS"],
            ],
        },
    ],
}