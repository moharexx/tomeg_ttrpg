module.exports = {
    name: "Spinning Style",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "(Melee Weapon | Martial Arts), Acrobatics",
    ],
    reqs_full: [
        "(10 Melee Weapon | 10 Martial Arts), 10 Acrobatics",
    ],
    tags: [
        "Offense, Defense, Utility, Style",
        "Action Economy",
    ],
    unlock_cost: 10,
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
                "<b>Spinning Style Pros:</b>",
                "You gain +1 Bonus-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Spinning Style Cons:</b>",
                "All Main-Actions are Converted to Bonus-Actions.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Breaking Spinning Style:</b>",
                "Each Round you must use an Action which you have used in the Round Before. (Movement-Action, Attack-Action, Specific Ability, ect...)",
                "If the Round Ends and you have not used an Action which you have in the Round Before, the Fightning Style Breaks.",
                `This means you Leave Spinning Style, and gain the <a href="../main/mechanics.html#conditions">Staggered Condition</a> till the End of Your Next Turn.`,
            ],
        },
    ],
}