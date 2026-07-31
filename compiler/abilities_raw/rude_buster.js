module.exports = {
    name: "Rude Buster",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Melee Weapon, (5 Transmutation | 10 Enchantment | 20 Evocation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 Melee Weapon, (5 Transmutation | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Demat Damage",
        "Main-Action + Bonus-Action, GRIT",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you Swing a Weapon and fire a crescent made out of energy.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Ability Cost", "5 GRIT × ESS"],
                ["Range", "5 / 10 × (STR | CS)^(1/3)"],
                ["Damage", "(2d12 × ESS) Demat"],
                ["Demat-Pen", "10 × ESS"],
            ],
        },
    ],
}