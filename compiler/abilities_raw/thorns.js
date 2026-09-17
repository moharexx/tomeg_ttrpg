module.exports = {
    name: "Thorns",
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
        "Offense, Defense",
        "Melee, Weapon Damage | Physical",
        "Main-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Thorns Stance</b>.`,
                `While in <b>Thorns Stance</b>; every time you're Hit by a <b>Melee Attack</b> you can Attack back as a <b>Free-Action Reaction</b>, regardless of Reach.`,
                `This is a Melee Attack with <box>5 × ESS</box> Static To-Hit, <box>5 × ESS</box> Penetration, and <box>5 × ESS</box> Physical Damage, but can use the Damage Type of any Wielded Melee Weapon.`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> On-Attack Abilities can be use as Reactions.",
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
                ["Stance Trigger", "None"],
                ["Range", "Self"],
                ["Overridden Finalized To-Hit", "5 × ESS"],
                ["Damage Of Weapon's Type | Physical", "2 × ESS"],
                ["Penetration", "5 × ESS"],
            ],
        },
    ],
}