module.exports = {
    name: "Heartburn",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Abjuration | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Abjuration | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, VIT Save, Heat Damage, Debuff",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you burn a Pinpointed Entity away from the inside.`,
                `The Target must make a <b>VIT Save</b> of <box>12 × ESS</box> or take <box>1d12 × ESS</box> Heat Damage and Support Reductions.`,
                `The Damage of this Ablity is repeated at the Start of Casters Next Turn.`,
                `All Healing, Shielding, and BUFFERs the Target recieve is Reduced by <box>6 × ESS</box> until the End of their Next Turn.`,
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
                ["Heat Damage", "1d12 × ESS"],
                ["Support Reductions", "6 × ESS"],
            ],
        },
    ],
}