module.exports = {
    name: "Refresh",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "WILL",
    ],
    reqs_full: [
        "20 WILL",
    ],
    tags: [
        "Cooldown -",
        "SP -",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You use SP to ignore the Cooldown of an Ability.`,
                `You can use Refresh in 2 different ways; Ignore an already present Cooldown, or use the Ability without putting it on Cooldown.`,
                `When you choose to ignore a Cooldown, the Cooldown doesn't actually go away!`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Refresh SP Cost:</b>",
                "1 Minute (20 Rounds) Cooldown: <box>4 SP × ESS</box>",
                "1 Hour (1200 Rounds) | Short-Rest Cooldown: <box>8 SP × ESS</box>",
                "1 Day (28800 Rounds) | Long-Rest Cooldown: <box>12 SP × ESS</box>",
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