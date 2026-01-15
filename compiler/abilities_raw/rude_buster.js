module.exports = {
    name: "Rude Buster",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Melee Weapon, (10 Evocation | 20 Transmutation | 50 Enchantment)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 Melee Weapon, (10 Transmutation | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile, Crowd Control",
        "Main-Action + Bonus-Action, GRIT, SP",
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