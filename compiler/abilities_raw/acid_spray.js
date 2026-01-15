module.exports = {
    name: "Acid Spray",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Cone AOE, Demat Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, spray Acid in a Cone.",
                "This is an AOE Attack, flowing out from the Caster.",
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
                ["Cone Length", "4 × CS^(1/3)"],
                ["Cone Spread", "30° (~3 Forward = +2 width)"],
                ["Damage", "(1d12 × ESS) Demat"],
            ],
        },
    ],
}