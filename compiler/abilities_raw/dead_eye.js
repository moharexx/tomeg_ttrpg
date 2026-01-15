module.exports = {
    name: "Dead Eye",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense",
        "Variable Damage, Projectile, Stack",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Dead Eye Stance</b>, and Half your MS.",
                "<b>CRIT Range</b> of the Ability increases by your Stacks.",
                "When the Stance is Triggered, you make Ranged Attack-Actions, against a number of different Targets equal to your Stacks.",
                "<b>Max Stack:</b> <box>6</box>",
            ],
        },
        {
            type: "dots",
            content: [
                "Ballistic Weapons with Reload or Slow-Reload Property cannot be used.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, HD Decrease, Taking Damage</box>",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"It's high noon."</i>`,
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
                ["Stance Trigger", "Bonus-Action at your Next Turn."],
                ["Bonus On-Hit Damage", "4 × ESS"],
                ["CRIT Range Improvement", "Stacks"],
            ],
        },
    ],
}