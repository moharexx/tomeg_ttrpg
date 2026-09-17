module.exports = {
    name: "Absorb Element",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Transmutation | 10 Evocation | 20 Anima",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 CS, (5 Transmutation | 10 Evocation | 20 Anima)",
    ],
    tags: [
        "Defense",
        "Negation, Healing",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You ready yourself to Absorb a single incoming Attack.`,
                `Until the End of your Next Turn, you can <a href="../main/mechanics.html#resistances" target="_blank">Absorb</a> <box>4 × ESS</box> HP Damage from a single Damage instance.`,
                `You can use This Ability multiple times, when you do so you can Absorb that amount of different Attacks.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can Increase the Absorbtion Amount by +1 Effect.`,
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
                ["Duration", "Until the End of your Next Turn."],
                ["Absorbtion Amount", "4 × ESS"],
            ],
        },
    ],
}