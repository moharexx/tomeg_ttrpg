module.exports = {
    name: "Transfer Life",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "WILL | EGO",
        "Transmutation | Enchantment | Anima",
    ],
    reqs_full: [
        "Innate: 200 WILL | 200 EGO",
        "Spell: (20 INT | 10 WILL | 10 EGO), (5 Transmutation | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Healing, Touch",
        "Main-Action, REST-HP",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you Spend REST-HP to Heal a Touched a Entity.",
                "You can Spend HP in place of REST-HP for this Ability.",
            ],
        },
        {
            type: "dots",
            content: [
                "This does not regrow lost body parts.",
                "This works on any Entity, but not Constructs.",
                "Yes, you can heal a corpse. No, it won't revive them.",
            ],
        },
        {
            type: "p",
            content: [
                "Note: This Ability cannot CRIT.",
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
                ["REST-HP to HP", "1 to 1"],
                ["Max Healing", "12 × ESS"],
            ],
        },
    ],
}