module.exports = {
    name: "Knuckleblaster",
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
        "Melee, Weapon Damage, STR Save, Flow Sphere AOE, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you make a <b>Melee Attack</b>, on Hit deal Damage.",
                "On your Next Turn you can <b>Recast</b> as a <b>Bonus-Action</b>.",
                "You can only Recast Next Turn, if you don't, it's wasted.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Recast</b> (Bonus-Action):",
                "A Shockwave is emitted from the Caster.",
                "This is a <b>Melee Flow AOE STR Save</b> of <box>8 × ESS</box>",
                "Targets which Fail the Save take the Shockwave Damage, and are Knockbacked.",
                "The Direction of the Knockback is away from the Caster.",
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
                ["Damage", "(1d12 × ESS) Weapon Damage Type"],
                ["Shockwave Radius", "2 × ESS^(1/3)"],
                ["Shockwave STR Save", "8 × ESS"],
                ["Shockwave Damage", "(5 × ESS) Weapon Damage Type"],
                ["Shockwave Knockback", "2 × ESS^(1/3)"],
            ],
        },
    ],
}