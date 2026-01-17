module.exports = {
    name: "Poison Puff",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 CS, (5 Conjuration | 10 Enchantment | 20 Anima)",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Conjuration | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Offense",
        "Ranged, Targeting, Bio Damage, VIT Save",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you create a puff of Poison at a Pinpointed Entity or more.`,
                `You have <b>Targeting Points</b> equal to <box>10 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.`,
                `The VIT Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.`,
                `On a Failed VIT Save, the Target takes Damage equal to the <b>Targeting Points</b> spent on the Target.`,
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
                ["Range", "20 × CS^(1/3)"],
                ["VIT Save", "Targeting Points spent on Entity"],
                ["Targeting Point", "10 × ESS"],
                ["Damage", "(Targeting Points spent on Target) Bio"],
            ],
        },
    ],
}