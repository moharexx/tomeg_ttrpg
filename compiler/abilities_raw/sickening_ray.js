module.exports = {
    name: "Sickening Ray",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), (10 Enchantment | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Projectile, Debuff",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, it fires a Single Target Projectile, in a straight line.",
                "If the Target is Hit, it's Finalized d10 Checks get a Penalty.",
                "The d10 Checks Penalty lasts until the End of the Casters Next Turn."
            ]
        },
        {
            type: "dots",
            content: [
                "This d10 Check Penalty cannot stack.",
                "If the Target has more Bio Resistance than the Penalty, then the Spell Fails.",
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Finalized d10 Check Penalty", "5 × ESS"],
            ],
        },
    ],
}