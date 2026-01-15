module.exports = {
    name: "Cold Ray",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Abjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Cold Damage, Projectile, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, it fires a Single Target Projectile made of Cold, in a straight line.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                "When an Entity is Damaged, it's MS is reduced, till the End of the Target's Next Turn.",
                "If a Soaked Target is Damaged, The Slow Strength is Doubled.",
                `Targets reduced to 0 MS counts as <a href="../main/mechanics.html#conditions" target="_blank">Rooted.</a>`,
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
                ["Damage", "(2d6 × ESS) Cold"],
                ["Slow Strength", "CS^(1/3)"],
            ],
        },
    ],
}