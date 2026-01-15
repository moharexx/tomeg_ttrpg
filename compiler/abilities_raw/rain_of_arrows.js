module.exports = {
    name: "Rain of Arrows",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Ballistic",
    ],
    reqs_full: [
        "20 Ballistic",
    ],
    tags: [
        "Offense",
        "Variable Damage, AOE",
        "Main-Action (+ Bonus-Action)",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you shoot up in the Air, and then those shots fall down like rain.",
                "This has a Cylinder Hitbox which can be placed vertically in this Ability's Range.",
                "Each Entity within the Cylinder, at the End of your Turn, must pass an AGI Save or Take Damage.",
            ],
        },
        {
            type: "list",
            content: [
                "Zone Overflow:",
                "This Ability can be Overflown with a Bonus-Action.",
                "If the Weapon is Light, you Double the Cylinder's Radius.",
                "If the Weapon is Medium, you can increase it's Save Difficulty by: <box>4 × ESS</box>",
                "If the Weapon is Heavy, the Ability gains Executing.",
                "If the Weapon has the Spread Property, the effect replicates on the Start of your Next Turn.",
                "You can only choose one of the Options Above.",
            ],
        },
        {
            type: "p",
            content: [
                "Note: This Ability can only be used with a Ballistic Weapon. duh.",
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
                ["Range", "Parent Weapon Normal Weapon Range"],
                ["AGI Save", "8 × ESS"],
                ["Cylinder Radius", "AGI^(1/3)"],
                ["Cylinder Height", "10 × AGI^(1/3)"],
                ["Damage", "(1d12 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}