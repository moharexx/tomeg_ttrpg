module.exports = {
    name: "Slayer Style",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 STR, 20 WILL",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 STR, 20 WILL",
    ],
    tags: [
        "Offense, Style",
        "Melee, Ranged",
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
                `<b>Slayer Style Pros:</b>`,
                `All Weapons you use are considered Finesse, even Ranged and Heavy weapons.`,
                `You can use STR as a Base Stat for Ranged Weapons.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Slayer Style Cons:</b>`,
                `You cannot use Spells, only Innate and Skill Type Abilities can be used.`,
            ],
        },
    ],
}