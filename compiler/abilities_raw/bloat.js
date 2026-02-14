module.exports = {
    name: "Bloat",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "500 Total XP",
    ],
    reqs_full: [
        "500 Total XP",
    ],
    tags: [
        "AOE +",
        "ESS -, CS -",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `You Increase the AOE Size of a Parent Ability, but Decrease its Effective ESS, and CS.`,
                `For the Purpose of Calculating the Size of the Ability use the ESS and CS values before applying this Meta-Ability.`,
            ],
        },
        {
            type: "table",
            full_width: "40%",
            width: ["40%", "60%"],
            content: [
                ["Size Multiplier", "ESS and CS Divisor"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
            ],
        },
        {
            type: "p",
            content: [
                `Any type of Sense inhibiting Ability becomes the <a href="../main/mechanics.html#lighting" target="_blank">Low-Light</a> equivalent for that Sense.`,
                `Abilities which would provide "Bright-Light" now only provide the Low-Light equivalent.`,
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