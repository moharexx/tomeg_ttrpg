module.exports = {
    name: "Dispell (WIP)",
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
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Target something magical (like a Spell, Magical Item, or similar...), and attempt to Dispell it.`,
                `Roll <box>(1d10 + 5) × ESS</b> against the <b>Dispell Difficulty</b>, if you Roll at least equal you Succeed.`,
            ]
        },
        {
            type: "p",
            content: [
                `Dispell Difficulty of a Spell is based off its <b>Base</b> Cast Time, ESS, and Potency; <box>(+6 per Bonus-Action, +10 per Main-Action) × ESS + Potency</box>`,
                `If the Base Cast Time of the Spell is multi Round, then its Dispell Difficulty is <box>(20 × ESS) + Potency</box>`,
                `For Permanent Effects the Dispell Difficulty is <box>40 × (ESS | Tier)</box>`,
            ]
        },
        {
            type: "p",
            content: [
                `By using this as a Reaction (Example: <a target="_blank" href="../main/mechanics.html#ready">Ready</a>), it can be used as a Counter Spell.`,
                `Dispelling anything made by yourself is a Free-Action, and has 0 Difficulty.`,
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
                ["Cast Time", "Main-Action"],
                ["Range", "10 × CS^(1/3)"],
                ["Dispell Strength", "(1d10 + 5) × ESS"]
            ],
        },
    ],
}