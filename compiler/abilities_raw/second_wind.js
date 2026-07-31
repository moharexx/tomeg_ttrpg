module.exports = {
    name: "Second Wind",
    category: "active",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 WILL | 50 VIT",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 WILL | 50 VIT",
    ],
    tags: [
        "Defense, Cooldown",
        "TEMP-HP",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You steel your will, and stand up.`,
                `You gain a BUFFER, and Remove the <a href="../main/mechanics.html#conditions">Prone Condition</a> from yourself.`,
                `This Ability can CRIT for 2× BUFFER`,
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
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["BUFFER", "2d8 × ESS"],
            ],
        },
    ],
}