module.exports = {
    name: "Slayer Style",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "STR, WILL",
    ],
    reqs_full: [
        "20 STR, 20 WILL",
    ],
    tags: [
        "Offense, Style",
        "Variable Damage",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "list",
            content: [
                "<b>Entering And Leaving the Fighting Style:</b>",
                "As a Free-Action, you can commit to Entering the Fighting Style.",
                "This means at the Start of Your Next Turn you will Enter the Fighting Style.",
                "As a Free-Action, you can commit to Leaving the Fighting Style.",
                "This means at the Start of Your Next Turn you will Leave the Fighting Style.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Slayer Style Pros:</b>",
                "You deal additional <box>2 × ESS<box> On-Attack Damage of the same Type",
                "All Weapons you use are considered Finesse, even Ranged and Heavy weapons.",
                "You can use STR as a Base Stat for Ranged Weapons.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Slayer Style Cons:</b>",
                "You cannot use Spells, only Innate and Skill Type Abilities can be used.",
                "You Attack with Disadvantage when using a Light Weapon.",
            ],
        },
    ],
}