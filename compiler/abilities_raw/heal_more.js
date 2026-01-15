module.exports = {
    name: "Heal More",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Enchantment | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 50 WILL | 20 EGO), (10 Transmutation | 20 Enchantment | 50 Anima)",
    ],
    tags: [
        "Defense",
        "Healing, Targeting 5",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you Target up to 5 different Biological Entities you can Pinpoint within Range, and bless them with Healing.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Max Targets", "5"],
                ["Range", "5 × CS^(1/3)"],
                ["Healing", "4 × ESS"],
            ],
        },
    ],
}