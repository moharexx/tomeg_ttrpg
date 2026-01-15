module.exports = {
    name: "Silence",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 20 EGO), (5 Abjuration | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Defense, Utility",
        "Negation, Obscurance, Static Sphere AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You Target a Point, an Area of Silence appears.",
                "In this Area all regular sound is muted.",
                "If the sound comes from an Ability which specifically makes sound, it only gets muted if it's ESS is under this Ability's ESS.",
                "Entities in the Area gain <box>6 × ESS</box> Thunder-RES, this cannot be Stacked.",
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "4 × ESS^(1/3)"],
                ["Thunder-RES", "6 × ESS"],
            ],
        },
    ],
}