module.exports = {
    name: "Heartbreak",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Evocation | 50 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Evocation | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, VIT Save, Physical Damage, Debuff",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you burn a Pinpointed Entity away from the inside.`,
                `The Target must make a <b>VIT Save</b> of <box>12 × ESS</box> or take <box>2d6 × ESS</box> Physical Damage.`,
                `On a Failed Save the Target also takes the <a href="../main/mechanics.html#conditions">Dazed Condition</a> till the End of their Next Turn.`,
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
                ["Range", "20 × CS^(1/3)"],
                ["VIT Save", "12 × ESS"],
                ["Physical Damage", "2d6 × ESS"],
            ],
        },
    ],
}