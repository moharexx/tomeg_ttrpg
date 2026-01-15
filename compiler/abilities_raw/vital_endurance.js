module.exports = {
    name: "Vital Endurance",
    category: "active",
    type: [
        "Innate",
    ],
    reqs_short: [
        "VIT",
    ],
    reqs_full: [
        "10 VIT",
    ],
    tags: [
        "Defense",
        "Healing",
        "Bonus-Action, REST-HP",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "Your body does not betray you, you stand unfazed.",
                `You Spend REST-HP to Self Heal, and Remove the <a href="../main/mechanics.html#conditions">Prone Condition</a> from yourself.`,
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability Cannot CRIT.",
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
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Maximum Healing", "12 × ESS"],
            ],
        },
    ],
}