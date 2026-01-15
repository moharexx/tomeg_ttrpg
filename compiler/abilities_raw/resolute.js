module.exports = {
    name: "Resolute",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 INT | 5 WILL | 5 EGO",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 INT | 5 WILL | 5 EGO",
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
                "When used, You Reduce a single instance of incoming SP Damage.",
                "This Ability cannot reduce Damage that goes into HP!",
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
                ["Damage Reduction", "10 × ESS"],
            ],
        },
    ],
}