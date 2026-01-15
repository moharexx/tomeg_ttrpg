module.exports = {
    name: "Heal",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 10 WILL | 5 EGO), (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Defense",
        "Healing, Targeting",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Target a Biological Entity you can Pinpoint within Range, and bless them with Healing.",
            ],
        },
        {
            type: "dots",
            content: [
                "This does not regrow lost body parts.",
                "Undead Entites cannot be Healed.",
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
                ["Cast Time", "Bonus-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Healing", "3 × ESS"],
            ],
        },
    ],
}