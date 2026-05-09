module.exports = {
    name: "Cure Wounds",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Defense",
        "Healing, Touch",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch a Biological Target and its wounds close.`,
                `Undead Type Entites instead of being Healed, recieve Radiant Damage, with high Radiant-Pen.`,
            ],
        },
        {
            type: "p",
            content: [
                `This does not regrow lost body parts.`,
                `Yes, you can heal a corpse. No, it won't revive them.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Redo Of Healer</b> (5 XP):`,
                `Rather than Heal, you can choose to deal <a target="_blank" href="../main/mechanics.html#executing">Executing</a> Bio Damage, with high Bio-Pen.`,
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
                ["Healing (or Damage)", "(1d4 + 4) × ESS"],
                ["Penetration", "10 × ESS"],
            ],
        },
    ],
}