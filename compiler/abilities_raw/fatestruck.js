module.exports = {
    name: "Fatestruck",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Divination | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Divination | 50 Anima)",
    ],
    tags: [
        "Utility, Cooldown",
        "Touch, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You Touch a Target, they become Fatestruck for the Duration.",
                "The next time the Target Rolls a 1 on a d10 Check, it is treated as Rolling a 10 and also a CRIT.",
                "Once this happens, the Target is no longer Fatestruck.",
            ]
        },
        {
            type: "p",
            content: [
                "Alternatively you can Negatively Fate Struck a Target, Cursing them on a Failed Save.",
                "The next time the Target Rolls a 10 on a d10 Check, it is treated as Rolling a 1 and NOT a CRIT.",
                "Once this happens, the Target is no longer Cursed.",
            ]
        },
        {
            type: "p",
            content: [
                "You can have only 1 currently Active Instance of this Ability.",
                "If the Target has more that <box>200 × ESS Total XP</box> this Ability Fails.",
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
                ["Cast Time", "Bonus-Action"],
                ["Cooldown", "Short-Rest"],
                ["Range", "Touch"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Soul Save", "14 × ESS"],
            ],
        },
    ],
}
