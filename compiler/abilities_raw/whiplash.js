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
                `When you use this Ability, you throw a Whiplash, and pull on a Hit Target.`,
                `Make a <b>Ranged Attack</b>, use any <a target="_blank" href="../main/mechanics.html#martial_masteries">Martial Mastery</a>, on a Hit you can Pull yourself towards the Target.`,
                `What the Whiplash actually is, is up to the Caster and it's only flavor, it can be a rope, "solidified" air, literal force, ect...`,
            ],
        },
        {
            type: "p",
            content: [
                `Alternatively you can try to Pull the Target towards a Point within <box>ESS^(1/3)</box> meters from yourself.`,
                `On a Failed <b>STR Save</b> of <box>12 × ESS</box> the Target is Pulled`,
            ],
        },
        {
            type: "p",
            content: [
                `The Direction of the Pull cannot curve, and must remain straight!`,
                `Additionally, if you Hit a Target, you can choose to not Fall at the End of your Turn.`,
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
                ["STR Save", "12 × ESS"],
                ["Pull Length", "5 × ESS^(1/3)"],
            ],
        },
    ],
}