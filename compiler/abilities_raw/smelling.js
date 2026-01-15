module.exports = {
    name: "Smelling(WIP)",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "Nose or similar",
    ],
    reqs_full: [
        "Nose or similar",
    ],
    tags: [
        "Utility, Unlock",
        "Sense",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You can <b>Sense</b> with Smelling within <box>5 × Perception Modifier^(1/3)</box> meters.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Clear Smelling</b> (10 XP):",
                "You can <b>Pinpoint</b> with Smelling within <box>5 × Perception Modifier^(1/3)</box> meters, and <b>Sense</b> in Double the Range.",
            ],
        },
        {
            type: "p",
            content: [
                "These Ranges assume regular scents. (???, send help)",
                "For more and less potent scents the Range of Smelling may vary.",
                "Exact Ruling up to GM.",
            ],
        },
        {
            type: "p",
            content: [
                "Most Entities don't have this Ability Unlocked, even if they have noses (or similar).",
                "If an Entity has a nose (or similar) but hasn't unlocked this Ability, it smells too broadly to identify any specific source.",
                `More details at <a href="../main/mechanics.html#senses" target="_blank">Senses.</a>`,
            ],
        },
    ],
}