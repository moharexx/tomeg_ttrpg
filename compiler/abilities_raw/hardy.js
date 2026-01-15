module.exports = {
    name: "Hardy",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 VIT | 10 WILL",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 VIT | 10 WILL",
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
                "When used, You Reduce a single instance of incoming HP Damage.",
                "This Ability cannot reduce Damage that goes into SP!",
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