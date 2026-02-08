module.exports = {
    name: "Telefrag",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Martial Arts | 50 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts | 50 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Melee, Physical Damage, Mobility",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, You Teleport to an Entity to be in your Melee Reach and Range, then make a Melee Attack.`,
            ]
        },
        {
            type: "dots",
            content: [
                `Telefrag's Movement does NOT Activate Reactions, or Trigger Stances.`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Damage", "(1d12 × ESS) Physical"],
            ],
        },
    ],
}