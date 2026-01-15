module.exports = {
    name: "Reflex",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "INIT",
    ],
    reqs_full: [
        "20 INIT",
    ],
    tags: [
        "Reaction +",
        "Action Cost +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You can make an Ability into a Reaction, but Action Cost Jumps one tier.",
            ],
        },
        {
            type: "list",
            content: [
                "Action Cost Tiers:",
                "Free-Action",
                "Bonus-Action",
                "Main-Action",
                "Main-Action + Bonus-Action",
                "2 Main-Actions",
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