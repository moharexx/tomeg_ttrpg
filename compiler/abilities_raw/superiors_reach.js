module.exports = {
    name: "Superior's Reach",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon | Martial Arts",
    ],
    reqs_full: [
        "50 Melee Weapon | 50 Martial Arts",
    ],
    tags: [
        "Utility",
        "Reach",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "Multiply Melee Weapon's Reach.",
                "This only Effects Weapons which are currently weilded.",
                "The Reach Multipler's new Reach will Affect Basic Attack-Actions, and any Reach Stat Calculation in Abilities.",
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
                ["Reach Multiplier", "ESS^(1/3)"],
            ],
        },
    ],
}