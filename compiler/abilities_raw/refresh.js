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
        "Resource Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You use SP to ignore the Cooldown of an Ability.",
                "When you use Refresh, an already present Cooldown does not update or go away.",
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