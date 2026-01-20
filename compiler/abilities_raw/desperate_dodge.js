module.exports = {
    name: "Desperate Dodge",
    category: "reactive",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "20 VIT | 50 AGI",
        "20 CS, (10 Transmutation | 20 Enchantment | 50 Evocation)",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 VIT | 50 AGI",
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, True Damage",
        "Free-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Damage yourself to dodge an Attack.`,
                `You gain HD which you can instantly spend from to dodge the Attack.`,
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
                ["Cast Time", "Free-Action"],
                ["Trigger", "Get Attacked"],
                ["Cooldown", "Short-Rest"],
                ["HD Gain", "12 × ESS"],
                ["Self Damage", "(5 × ESS) True"],
            ],
        },
    ],
}