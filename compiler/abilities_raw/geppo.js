module.exports = {
    name: "Geppo",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Athletics | 20 Acrobatics | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Athletics | 20 Acrobatics | 20 Martial Arts",
    ],
    tags: [
        "Utility",
        "Mobility",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You can pseudo Fly by jumping midair.`,
                `You can do all movement things while not on the ground, and do the Move-Action and every other Movement in any direction, ignoring gravity.`,
                `You can choose to not Fall, remaining in the air.`,
            ],
        },
        {
            type: "p",
            content: [
                `This Ability has Stocks, which you must use to Activate it.`,
                `This is a Free-Action on your Turn, Spending 1 Stack to Activate till Start of Your Next Turn.`,
                `Stocks refreshes back to Max once the <b>Airborne Condition</b> ends on you.`,
                `<b>Max Stocks:</b> <box>(Athletics | Acrobatics | Martial Arts) / 10</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `You have the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition</a> when Flying with this Ability.`,
                `You can still get the <b>Prone Condition</b>, imagined as a loss of balance.`,
                `If you have a Movement Impairing Condition you cannot use this Ability.`,
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
                ["Fly Duration", "Till Start of Your Next Turn."],
                ["Max Stocks", "(Athletics | Acrobatics | Martial Arts) / 10"],
            ],
        },
    ],
}