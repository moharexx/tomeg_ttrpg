module.exports = {
    name: "Light Beam",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Conjuration",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), (10 Evocation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Projectile, Debuff",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Light Beam.",
                "If a Target is Damaged by this Ability, it must make a VIT Save, or be Blinded till End of it's Next Turn.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Light Effect:</b>",
                "This only Disables Sight based Perception. [DEBUFF].",
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
                ["Range", "20 / 40 × CS^(1/3)"],
                ["Damage", "(2d6 × ESS) Heat"],
                ["VIT Save", "10 × ESS"],
            ],
        },
    ],
}