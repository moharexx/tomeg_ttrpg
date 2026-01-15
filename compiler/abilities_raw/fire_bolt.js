module.exports = {
    name: "Fire Bolt",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Evocation | 10 Transmutation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of fire.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Heat Effect:</b>",
                "On Dealing Damage, the Ability will do the same Damage on the Caster's Next Turn.",
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
                ["Damage", "(1d12 × ESS) Heat"],
            ],
        },
    ],
}