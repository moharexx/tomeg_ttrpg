module.exports = {
    name: "Roto Sense",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "Perception",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 Perception",
    ],
    tags: [
        "Utility",
        "Sense",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You have a Sense that allows you to Rotoscope everything within <box>(Perception Modifier)^(1/3)</box> meters.",
                "You feel material around you as a kind of fuzzyness.",
                "This means you can <b>Sense</b> everything material around you, including in and over solids.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Roto Pinpoint</b> (20 Perception, 10 XP):",
                "This Ability can <b>Pinpoint</b>, and <b>Sense</b> in Double the Radius.",
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Roto Sense Radius", "(Perception Modifier)^(1/3)"],
            ],
        },
    ],
}