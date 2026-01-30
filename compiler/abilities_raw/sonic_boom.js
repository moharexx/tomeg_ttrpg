module.exports = {
    name: "Sonic Boom",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Evocation | 20 Transmutation | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Evocation | 20 Transmutation | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphear AOE, Thunder Damage",
        "Main-Action + Bonus-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Sonic Boom Stance</b>.`,
                `On Stance Trigger, Enitites take <box>2d10 × ESS</box> Thunder Damage on a Failed VIT Save of <box>12 × ESS</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
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
                ["Stance Trigger", "Main-Action at your next Turn."],
                ["Range", "20 × CS^(1/3)"],
                ["VIT Save", "12 × ESS"],
                ["Blast Radius", "2 × CS^(1/3)"],
                ["Damage", "(2d10 × ESS) Thunder"],
            ],
        },
    ],
}