module.exports = {
    name: "Spinning Style",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "(10 Melee Weapon | 10 Martial Arts), 10 Acrobatics",
    ],
    reqs_full: [
        "<b>Skill:</b> (10 Melee Weapon | 10 Martial Arts), 10 Acrobatics",
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
                `<b>Entering And Leaving the Fighting Style:</b>`,
                `Once per Turn, as a Free-Action, you can commit to <box>Entering | Leaving</box> this Fighting Style.`,
                `This means you <box>Enter | Leave</box> the Fighting Style at the Start of Your Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Spinning Style:</b>`,
                `Rather than having a Main-Action and Bonus-Action, you have 3 Bonus-Actions.`,
                `If something would make you lose a Main-Action, you lose a Bonus-Action instead.`,
            ],
        },
    ],
}