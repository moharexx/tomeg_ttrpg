module.exports = {
    name: "Quick Recovery",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 VIT, 10 WILL",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 VIT, 10 WILL",
    ],
    tags: [
        "Utility",
        "Buff",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You recover your Resources quickly.`,
                `You can take the <b>Short-Rest</b> in 1 Minute (20 Rounds), and the <b>Long-Rest</b> in 1 Hour (1200 Rounds).`,
                `Using Quick Recovery only effects your Resources, and cannot refresh your Cooldowns!`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Super Recovery</b> (20 XP):`,
                `You can take the <b>Long-Rest</b> in 1 Minute (20 Rounds).`,
                `Quick Recovery still cannot refresh your Cooldowns!`,
            ],
        },
    ],
}