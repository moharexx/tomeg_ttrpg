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
        "<b>spell:</b> (20 INT | 50 WILL | 200 EGO), (10 Abjuration | 20 Anima | 50 Enchantment)",
    ],
    tags: [
        "Utility",
        "Negation",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, a Magical Effect must be Targeted.",
                "If the Target Magical ESS or Tier is less than <box>Dispell Strength</box>, then the Target Ends.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Self Dispell:</b>",
                "Dispelling any Spell Cast by the Caster is a Free-Action, and always Succeeds.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Dispell Potency:</b>",
                `For each 5 Points of <a href=".at./main/mechanics.html#potency">Potency</a> the Ability is Cast at, increase <box>Dispell Strength</box> by 1.`,
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
                ["Dispell Strength", "ESS"]
            ],
        },
    ],
}