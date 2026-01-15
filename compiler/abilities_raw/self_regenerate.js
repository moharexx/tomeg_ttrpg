module.exports = {
    name: "Self Regenerate",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "VIT | WILL",
        "Evocation | Transmutation | Enchantment",
    ],
    reqs_full: [
        "Innate: 50 CON | 200 WILL | Vampirism | Lycanthropy",
        "Spell: (50 INT | 20 WILL | 20 EGO), (20 Enchantment | 50 Transmutation | 200 Evocation)",
    ],
    tags: [
        "Defense",
        "Healing, Self",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you Regenerate Yourself.",
                "This can regrow bodyparts, and other permanent Damage.",
            ],
        },
        {
            type: "list",
            content: [
                "Passive Regeneration ((200 CON | 1000 WILL | 200 Transmutation | 200 Enchantment), 50 XP):",
                "Unlocking this will Simulate the following Passive Ability:",
                "At the Start of your Turns You Heal <box>2 × ESS</box> Amount.",
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
                ["Range", "Self"],
                ["Healing", "5 × ESS"],
            ],
        },
    ],
}