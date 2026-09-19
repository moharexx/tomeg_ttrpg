module.exports = {
    name: "Self Regenerate",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "50 VIT | 200 WILL",
        "10 Enchantment | 20 Transmutation | 50 Evocation",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 200 WILL",
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Transmutation | 50 Evocation)",
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
                `When used, you Regenerate Yourself.`,
                `This can regrow bodyparts, and other permanent Damage.`,
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