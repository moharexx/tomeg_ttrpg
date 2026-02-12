module.exports = {
    name: "Linger",
    category: "meta",
    type: [
        "AOE",
    ],
    reqs_short: [
        "500 Total XP",
    ],
    reqs_full: [
        "500 Total XP",
    ],
    tags: [
        "AOE +",
        "Action Cost +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You use a <b>Bonus-Action</b> to make an AOE Ability repeat it self at the Start of Your Next Turn.`,
                `The Ability will make the same Attack or Save with the Same effects as the Parent Ability.`,
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
                ["Type", "Any"],
                ["Action Cost", "Bonus-Action"],
            ],
        },
    ],
}