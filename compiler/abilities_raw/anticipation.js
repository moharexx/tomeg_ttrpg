module.exports = {
    name: "Anticipation",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "10 INIT",
    ],
    reqs_full: [
        "10 INIT",
    ],
    tags: [
        "Action Cost -",
        "Action Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You Spend the Action Cost of the Parent Ability, and can use it once as Free-Action in Your Next Turn.",
                "You can only have 1 Ability Anticipated at a time, and cannot Re-Anticipate an already Anticipated Ability.",
                "When it comes to Stances, you can Anticipate the Start, or even the Trigger, only if the Trigger costs Actions.",
            ],
        },
        {
            type: "p",
            content: [
                `If an Entity can Pinpoint you, then they also know what you're Anticipating.`,
                `With a <a href="../main/mechanics.html#feint" target="_blank">Feint</a> you can hide that you're Anticipating.`,
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
            ],
        },
    ],
}