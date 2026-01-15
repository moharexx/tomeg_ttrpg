module.exports = {
    name: "Misty Step",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Acrobatics",
        "Transmutation | Conjuration",
    ],
    reqs_full: [
        "200 Acrobatics",
        "(10 INT | 10 WILL | 20 EGO), (10 Transmutation | 10 Conjuration)",
    ],
    tags: [
        "Utility, Cooldown",
        "Mobility",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You can Teleport to a point, which you can Pinpoint with a Sense within Teleport Distance.",
                "The Target will carry anything they hold, even other Living Entities.",
                "Unwilling Entities can make a Soul Save against this Ability.",
            ],
        },
        {
            type: "list",
            content: [
                "Misty Touch (50 Enchantment):",
                "Makes the Ability Touch.",
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
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Soul Save", "10 × ESS"],
                ["Teleport Distance", "6 × ESS^(1/3)"],
            ],
        },
    ],
}