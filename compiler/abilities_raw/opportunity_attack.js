module.exports = {
    name: "Opportunity Attack",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon | Martial Arts",
    ],
    reqs_full: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Variable Damage",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you make a Melee Attack-Action against the Target Entity.",
                "If the Attack-Action would cost you only a Bonus-Action you make this Attack with Advantage.",
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
                ["Trigger", "Entity begins moving inside Melee Reach."],
            ],
        },
    ],
}