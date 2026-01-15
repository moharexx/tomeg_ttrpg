module.exports = {
    name: "Command Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Anima | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 10 WILL | 10 EGO), (5 Anima | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Offense, Utility",
        "Targeting, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you Command a Pinpointed Entity or more, this is considered a Ranged Save.`,
                `You have <b>Targeting Points</b> equal to <box>8 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.`,
                `The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.`,
                `On a Failed Save the Target only uses Actions and Reactions as you instruct.`,
                `After the End of the Target's Next Turn the Effect Ends.`,
            ]
        },
        {
            type: "dots",
            content: [
                `The Commanded Target will not do anything suicidal, like Attack itself.`,
                `If the Target Failed the Save so bad it didn't even reach Half of the Save then Command can do suicidal things.`,
            ]
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
                ["Range", "5 × CS^(1/3)"],
                ["Soul Save", "Targeting Points spent on Entity"],
                ["Targeting Points", "8 × ESS"],
            ],
        },
    ],
}