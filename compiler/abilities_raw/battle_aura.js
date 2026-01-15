module.exports = {
    name: "Battle Aura",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT | 50 WILL",
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL",
        "<b>Skill:</b> 20 Martial Arts",
    ],
    tags: [
        "Defense",
        "Self, Buff",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When this Ability is used, you can count your body as Armor.",
                "This Ability cannot get over the Property Point Maximum, and cannot be Impossible to normally Equip.",
                "The Ability Ends when the Caster loses Consciousness.",
            ],
        },
        {
            type: "dots",
            content: [
                "You can change the Armor by Recasing this Ability.",
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
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Simulated Item Tier", "ESS"],
            ],
        },
    ],
}