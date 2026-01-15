module.exports = {
    name: "Hyper Beam",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Abjuration | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 50 EGO), (10 Evocation | 20 Abjuration | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Demat Damage, Flow Line AOE",
        "Main-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You Charge up tremenous energy, which you can release in a later Turn.",
                "When using this Ability, you are put in <b>Hyper Beam Stance.</b>",
                "On Stance Trigger, Make a Flow Line AOE Ranged Attack, flowing out from infront of you.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"All charged up! This'll be good!"</i>`,
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
                ["Cast Time", "Main-Action"],
                ["Stance Trigger", "Main-Action + Bonus-Action at Your Next Turn."],
                ["Line Length", "10 × CS^(1/3)"],
                ["Line Width", "2 × CS^(1/3)"],
                ["Damage", "(2d12 × ESS) Demat"],
            ],
        },
    ],
}