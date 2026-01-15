module.exports = {
    name: "Shocking Grasp",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Martial Arts",
        "Evocation | Conjuration | Transmutation",
    ],
    reqs_full: [
        "Skill: 10 Martial Arts",
        "Spell: (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Electric Damage, Touch",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You imbue electricity onto your hands, and shock your Target with a sudden grasp.",
                "This is a <b>Natural Melee Attack.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Electric Effect:</b>",
                `Against Soaked, or Airborn Targets this Ability Deals <a href="../main/mechanics.html#max_value">Max-Damage.</a>`,
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
                ["Damage", "(2d8 × ESS) Electric"],
            ],
        },
    ],
}