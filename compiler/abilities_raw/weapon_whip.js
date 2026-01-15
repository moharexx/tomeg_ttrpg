module.exports = {
    name: "Weapon Whip",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon",
    ],
    reqs_full: [
        "10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Crowd Control",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you Attack the Target Entity.",
                "If the Attack Hits, the Target must succeed on a <b>STR Save</b>, or get Moved.",
                `If the Target is <a href="../main/mechanics.html#conditions" target="_blank">Airborn</a>, the Forced Movement is doubled.`,
            ],
        },
        {
            type: "p",
            content: [
                "Yes, you can knock people airborn.",
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
                ["Range", "Reach + 2 × ESS^(1/3)"],
                ["STR Save", "12 × ESS"],
                ["Forced Movement", "STR^(1/3)"],
            ],
        },
    ],
}