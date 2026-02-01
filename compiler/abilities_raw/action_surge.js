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
                `You gain <box>2 × ESS^(1/3)</box> bonus MS till the Start of your Next Turn.`,
                `You can also use the Move-Action once as a Free-Action for the Duration.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you use this Ability you lose 1 Bonus-Action from your Next Turn.`,
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
                ["Duration", "Till the Start of your Next Turn"],
                ["Bonus MS", "2 × ESS^(1/3)"],
            ],
        },
    ],
}