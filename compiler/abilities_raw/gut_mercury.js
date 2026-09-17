module.exports = {
    name: "Gut Mercury",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Enchantment | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Enchantment | 20 Abjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, VIT Save, Bio Damage, Debuff, Crowd Control, Effect",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, the Targets insides gets filled with mercury, slowing and harming them.`,
                `The Target Entity must succeed a <b>VIT Save</b> of <box>10 × ESS</box>, or get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `The Target's MS is Reduced by <box>CS^(1/3)</box>`,
                `The Target can repeat the Save at the End of their Turns, Ending the Effect on a Success.`,
                `On a Fail the Target takes <box>2 × ESS</box> Bio Damage with <box>10 × ESS</box> Bio-Pen`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["VIT Save", "10 × ESS"],
                ["Bio Damage", "2 × ESS"],
                ["Bio-Pen", "10 × ESS"],
                ["Slow Strength", "CS^(1/3)"],
            ],
        },
    ],
}