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
                `When using the Memorization, Flow, and Wishing features you must still only use the specified Stat written!`,
            ],
        },
        {
            type: "p",
            content: [
                `You can choose 1 feature that you already have Unlocked; <box>Memorization | Flow | Wishing</box>`,
                `The chosen feature's specified Stat can be replaced by your regular <b>CS</b>, but the other features are disabled.`,
                `You can swap, or un-choose the specific feature when you take a <b>Long-Rest</b>.`,
            ],
        },
    ],
}