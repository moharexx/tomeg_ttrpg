module.exports = {
    name: "Permanence",
    category: "meta",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 Arcana | 20 Anima",
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
                `Increase the Duration of a Spell, but Divide its <b>Effective ESS</b> based on the amount of Jumps in the Duration Table.`,
                `This Effective ESS Division has NO effect on Range and Size Scalings.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Duration Table:</b>`,
                `1 Round | Next Turn | Next Round`,
                `1 Minute (20 Rounds)`,
                `1 Hour (1200 Rounds)`,
                `1 Day (28800 Rounds)`,
                `Permanent (∞ Rounds)`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Synergy:</b>`,
                `If there is a Stance which uses some kind of Continuous AOE or similar, you can Permanence it.`,
                `Treat it as if its Base Duration was 1 Minute, and you must at least jump 1 in the Duration Table.`,
                `You place the Stance down at a Pinpointed Position in Range.`,
                `If the Stance would be an Aura around you, or doesn't have a Range, then its Range is Touch.`,
                `It doesn't count as a Stance; doesn't take away your Stance Slot, and can't Break.`,
                `When you use this, the restriction that Stances cannot use the Ritual Meta-Ability is lifted.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Permanence Anything</b> (1000 Arcana | 1000 Anima):`,
                `The Restriction that only Spells can be Permanence Casted is lifted.`,
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
                ["Effective ESS Divisor", "(Jumps in Duration) + 1"],
            ],
        },
    ],
}