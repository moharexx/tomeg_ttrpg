module.exports = {
    name: "Sharpshooter",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 AGI, 5 CS",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 AGI, 5 CS",
    ],
    tags: [
        "Utility",
        "Buff, Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You can ignore Ballistic Mastery's AGI requirement, and can put it up to <box>Total XP / 10</box>`,
                `Ballistic Mastery's Modifier can be <box>Ballistic Mastery</box>, Capped at <box>Total XP / 20</box>`,
                `For Ranged Abilities (Including Attack-Actions), you can replace AGI Scalings with <box>AGI + CS</box>, Capped at <box>Total XP / 10</box>`,
            ],
        },
    ],
}