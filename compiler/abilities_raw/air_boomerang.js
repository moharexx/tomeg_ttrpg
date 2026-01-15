module.exports = {
    name: "Air Boomerang",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "20 Martial Arts",
        "5 Transmutation | 10 Enchantment | 20 Evocation",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts",
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Transmutation | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Flow Line AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you literally grab and throw air away.",
                "This is a Flow Line AOE Ranged Projectile Attack, flowing out from the Caster.",
                "After the Attack the Air Boomerang stops midair.",
                "At the End of Your Next Turn the Air Boomerang does another Line Attack back to the Caster's current position.",
            ],
        },
        {
            type: "dots",
            content: [
                "If the Attack's Damage is reduced to 0, the Air Boomerang is Destroyed.",
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
                ["Line Length", "5 × (STR | CS)^(1/3)"],
                ["Line Width", "(STR | CS)^(1/3) / 2"],
                ["Damage", "(2d6 × ESS) Physical"],
            ],
        },
    ],
}