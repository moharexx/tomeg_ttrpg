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
                "You Increase the AOE Size of a Parent Ability, but Decrease it's Effective ESS, and CS.",
                "This is a Size Increase in all dimensions, so 2× Size is 8× Volume in 3 dimensions.",
                "For the Purpose of Calculating the Size of the Ability use the ESS and CS values before applying this Meta-Ability.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>AOE Size Multiplier to ESS and CS Division Table:</b>",
                "×2 Size -> /2 ESS and CS",
                "×3 Size -> /5 ESS and CS",
                "×4 Size -> /10 ESS and CS",
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