module.exports = {
    name: "Midnight Thunder",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Evocation | Abjuration",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Transmutation | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Demat+Thunder Damage, Flow AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, Shoot out a Beam of Midnight, which explodes into roaring Thunder.",
                "This is a Line Attack, originating from the Caster.",
                "After the Line Attack is out, it remains there till the Start of the Casters Next Turn.",
                "At the Start of the Casters Next Turn, the Beam will Explode into a Cone AOE.",
                "This is another Attack, where the Cone is Oriented in a way where it widens in the same direction the Line was shot.",
                "The Cone's AOE Flows out perpendicular from the Line.",
                "If the Line is stopped early, the Cone Length will match it's Length.",
            ]
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
                ["Line Length", "3 × CS^(1/3)"],
                ["Cone Length", "Line Length"],
                ["Cone Spread", "1 Forward = +1 width (90°)"],
                ["Beam Damage", "(2d6 × ESS) Demat"],
                ["Cone Damage", "(2d6 × ESS) Thunder"],
            ],
        },
    ],
}