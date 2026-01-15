module.exports = {
    name: "Deathblow",
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
        "Melee, Physical Damage",
        "Bonus-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Deathblow Stance.</b>",
                "When <b>Deathblow</b> is Triggered, you make a Melee Attack.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Movement Impaired:</b>",
                "if the Target's <b>MS</b> is currently being Reduced, Double the Damage.",
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
                "This Ability CANNOT CRIT!",
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
                ["Stance Trigger", "Main-Action at your next Turn."],
                ["Damage", "(10 × ESS) Physical"],
                ["Damage VS Movement Impaired", "2×"],
            ],
        },
    ],
}