module.exports = {
    name: "Lightning Bolt",
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
        "Electric Damage, AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Lightning Bolt, in a straight Line.",
                "This is a Line Attack, that Hits Multiple Targets.",
                "If an Entity gets Hit, but Fully Negates the Damage, the Line Stops there.",
            ],
        },
        {
            type: "list",
            content: [
                "Electric Effect:",
                `Against Wet with Water, or Airborn Targets this Ability Deals <a href="../main/mechanics.html#max_value">Max-Damage.</a>`,
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
                ["Line Length", "10 × CS^(1/3)"],
                ["Damage", "(1d10 × ESS) Electric"],
            ],
        },
    ],
}