module.exports = {
    name: "Safeguard",
    category: "reactive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Abjuration | 10 Enchantment | 20 Divination)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Abjuration | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Defense",
        "Ranged, Targeting, Negation",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When the Ability is used, the Pinpointed Entity's Saving Throw will have a Bonus.",
                "This Ability can be used after determiming if the Save is a Fail or not.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can add +1 to the Save Bonus.`,
                `For each <box>3 × ESS</box> points of <b>Potency</b> you can Target an additional Entity.`,
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
                ["Save Bonus", "4 × ESS"],
            ],
        },
    ],
}