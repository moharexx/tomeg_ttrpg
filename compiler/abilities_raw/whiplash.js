module.exports = {
    name: "Whiplash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense, Utility",
        "Range, STR Save, Mobility, Crowd Control",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you throw out a rope or just force air to act like it, and pull on a Hit Target.`,
                `Make a <b>Ranged Attack</b>, use any <a href="../main/mechanics.html#martial_masteries">Martial Mastery</a> to determine To-Hit, on a Hit you can Pull yourself towards the Target.`,
                `Alternatively you can try to Pull the Target towards yourself, on a Failed <b>STR Save</b> of <box>8 × ESS</box> the Target is Pulled.`,
                `The Direction of the Pull cannot curve, and must remain straight!`,
                `Additionally, if you Hit a Target, you can choose to not Fall at the End of Your Turn.`,
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
                ["Range", "5 × (STR | AGI)^(1/3)"],
                ["STR Save", "8 × ESS"],
                ["Pull Length", "5 × ESS^(1/3)"],
            ],
        },
    ],
}