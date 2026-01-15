module.exports = {
    name: "Darkheart",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Necrotic Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "Add Bonus On-Hit Necrotic Damage, and Heal and gain SP equal to the Damage dealt.",
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
                ["Special Condition", "Melee"],
                ["Bonus On-Hit Damage", "(2d4 × ESS) Necrotic"],
            ],
        },
    ],
}