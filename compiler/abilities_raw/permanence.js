module.exports = {
    name: "Permanence",
    category: "meta",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Arcana | Anima",
    ],
    reqs_full: [
        "20 Arcana | 20 Anima",
    ],
    tags: [
        "Duration ++",
        "ESS -",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You Increase the Duration of a Spell, but Decrease it's <b>Effective-ESS</b> for each Jump in Duration.",
                "The Ability still takes the same amount of ESS, but it's effects are as if Cast from a lower ESS.",
            ],
        },
        {
            type: "list",
            content: [
                "Duration Table:",
                "1 Round | Next Turn | Next Round",
                "1 Minute (20 Rounds)",
                "1 Hour (1200 Rounds)",
                "1 Day (28800 Rounds)",
                "Permanent (∞ Rounds)",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Permanence Anything</b> (1000 Arcana | 1000 Anima):",
                "The Restriction that only Spells can be Permanence Casted is lifted.",
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
                ["Type", "Spell"],
                ["Effective-ESS Divisor", "(Cast Time Jumps) + 1"],
            ],
        },
    ],
}