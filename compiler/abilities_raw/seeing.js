module.exports = {
    name: "Seeing",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "Eye or similar",
    ],
    reqs_full: [
        "Eye or similar",
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
                "You can <b>Sense</b> with Sight within <box>100 × (Perception Modifier)^(1/3)</box> meters.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Clear Sight</b> (10 XP):",
                "You can <b>Pinpoint</b> with Sight within <box>100 × (Perception Modifier)^(1/3)</box> meters, and <b>Sense</b> in Double the Range.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Low-Light Vision</b> (5 XP):",
                "You Treat Low-Light as if it were Bright Light, and Darkness as if it were Low-Light.",
                "This doesn't work on magical Low-Light and Darkness with higher <b>ESS</b> than <box>Perception Modifier / 10</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Dark Vision</b> (Low-Light Vision, 10 XP):",
                "You Treat Darkness as if it were Bright Light.",
                "This doesn't work on magical Darkness with higher <b>ESS</b> than <box>Perception Modifier / 10</box>",
            ],
        },
        {
            type: "p",
            content: [
                "These Ranges assumes human sized targets, or about 1 m<sup>2</sup> area.",
                "For larger or smaller targets the Range of sight may vary, for example ~1/20× for bugs and ~2500× for mountains.",
                "Exact Ruling up to GM.",
            ],
        },
        {
            type: "p",
            content: [
                "Most Entities have this Passive Ability Unlocked (including Clear Sight) as a Free Passive Ability.",
                "If an Entity has eyes (or similar) but hasn't unlocked this Ability, it sees low quality blur.",
                `More details at <a href="../main/mechanics.html#senses" target="_blank">Senses</a> and <a href="../main/mechanics.html#lighting" target="_blank">Lighting.</a>`,
            ],
        },
    ],
}