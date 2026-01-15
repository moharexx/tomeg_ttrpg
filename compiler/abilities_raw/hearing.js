module.exports = {
    name: "Hearing",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "Ear or similar",
    ],
    reqs_full: [
        "Ear or similar",
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
                "You can <b>Sense</b> with Hearing within <box>10 × Perception Modifier^(1/3)</box> meters.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Echolocation</b> (10 XP):",
                "You can <b>Pinpoint</b> with Hearing within <box>10 × Perception Modifier^(1/3)</box> meters, and <b>Sense</b> in Double the Range.",
                "Yes, you can map an entire house with a shout (if it's in range).",
            ],
        },
        {
            type: "p",
            content: [
                "These Ranges assume footstep and conversation level noise, or about ~40-60 decibels.",
                "For louder or quieter sounds the Range of hearing may vary, for example ~1/5× for whispers and ~10× for gunshots.",
                "Exact Ruling up to GM.",
            ],
        },
        {
            type: "p",
            content: [
                "Most Entities have this Passive Ability Unlocked (but NOT Echolocation) as a Free Passive Ability.",
                "If an Entity has ears (or similar) but hasn't unlocked this Ability, it hears very muffled noises.",
                `More details at <a href="../main/mechanics.html#senses" target="_blank">Senses.</a>`,
            ],
        },
    ],
}