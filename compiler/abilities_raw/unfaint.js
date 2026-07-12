module.exports = {
    name: "Unfaint",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Enchantment | 10 Anima | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Touch, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch an Entity and Remove the <a href="../main/mechanics.html#conditions" target="_blank">Unconscious Condition</a>.`,
                `If the Unconscious Condition is caused by an Ability then this Unfaint attempts a Save against the Ability's Save.`,
                `The Target is also immune to falling Unconscious from the <a href="../main/mechanics.html#conditions" target="_blank">Dying Condition</a> for the Duration.`,
                `<b>Note:</b> The Dying condition still effects the Target.`
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
                ["Range", "Touch"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Save Nat. Val. Mult", "ESS"],
                ["Save Modifier", "5 × ESS"],
            ],
        },
    ],
}