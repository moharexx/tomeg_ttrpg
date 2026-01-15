module.exports = {
    name: "Hollow Purple",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 Abjuration | 200 Evocation | 1000 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 200 WILL | 200 EGO), (50 Abjuration | 200 Evocation | 1000 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Line AOE, Demat Damage",
        "Main-Action + Bonus-Action / Main-Action",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `<i>"Nine Ropes, Polarized Light, Crow and Declaration, The gap within and without..."</i>`,
                `<i><b>"Hollow Purple"</b></i>`,
            ],
        },
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Hollow Purple Stance.</b>",
                "The Next Turn you can Trigger the <b>Hollow Purple Slash.</b>",
                "You shoot out a large sphere of exotic matter, dematerializing everything in it's path.",
                "This is a Projectile, Targeting everything in it's path, acting like a Flow Line AOE Attack with a Width.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "Main-Action at Your Next Turn"],
                ["Range", "20 × CS^(1/3)"],
                ["Width", "CS^(1/3)"],
                ["Damage", "(2d8 × ESS) Demat"],
                ["Demat-Pen", "6 × ESS"],
            ],
        },
    ],
}