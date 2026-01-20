module.exports = {
    name: "Singularity",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "Total XP",
    ],
    reqs_full: [
        "500 Total XP",
    ],
    tags: [
        "Potency +",
        "AOE -",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `You Increase the Potency of a Parent Ability, but Decrease it's AOE Size.`,
                `To put this on an Ability, the Ability must have an AOE.`,
                `AOE Types: Line, Cone, Spehere, Cylinder, Circle, etc...`,
            ],
        },
        {
            type: "table",
            full_width: "40%",
            width: ["40%", "60%"],
            content: [
                ["AOE Divisor", "Potency Bonus"],
                ["2", "2 × ESS"],
                ["4", "4 × ESS"],
                ["8", "6 × ESS"],
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