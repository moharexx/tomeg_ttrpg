module.exports = {
    name: "Haymaker",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Weapon Damage, Negation",
        "Main-Action / Trigger",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Haymaker Stance.</b>",
                "While in <b>Haymaker Stance</b>, the next Attack ignores your HD, and Hits you.",
            ],
        },
        {
            type: "dots",
            content: [
                "When Hit, you Reduce the incoming Damage Based on your Haymaker Strength.",
                "If you Reduce an Incoming Attacks Damage to 0, you Fully Negate the Attack.",
                "When you Negate an Attack, you can immediately make a Melee Attack-Action as a Bonus-Action.",
                "This Attack-Action Deals additional Damage equal to: <box>Haymaker Strength</box>",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability can CRIT for 2× Haymaker Strength, throw your d10 pls.",
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
                ["Stance Trigger", "Get Attacked"],
                ["Haymaker Strength", "1d20 × ESS"],
            ],
        },
    ],
}