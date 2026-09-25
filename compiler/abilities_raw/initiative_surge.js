module.exports = {
    name: "Initiative Surge",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Acrobatics | 20 INIT",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Acrobatics | 20 INIT",
    ],
    tags: [
        "Utility, Cooldown",
        "Buff, Action Economy",
        "Free-Action, HD",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You lock in, Spending up to <box>(10 × ESS) HD</box> to increase your INIT for that Round.`,
                `The amount of INIT (and Rolled Initiative) you gain for that Round is equal to the HD Spent.`,
                `<b>Note:</b> Some features can lock your Rolled Initiative to 0, this does <b>NOT</b> bypass that.`,
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
                ["Cast Time", "Free-Action"],
                ["Trigger", "New Round Begins"],
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Max HD Spent", "10 × ESS"],
                ["INIT Bonus", "1 to 1"],
            ],
        },
    ],
}