module.exports = {
    name: "Dispell",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Anima | 50 Enchantment",
    ],
    reqs_full: [
        "<b>spell:</b> 20 CS, (10 Abjuration | 20 Anima | 50 Enchantment)",
    ],
    tags: [
        "Utility",
        "Ranged, Negation",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Target something magical (like a Spell, Magical Item, or similar...), and attempt to Dispell it.`,
                `Roll <box>Dispell Strength</b> against the <b>Dispell Difficulty</b>, if you Roll at least equal you Succeed.`,
            ]
        },
        {
            type: "p",
            content: [
                `Dispell Difficulty for Spells, Effects and such (uses ESS): <box>(10 × ESS) + Potency</box>`,
                `Dispell Difficulty for Magical Items, and such (uses Tier): <box>40 × Tier</box>`,
            ]
        },
        {
            type: "p",
            content: [
                `If you use this Ability as a Reaction (Example: <a target="_blank" href="../main/mechanics.html#ready">Ready</a>), it can be used as a Counter Spell.`,
                `Dispelling anything made by the Caster themselves is a Free-Action, and has 0 Difficulty.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each Point of <a target="_blank" href="../main/mechanics.html#potency">Potency</a> you gain +1 Dispell Strength.`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Range", "10 × CS^(1/3)"],
                ["Dispell Strength", "(1d10 + 6) × ESS"]
            ],
        },
    ],
}