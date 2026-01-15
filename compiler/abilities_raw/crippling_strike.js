module.exports = {
    name: "Crippling Strike",
    category: "on_attack",
    type: [
        "Skill",
        "(Any)",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts | 50 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts | 50 Ballistic",
    ],
    tags: [
        "Offense",
        "Debuff, Crowd Control",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, the Parent Attack can apply the <a href="../main/mechanics.html#conditions" target="_blank">Rooted Condition.</a>`,
                `If the Attack Deals Damage, the Target must Succeed on a STR Save, or get the <b>Rooted Condition.</b>`,
                `The <b>Rooted Condition</b> lasts until the End of the Target's Next Turn.`,
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
                ["STR Save", "12 × ESS"],
            ],
        },
    ],
}