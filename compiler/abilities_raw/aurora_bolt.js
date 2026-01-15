module.exports = {
    name: "Aurora Bolt",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Transmutation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Projectile, To-Hit",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of Light.",
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
                ["Range", "60 / 120 × CS^(1/3)"],
                ["To-Hit Multiplier", "2×"],
                ["Damage", "(3d4 × ESS) Heat"],
            ],
        },
    ],
}