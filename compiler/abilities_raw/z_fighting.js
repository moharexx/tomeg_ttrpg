module.exports = {
    name: "Z-Fighting",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Enchantment | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Enchantment | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, VIT Save, Bio Damage, Debuff, Crowd Control",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you conjure an object inside a Pinpointed Entity, or overlay the Entity onto itself.`,
                `The Target must make a <b>VIT Save</b> of <box>10 × ESS</box> or take <box>2d6 × ESS</box> Bio Damage and get the <a href="../main/mechanics.html#conditions" target="_blank">Dazed Condition</a> until the End of their Next Turn.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["VIT Save", "10 × ESS"],
                ["Bio Damage", "2d6 × ESS"],
            ],
        },
    ],
}