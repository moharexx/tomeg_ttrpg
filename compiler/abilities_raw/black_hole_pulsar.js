module.exports = {
    name: "Black Hole Pulsar",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Abjuration | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Abjuration | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Demat Damage, Flow Sphere AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "A Dark Sphere appears in Range, which Expands, collapses, then Explodes at the End of your Next Turn.",
                "This is a Sphere AOE Ranged Attack.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>Natz Powerful Pulsar</i>`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["Damage", "(2d12 × ESS) Demat"],
            ],
        },
    ],
}