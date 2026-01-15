module.exports = {
    name: "Unfaint",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Anima",
    ],
    reqs_full: [
        "(20 INT | 10 WILL | 5 EGO), (5 Enchantment | 10 Anima | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Buff, Touch",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch an Entity and Remove the <a href="../main/mechanics.html#conditions">Unconscious Condition.</a>`,
                `If the Entity has less then 1 HP, It will have the <a href="../main/mechanics.html#conditions">Dying Condition.</a>`,
                `If the Unconscious Condition is caused by a Spell then this Ability will Attempt a Save against the Spell's Save.`,
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> If the Soul Left the Body, the Spell Fails.",
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
                ["Save Modifier VS Spell", "5 × ESS"],
            ],
        },
    ],
}