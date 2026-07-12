module.exports = {
    name: "Hybrid Fighting",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 STR, 5 AGI",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 STR, 5 AGI",
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
                `Melee Weapon and Martial Arts Modifiers can be <box>(Melee Weapon + Matrial Arts) / 2</box>, Capped at <box>Total XP / 20</box>`,
                `For Attacks and Abilities with <b>Finesse</b> Weapons, their Main Stat can be </box>STR + AGI</box>, Capped at <box>Total XP / 10</box>`,
            ],
        },
    ],
}