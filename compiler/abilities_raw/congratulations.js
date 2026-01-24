module.exports = {
    name: "Congratulations!",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Enchantment | 10 Anima | 20 Evocation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Anima | 20 Evocation)",
    ],
    tags: [
        "Utility, Cooldown",
        "Targeting, Buff",
        "Main-Action | Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You cheer on, with your inspiration, your Pinpointed Target gains an extra action.`,
                `When used, the Target will gain the Action you used to Cast this Spell on their Next Turn.`,
                `You can NOT Target Yourself with this Ability.`,
            ],
        },
        {
            type: "dots",
            content: [
                `If the Target has more that <box>200 × ESS Total XP</box> this Ability Fails.`,
                `Each point of <a href="../main/mechanics.html#potency">Potency</a> adds <box>+50 Total XP</box> to the Threshold above.`,
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Main-Action | Bonus Action"],
                ["Range", "10 × CS^(1/3)"],
                ["Cooldown", "Short-Rest"],
            ],
        },
    ],
}