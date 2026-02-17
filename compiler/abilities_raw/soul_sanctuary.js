module.exports = {
    name: "Soul Sanctuary",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "50 SP",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 SP",
    ],
    tags: [
        "Defense",
        "Negation",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When your SP gets below <box>- Max SP</box>, rather than your Soul instantly shattering, it goes into a safe state.`,
                `While in this state you are <b>Unconscious</b>, and taking a <b>Long-Rest</b>.`,
                `If you gain back enough SP to be at least at <box>- Max SP</box>, this state Ends, and you gain back consciousness.`,
            ],
        },
        {
            type: "p",
            content: [
                `Your Soul can still shatter, but only if your SP goes below <box>Total XP / 2</box>`,
            ],
        },
    ],
}