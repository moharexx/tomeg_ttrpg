module.exports = {
    name: "Active Dodge!",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "50 AGI | 10 Acrobatics",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 AGI | 10 Acrobatics",
    ],
    tags: [
        "Defense",
        "Negation, HD",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Active Dodge! Stance.</b>",
                "While in <b>Active Dodge! Stance</b> you can Spend extra <box>4 × ESS</box> Free HD against Attacks, potentionally making them miss.",
                "You also make <b>AGI Saves</b> with Advantage.",
                "Using this Free HD doesn't Spend from your HD Pool, but still counts as Spending HD for the purposes of Abilities, like Breaking Stances.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, Taking Damage</box>",
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
                ["Free HD per Attack", "4 × ESS"],
            ],
        },
    ],
}