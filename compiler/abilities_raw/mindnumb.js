module.exports = {
    name: "Mindnumb",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Divination | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 20 EGO), (5 Divination | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Touch, Soul Save, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, your Touch becomes filled with mind numbing noise.`,
                `On Hit, the Target must make a <b>Soul Save</b>, or be <b>Mindnumbed.</b>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Mindnumb Effect:</b>`,
                `The Target cannot take any Actions, Reactions, and cannot Trigger their Stances.`,
                `If this Effect is somehow gotten while it's currently the Target's Turn, it only Starts at the End of their current Turn.`,
                `This Effect lasts till End of Target's Next Turn`,
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
                ["Range", "Touch"],
                ["Soul Save", "12 × ESS"],
            ],
        },
    ],
}