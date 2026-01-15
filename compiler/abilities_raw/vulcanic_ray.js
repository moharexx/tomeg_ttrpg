module.exports = {
    name: "Vulcanic Ray",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Heat Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Ray made of magma.",
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
                ["Damage", "(2d12 × ESS) Heat"],
            ],
        },
    ],
}