module.exports = {
    name: "Stone Cannon",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of solid earth, condensed into a sharp cone.",
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
                ["Range", "20 / 40 × CS^(1/3)"],
                ["Damage", "(2d10 × ESS) Physical"],
                ["Armor-Pen", "5 × ESS"],
            ],
        },
    ],
}