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
        "Spellcasting, Soul Save",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When Casting Spell Type Abilities, you can treat your CS to be <box>(INT + WILL + EGO) up to a Maximum of (Total XP / 10)</box>",
                "When using the Memorization and wishing feature you still must use only the specified Stat written.",
            ],
        },
        {
            type: "p",
            content: [
                "When making a <b>Soul Save</b>, you can treat the Modifier to be <box>((INT + WILL + EGO) / 2) up to a Maximum of (Total XP / 20)</box>"
            ],
        },
    ],
}