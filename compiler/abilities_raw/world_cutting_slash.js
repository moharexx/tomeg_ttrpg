module.exports = {
    name: "World Cutting Slash",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 Transmutation | 200 Abjuration | 1000 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 200 WILL | 200 EGO), (50 Transmutation | 200 Abjuration | 1000 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Targeting, Physical Damage",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `<i>"Scale of the Dragon, Recoil, Twin Meteors..."</i>`,
                `<i><b>"World Cutting Slash"</b></i>`,
            ],
        },
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>World Cutting Slash Stance.</b>",
                "The Next Turn you can Trigger the <b>World Cutting Slash.</b>",
                "You Target an Entity which you can Pinpoint and is in Range, and make an Attack against them.",
                "This is not a Projectile or anything blockable in it's path, the Attack just happens at the Target's Position.",
            ],
        },
        {
            type: "dots",
            content: [
                "Each point of Damage going into TEMP-HP or Shielding Abilities counts as 2 points of Damage.",
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
                ["Cast Time", "Main-Action"],
                ["Stance Trigger", "Main-Action at Your Next Turn"],
                ["Range", "5 × CS^(1/3)"],
                ["Damage", "(2d12 × ESS) Physical"],
                ["Armor-Pen", "6 × ESS"],
            ],
        },
    ],
}