module.exports = {
    name: "Arcane Bullet",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Evocation | 10 Abjuration)",
    ],
    tags: [
        "Offense",
        "Demat Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of force.",
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
                ["Damage", "(2d10 × ESS) Demat"],
            ],
        },
    ],
}