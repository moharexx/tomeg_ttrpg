module.exports = {
    name: "Inflict Wounds",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Enchantment | 10 Anima | 20 Abjuration)",
    ],
    tags: [
        "Offense",
        "Necrotic Damage, Touch",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch a Target and harm them, or Heal them if they are Undead.`,
                `The Damage is Executing, the Healing is HP only.`,
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
                ["Healing or Damage", "(1d4 + 4) × ESS"],
                ["Necrotic-Pen", "10 × ESS"],
            ],
        },
    ],
}