module.exports = {
    name: "Hybrid Casting",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 INT, 5 WILL, 5 EGO",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 INT, 5 WILL, 5 EGO",
    ],
    tags: [
        "Utility",
        "Buff, Soul Save",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `Your <b>CS</b> can be <box>INT + WILL + EGO</box>, Capped at <box>Total XP / 10</box>`,
                `Your <b>Soul Save Modifier</b> can be <box>(INT + WILL + EGO) / 2</box>, Capped at <box>Total XP / 20</box>`,
                `When using the Memorization and Wishing feature you must still only use the specified Stat written!`,
            ],
        },
    ],
}