module.exports = {
    name: "Block Breaker",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "True Damage",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You focus your might on breaking your opponent's defenses.`,
                `On a Hit you deal additional <box>8 × ESS</box> True Damage into BUFFERs and Shielding Abilities.`,
                `This Ability Prioritizes Shielding over BUFFERs, remaining Damage overflows from Shielding to BUFFERs.`,
                `This Ability doesn't deal Damage into HP or SP.`,
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
                ["Special Condition", "Melee"],
                ["True Damage", "8 × ESS"],
            ],
        },
    ],
}