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
        "<b>Spell:</b> 10 CS, (5 Evocation | 10 Transmutation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, Heat Damage, To-Hit",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Fire a long range, high accuracy Single-Target Projectile made of colorful lights.`,
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
                ["Damage", "(2d8 × ESS) Heat"],
            ],
        },
    ],
}