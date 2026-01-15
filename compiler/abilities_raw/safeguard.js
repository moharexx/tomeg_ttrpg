module.exports = {
    name: "Safeguard",
    category: "reactive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Enchantment | Abjuration",
    ],
    reqs_full: [
        "(10 INT | 20 WILL | 50 EGO), (10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When the Ability is used, the Targeted Entity's Saving Throw will have a Finalized Bonus.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot CRIT.",
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
                ["Activation Requirement", "Sense a Target Making a Save"],
                ["Range", "10 × CS^(1/3)"],
                ["Save Finalized Bonus", "4 × ESS"],
            ],
        },
    ],
}