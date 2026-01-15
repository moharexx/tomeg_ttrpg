module.exports = {
    name: "Ultimate",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "Total XP",
    ],
    reqs_full: [
        "200 Total XP",
    ],
    tags: [
        "Potency +",
        "Cooldown +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You Increase the Potency of a Parent Ability.",
                "When using this, you cannot use it again until you Short-Rest.",
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
                ["Bonus Potency", "6 × Parent ESS"],
                ["Cooldown", "Short-Rest"],
            ],
        },
    ],
}