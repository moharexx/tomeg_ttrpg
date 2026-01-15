module.exports = {
    name: "Cure Wounds",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Defense",
        "Healing, Touch",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch a Biological Target and its wounds close.",
                "Undead Type Entites rather than be Healed, recieve Radiant Damage equal to the Healing.",
            ],
        },
        {
            type: "dots",
            content: [
                "This does not regrow lost body parts.",
                "Yes, you can heal a corpse. No, it won't revive them.",
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
                ["Range", "Touch"],
                ["Healing", "(1d4 + 4) × ESS"],
                ["Radiant-Pen", "10 × ESS"],
            ],
        },
    ],
}