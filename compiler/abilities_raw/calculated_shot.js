module.exports = {
    name: "Calculated Shot",
    category: "on_attack",
    type: [
        "Skill",
        "(Ranged)",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense",
        "To-Hit",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Using this Ability, a Ranged Single-Target Attack can try to Hit another Target behind a main one you Missed.`,
                `By default, if a Ranged Single-Target Attack Misses its Target, then its To-Hit is reduced to 0 as it travels further along.`,
                `With this Ability, rather than its To-Hit being reduced to 0, it instead gains <b>Advantage</b>.`,
                `The Attack is forced to go in a straight line after Missing its original Target, no special effect can curve it.`,
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
                ["Requirement", "Ranged Single-Target"],
            ],
        },
    ],
}