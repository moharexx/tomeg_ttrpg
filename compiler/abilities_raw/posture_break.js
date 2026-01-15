module.exports = {
    name: "Posture Break",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Debuff",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You make a Melee Attack against a Target, for the sole porpuse of making them loose their footing.",
                "On Hit the Target must make a <b>STR Save.</b>",
                `If the Target Fails the <b>STR Save</b> it gains the <a href="../main/mechanics.html#conditions" target="_blank">Staggered Condition</a> and it's HD is Reduced to 0.`,
                "If this Attack Misses, the Target doesn't Spend HD to make it Miss.",
            ],
        },
        {
            type: "dots",
            content: [
                "This Ability's Save is Higher if it's made with Advantage.",
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
                ["STR Save", "8 × ESS"],
                ["STR Save when Advantage", "12 × ESS"]
            ],
        },
    ],
}