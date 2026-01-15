module.exports = {
    name: "Shield",
    category: "reactive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Enchantment | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 10 EGO), (5 Abjuration | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When an Entity you Sense is getting Hit by an Attacker you Sense, you can Reduce the Damage.",
            ],
        },
        {
            type: "dots",
            content: [
                "This Ability reduces both the HP and SP parts of Hybrid Damage.",
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
                ["Cast Time", "Bonus-Action"],
                ["Trigger", "Sense a Target Get Hit"],
                ["Range", "10 × CS^(1/3)"],
                ["Damage Reduction", "(1d4 + 5) × ESS"],
            ],
        },
    ],
}