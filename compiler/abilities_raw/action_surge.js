module.exports = {
    name: "Action Surge",
    category: "active",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 INIT",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 INIT",
    ],
    tags: [
        "Utility, Cooldown",
        "Self, Mobility, Action Economy",
        "Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Your horizon expands, everything around you slows.`,
                `Choose an option from the two below, and lose a Bonus-Action from your Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Movement Pool:</b>`,
                `Gain a Pool of movement equal to <box>2 × MS</box>, Double if you're <b>Sprinting</b>.`,
                `Till the End of your Turn you can Spend from this Pool as a <b>Free-Action</b> to move.`,
                `If you use this outside of your Turn (Reaction), then you must Spend all the Pool right away.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Movement Amplification:</b>`,
                `Amplify an Ability which Scales with MS, to treat as if your MS is Doubled.`,
                `You can use this as a Reaction whenever you use an Ability which Scales with MS.`,
                `Action Surge's ESS must be at least equal to the Amplified Ability's.`,
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Short-Rest"],
                ["Range", "Self"],
                ["Movement Pool", "2 × MS"],
            ],
        },
    ],
}