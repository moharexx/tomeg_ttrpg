module.exports = {
    name: "Tenacity",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Athletics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics",
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
                `You can Spend GRIT to Reduce Slowness Effects from yourself.`,
                `The GRIT needed is dependent on how much you want to Reduce the Slow's Strength.`,
                `While the Ability is Active, all Slows, including ones you get while it's still Active, will have their Strength Reduced.`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["GRIT Cost", "(Slow Reduction)^3"],
            ],
        },
    ],
}