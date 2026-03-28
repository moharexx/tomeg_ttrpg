module.exports = {
    name: "Multi-Wielding Style",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Ballistic | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Ballistic | 20 Martial Arts",
    ],
    tags: [
        "Offense, Defense, Style",
        "Action Economy, Wielding",
    ],
    unlock_cost: 20,
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
                `<b>Multi-Wielding Style:</b>`,
                `Rather than having 2 Wielding Slots, you have 3 Wielding Slots.`,
                `But you lose a Bonus-Action or a Main-Action if you don't have a Bonus-Action, at the Start of Your Turns.`,
            ],
        },
    ],
}