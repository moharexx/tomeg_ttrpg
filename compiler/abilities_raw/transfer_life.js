module.exports = {
    name: "Transfer Life",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "20 VIT",
        "5 Transmutation | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 VIT",
        "<b>Spell:</b> 10 CS, (5 Transmutation | 10 Anima | 20 Enchantment)",
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
                `When used, you Spend REST-HP to Heal a Touched a Entity.`,
                `You can Spend HP in place of REST-HP for this Ability.`,
            ],
        },
        {
            type: "p",
            content: [
                `Note: This Ability cannot CRIT.`,
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