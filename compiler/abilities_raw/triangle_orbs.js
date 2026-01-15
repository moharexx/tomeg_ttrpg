module.exports = {
    name: "Triangle Orbs",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "(Evocation | Abjuration), Magic Missle Ability",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (20 Evocation | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Demat Damage, AOE",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire Three Projectile made of force.",
                "The To-Hit is Static, but it can still CRIT.",
                "Throw only one d10 Check to determine CRIT for all Projectiles.",
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
                ["Overwritten Finalized To-Hit", "5 × ESS"],
                ["Range", "20 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["Damage", "(2d4 × ESS) Demat"],
            ],
        },
    ],
}