module.exports = {
    name: "Thunder Burst",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Evocation | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphere AOE, Thunder Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, cracks the air and creates a Thunder explosion.`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "2 × ESS^(1/3)"],
                ["Damage", "(1d10 × ESS) Thunder"],
            ],
        },
    ],
}