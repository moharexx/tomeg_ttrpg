module.exports = {
    name: "Collateral",
    category: "meta",
    type: [
        "Single Target",
    ],
    reqs_short: [
        "200 Total XP",
    ],
    reqs_full: [
        "200 Total XP",
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
                "You use a Bonus-Action to make a Single Target Ability have a small Radius.",
                "When you use this with any kind of Melee Attack you can choose Yourself to be Excluded from the AOE.",
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
                ["Type", "Single Target"],
                ["Action Cost", "Bonus-Action"],
                ["Radius", "ESS^(1/3)"],
            ],
        },
    ],
}