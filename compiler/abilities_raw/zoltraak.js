module.exports = {
    name: "Zoltraak",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Abjuration | 10 Evocation)",
    ],
    tags: [
        "Offense",
        "Demat Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of force.",
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Damage", "(2d6 × ESS) Demat"],
                ["Demat-Pen", "6 × ESS"],
            ],
        },
    ],
}