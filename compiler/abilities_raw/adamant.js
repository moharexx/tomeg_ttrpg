module.exports = {
    name: "Adamant",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 VIT, (10 INT | 10 WILL | 10 EGO)",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 VIT, (10 INT | 10 WILL | 10 EGO)",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, You Reduce a single instance of incoming Damage.",
                "This Ability reduces both HP and SP Damage.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability can CRIT for 2× Damage Reduction, throw your d10 pls.",
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
                ["Cast Time", "Bonus-Action"],
                ["Trigger", "Take Damage"],
                ["Damage Reduction", "6 × ESS"],
            ],
        },
    ],
}