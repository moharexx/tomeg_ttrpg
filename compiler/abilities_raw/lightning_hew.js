module.exports = {
    name: "Lightning Hew",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "20 Melee Weapon",
        "5 Evocation | 10 Transmutation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon",
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Electric Damage, Flow Line AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you slash with your Melee Weapon, and make an Electric Line Attack.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"The Greatest Arcanium Weapon"</i> - Adam`,
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
                ["Line Length", "2 × (STR | CS)^(1/3)"],
                ["Electric-Pen", "5 × ESS"],
                ["Damage", "(1d8 × ESS) Electric"],
            ],
        },
    ],
}