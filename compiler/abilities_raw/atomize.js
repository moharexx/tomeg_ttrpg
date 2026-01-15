module.exports = {
    name: "Atomize",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Evocation | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Abjuration | 20 Evocation | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Demat Damage",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, it fires a Single Target beam of Disintegration, in a straight line.",
            ],
        },
        {
            type: "dots",
            content: [
                "Each point of Damage going into TEMP-HP or Shielding Abilities counts as 2 points of Damage.",
                "This Ability cannot CRIT!",
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
                ["Range", "10 × CS^(1/3)"],
                ["Overridden Finalized To-Hit", "10 × ESS"],
                ["Damage", "(10 × ESS) Demat"],
                ["Damage Against TEMP-HP and Shield like Abilities", "2×"],
            ],
        },
    ],
}