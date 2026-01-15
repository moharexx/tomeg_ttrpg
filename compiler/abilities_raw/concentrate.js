module.exports = {
    name: "Concentrate",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "None",
    ],
    reqs_full: [
        "None",
    ],
    tags: [
        "Potency +",
        "Stance",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You can use any Active Ability as a Stance, if it has at least 1 Minute (20 Rounds) Duration.",
                "The Ability's Duration becomes till the Stance Ends, and the Stance counts as Continuous, with no Trigger.",
                "The Ability also gains <box>4 × ESS</box> Potency.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Taking Damage</box>",
            ],
        },
        {
            type: "p",
            content: [
                `If an Entity can Pinpoint you, then they also know what you're Concentrating on.`,
                `With a <a href="../main/mechanics.html#feint" target="_blank">Feint</a> you can hide that you're Concentrating.`,
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
                ["Type", "At least 1 Minute (20 Rounds) Duration"],
                ["Extra Potency", "2 × ESS"],
            ],
        },
    ],
}