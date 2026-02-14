module.exports = {
    name: "Garen Spin",
    category: "stance",
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
        "Melee, Flow Sphere AOE, Weapon Damage",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Garen Spin Stance</b>.`,
                `While in <b>Garen Spin Stance</b>, once on your turns you can make a Melee Weapon Attack, against Entities inside your Reach.`,
                `The Casters <b>MS</b> is also halved while in this Stance.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Ability Flows out from the Caster.`,
                `This Ability has the same <b>Armor-Pen</b> as the Wielded Weapon it is used with.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when a Movement Impairing Condition is gained.`,
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
                ["Stance Trigger", "None"],
                ["MS Divisor", "2"],
                ["Light Weapon Damage", "(1d6 × ESS) Weapon Damage Type"],
                ["Medium Weapon Damage", "(1d8 × ESS) Weapon Damage Type"],
                ["heavy Weapon Damage", "(1d10 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}