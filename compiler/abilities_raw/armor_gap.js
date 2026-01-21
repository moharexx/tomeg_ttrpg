module.exports = {
    name: "Armor Gap",
    category: "on_attack",
    type: [
        "Skill",
        "(Any)",
    ],
    reqs_short: [
        "10 Slight | 10 Perception",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Slight | 10 Perception",
    ],
    tags: [
        "Offense",
        "Penetration",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You give Penetration of a Choosen Damage Type to the Parent Attack.",
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
                ["Cast Time", "Bonus-Action"],
                ["Bonus Penetration", "6 × ESS"],
            ],
        },
    ],
}