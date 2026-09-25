module.exports = {
    name: "Hollow Purple",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 Abjuration | 200 Transmutation | 1000 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (50 Abjuration | 200 Transmutation | 1000 Evocation)",
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
                `<i>"Phase; Twilight; Eyes Of Wisdom; Nine Ropes; Polarized Light; Crow And Declaration; Between Front And Back..."</i>`,
                `<i><b>"Hollow Purple"</b></i>`,
            ],
        },
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Hollow Purple Stance</b>.`,
                `Next Turn you can Trigger <b>Hollow Purple</b>, shooting out a large orb, dematerializing everything in its path.`,
                `This is a Projectile, Targeting everything in its path, making it a Flow Line AOE Attack with a Width.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
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
                ["Demat Damage", "10 × ESS"],
                ["Demat-Pen", "10 × ESS"],
            ],
        },
    ],
}