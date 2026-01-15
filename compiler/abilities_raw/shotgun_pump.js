module.exports = {
    name: "Shotgun Pump",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Ballistic",
    ],
    reqs_full: [
        "20 Ballistic",
    ],
    tags: [
        "Offense",
        "Variable Damage, AOE, Stack",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Shotgun Pump Stance.",
                "Your Attack's Range increases with your Stacks.",
                "When the Stance is Triggered, you make a modified Ballistic Attack-Action.",
                "MAX Stack: <box>4</box>",
            ],
        },
        {
            type: "dots",
            content: [
                "Ballistic Weapons without Spread Property cannot be used.",
                "Ballistic Weapons with Reload or Slow Reload Property cannot be used.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities | HD Decrease | Taking Damage</box>",
            ],
        },
        {
            type: "p",
            content: [
                `<i>The Green Shotgun</i>`,
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
                ["Stance Trigger", "Bonus-Action at your next Turn."],
                ["Additional Cone Length", "Stacks × ESS^(1/3)"],
                ["Bonus On-Hit Damage", "2 × Stack × ESS"],
            ],
        },
    ],
}