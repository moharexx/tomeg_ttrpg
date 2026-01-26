module.exports = {
    name: "Bakuretsu!",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Evocation | 50 Conjuration | 200 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 50 CS, (20 Evocation | 50 Conjuration | 200 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphear AOE, Heat, Thunder Damage",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Bakuretsu!</b>.`,
                `The Point of the Explosion is visible and obvious to anyone nearby.`,
                `While in this Stance, your Rolled INIT for the purpose of Turn Order is 0.`,
                `MAX Stack: <box>4</box>`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
            ],
        },
        {
            type: "p",
            content: "Damage per Stacks:",
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Explosion", "Value"],
                ["Stacks 1 Damage", "(2d10 × ESS) Heat"],
                ["Stacks 2 Damage", "(3d10 × ESS) Heat"],
                ["Stacks 3 Damage", "(4d10 × ESS) Heat"],
                ["Stacks 4 Damage", "(5d10 × ESS) Heat"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Shockwave", "Value"],
                ["Stacks 1 Damage", "(1 × ESS) Thunder"],
                ["Stacks 1 Damage", "(2 × ESS) Thunder"],
                ["Stacks 1 Damage", "(3 × ESS) Thunder"],
                ["Stacks 1 Damage", "(4 × ESS) Thunder"],
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "Main-Action + Bonus-Action at your next Turn."],
                ["Range", "50 × CS^(1/3)"],
                ["VIT Save", "14 × ESS"],
                ["Blast Radius", "(Stack + 2) × ESS^(1/3)"],
                ["Shockwave Radius", "3 × Blast Radius"],
            ],
        },
    ],
}