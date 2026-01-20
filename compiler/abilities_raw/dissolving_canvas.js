module.exports = {
    name: "Dissolving Canvas",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 CS, (10 Anima | 20 Transmutation | 50 Enchantment)",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Transmutation | 50 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Demat Damage, AGI Save, Effect",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Target a Pinpointed Entity in Range, and attempt to infect them.`,
                `If the Target fails a <b>AGI Save</b> of <box>12 × ESS</box> they gain the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `On Dealing Damage, the Target gets Soaked with Acid.`,
                `At the Start of the Caster's subsequent Turn the Target takes <box>(8 × ESS) Demat</box> Damage.`,
                `This Effect Ends after the Entity uses a <b>Main-Action + Bonus-Action</b> to remove it.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["AGI Save", "12 × ESS"],
                ["Damage", "(1d8 × ESS) Demat"],
            ],
        },
    ],
}