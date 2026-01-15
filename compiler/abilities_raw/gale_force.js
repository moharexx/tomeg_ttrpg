module.exports = {
    name: "Gale Force",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Conjuration | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Transmutation | 10 Conjuration | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of air.",
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
                ["Range", "30 / 60 × CS^(1/3)"],
                ["Damage", "(2d8 × ESS) Physical"],
            ],
        },
    ],
}