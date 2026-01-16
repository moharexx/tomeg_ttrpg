module.exports = {
    name: "Parry",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "0 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Defense",
        "Negation, Debuff",
        "Bonus-Action / Trigger",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Parry Stance.</b>",
                "While in <b>Parry Stance</b>, the next Attack Ignores your HD, and Hits you.",
            ],
        },
        {
            type: "dots",
            content: [
                "When Hit, if <box>Parry-Strength</box> is Equal or Greater than <b>Incoming Pre-Mitigation Damage</b>, you Parry the Attack.",
                "When Parrying an Attack, you Negate the full Attack, meaning Effects, ect...",
                `When Parrying a Melee Attack, the Target gets the <a href="../main/mechanics.html#conditions">Staggered Condition</a> till End of it's Next Turn.`,
                "When Parrying a Dash Type Attack, you stop the Dash.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Parry Master</b> (20 XP):",
                "Parry does not count as a Stance, meaning you can have another Stance Active, and still use Parry.",
                "It still counts as an Ability for Breaking Stances.",
                "Parry still Breaks normally from all conditions below.",
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
            content: [
                "<b>Note:</b> This Ability can CRIT for 2× Parry Strength, throw your d10 pls",
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
                ["Stance Trigger", "Get Attacked"],
                ["Parry Strength", "2d10 × ESS"],
            ],
        },
    ],
}