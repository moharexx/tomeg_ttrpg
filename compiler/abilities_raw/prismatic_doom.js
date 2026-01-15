module.exports = {
    name: "Prismatic Doom",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Enchantment",
    ],
    reqs_full: [
        "(100 INT | 50 WILL | 50 EGO), (50 Evocation | 100 Enchantment | 200 Transmutation)",
    ],
    tags: [
        "Offense",
        "Variable Damage, Flow AOE, Debuff",
        "Main-Action + Bonus-Action / Continuous (1 Minute)",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Prismatic Doom Stance.",
                "When entering this Stance you can choose the Prismatic Doom Type.",
                "When using this Ability, and on subsequent Starts of Caster Turns, Roll a d8 to determine effects.",
                "In what Direction is the AOE being shot out can be changed before Rolling a d8 to determine effects.",
                "Entities within the AOE are Targeted, and must make a Save or be Hit.",
                "This AOE is Continous, and is still there even when it's not the Caster's Turn, if any Entity Touches the AOE it will be Targeted as well.",
                "Any Condition applied by this ability lasts until End of Caster's Next turn.",
            ]
        },
        {
            type: "p",
            content: [
                "<b>Prismatic Doom Types:</b>",
            ]
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Flow Line AOE", "Stat Values"],
                ["Line Length", "5 × CS^(1/3)"],
                ["Line Width", "CS^(1/3) / 2"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Flow Cone AOE", "Stat Values"],
                ["Cone Length", "CS^(1/3)"],
                ["Cone Spread", "90° (1 Forward = +2 Width)"],
            ],
        },
        {
            type: "p",
            content: [
                "<b>d8 Random Effects:</b>",
            ]
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["d8 Rolled", "d8 Effect"],
                ["1", "Disables all the Senses of the Target Entity"],
                ["2", "(6 × ESS) Bludgeoning + Slashing + Piercing Damage"],
                ["3", "(1d8 × ESS) Heat + Cold Damage"],
                ["4", "(1d4 × ESS) Bio Damage + Rooted Condition"],
                ["5", "Dazed Condition"],
                ["6", "(1d10 × ESS) Executing Demat Damage"],
                ["7", "(10 × ESS) Psychic Damage"],
                ["8", "(1d4 × ESS) Radiant + Necrotic Damage"],
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
                ["Stance Trigger", "None"],
                ["Duration", "1 Minute (20 Round)"],
                ["VIT Save", "10 × ESS"]
            ],
        },
    ],
}