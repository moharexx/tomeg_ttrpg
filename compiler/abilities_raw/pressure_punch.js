module.exports = {
    name: "Pressure Punch",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "10 Martial Arts",
        "20 Evocation | 50 Transmutation | 200 Enchantment",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts",
        "<b>Spell:</b> 20 CS, (20 Evocation | 50 Transmutation | 200 Enchantment)",
    ],
    tags: [
        "Offense",
        "Touch, Physical Damage, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, Touch an Entity and Knock it away.`,
                `If the Hit Entity fails a <b>STR Save</b> of <box>14 × ESS</box>, they get Knocked away.`,
                `The Knockback Direction can be anything.`,
                `If the Knockbacked Entity Hits a Solid Surface, it takes Physical Damage.`,
            ],
        },
        {
            type: "dots",
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
                ["Range", "Touch"],
                ["STR Save", "12 × ESS"],
                ["Knockback", "6 × ESS^(1/3)"],
                ["Damage From Surface", "(3d4 × ESS) Physical"],
            ],
        },
    ],
}