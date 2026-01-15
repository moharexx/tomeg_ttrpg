module.exports = {
    name: "Static Glitch",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Abjuration",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), (5 Enchantment | 10 Transmutation | 20 Abjuration)",
    ],
    tags: [
        "Offense",
        "Bio Damage, Static AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: "When you use this Ability, make an Attack in a Line.",
        },
        {
            type: "list",
            content: [
                "DoT Effect:",
                "On Dealing Damage, the Ability will Repeat the Damage on the Caster's Next Turn.",
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
                ["Damage", "(1d6 × ESS) Bio"],
                ["Line Length", "3 × CS^(1/3)"],
                ["Line Width", "0.5 × CS^(1/3)"],
            ],
        },
    ],
}