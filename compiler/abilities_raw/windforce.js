module.exports = {
    name: "Windforce",
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
        "Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You imbue your Melee Attack with the force of wind.`,
                `On-Hit the Target makes a <b>STR Save</b> of <box>14 × ESS</box>, or get Knocked Back.`,
                `The Knockback Direction can be anything.`,
                `If the Knockbacked Entity Hits a Solid Surface, it takes Physical Damage.`,
            ],
        },
        {
            type: "p",
            content: [
                `When this Ability CRITs, not only its Damage is Doubled, but its Knockback Distance as well.`,
                `Yes, you can Target Yourself, but it doesn't count as Forced Movement when you do so.`,
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
                ["STR Save", "14 × ESS"],
                ["Knockback", "5 × ESS^(1/3)"],
                ["Damage From Surface", "(2d4 × ESS) Physical"],
            ],
        },
    ],
}