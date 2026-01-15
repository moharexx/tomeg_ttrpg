module.exports = {
    name: "Healing Rock",
    category: "on_attack",
    type: [
        "Skill",
        "Spell",
        "(Single Target)",
    ],
    reqs_short: [
        "20 Ballistic",
        "5 Transmutation | 10 Enchantment | 20 Evocation",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Ballistic",
        "<b>Spell:</b> (20 INT | 10 WILL | 5 EGO), (5 Transmutation | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Defense",
        "Healing,",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When you use a Single-Target Attack, your Attack will Heal the Damaged Entity.",
                "Yes, this Ability must make at least 1 Post-Mitigation Damage in order to heal...",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"The true enemies were the friends we made along the way."</i>`,
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
                ["Healing", "2d6 × ESS"],
            ],
        },
    ],
}