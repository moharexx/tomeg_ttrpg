module.exports = {
    name: "Twin Shot",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense, Cooldown",
        "Weapon Damage",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you can make an additional Ranged Attack-Action.",
                "When doing so, the would be Action Cost of the Attack-Action is deducted from Your Next Turn.",
                "If for some reason you don't have the Action that would be deduced, you're not punished.",
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Short-Rest"]
            ],
        },
    ],
}