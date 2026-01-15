module.exports = {
    name: "Elementalism",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 5 Transmutation | 5 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Evocation | 5 Transmutation | 5 Conjuration)",
    ],
    tags: [
        "Offense, Utility, Unlock",
        "Variable Damage, Effect",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You choose a Target within Range, and apply or remove some Elemental Effect on a Failed Save.",
                "When you unlock this Ability you can Unlock 2 of the 5 XP Effect Types for 0 XP.",
                "Targets not wanting to be effected are eligable to an AGI Save.",
                "When you Target an Object held or worn by an Entity, the Entity can make the Save inplace of the Object.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Heat Effect</b> (5 Evocation, 5 XP):",
                "You can Ignite burnable Objects, like paper, candles, torches, ect...",
                "You can shape, animate, and put out smaller fires.",
                "You can dry out Soaked things.",
                "You can deal <box>(1d4 × ESS) Heat Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect</b> (5 Abjuration, 5 XP):",
                "You can Cool and Freeze smaller things, like freeze a small amount of water, cool a drink, ect...",
                "You can put out smaller fires.",
                "You can deal <box>(1d4 × ESS) Cold Damage</box>, Maximalized against Soaked Targets.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Water Effect</b> (5 Conjuration, 5 XP):",
                "You conjure up to <box>(Liter × ESS) water</box>, which can Soak the Target, and potentionally more.",
                "You can also move the same amount of water, for up to <box>CS^(1/3) meters</box>",
                "Water can put out smaller fires. Duh!?",
                "You can deal <box>(1d4 × ESS) Physical Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Air Effect</b> (5 Transmutation, 5 XP):",
                "You can move up to <box>ESS × m<sup>3</sup></box> Air or other gases, for up to <box>CS^(1/3) meters</box>",
                "This can push smaller things around, and put out smaller fires. Duh!?",
                "You can deal <box>(1d4 × ESS) Physical Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Electric Effect</b> (5 Evocation, 5 XP):",
                "You can generate small amounts of electricity, powering or frying electrical circuits.",
                "You can deal <box>(1d4 × ESS) Electric Damage</box>, Maximalized against Soaked and Airborne Targets.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Earth Effect</b> (5 Conjuration, 5 XP):",
                "You can create up to <box>Kg × ESS</box> earth, rocks, stone, clay, gravel, sand, cement, ect...",
                "You can also move the same amount of earth, for up to <box>CS^(1/3) meters</box>",
                "You can shape, mold, harden and soften the same amount of earth.",
                "You can deal <box>(1d4 × ESS) Physical Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Plant Effect</b> (5 Anima, 5 XP):",
                "You can make plants, flowers, moss, fungi, and outher flora sprout and grow, or die.",
                "You can deal <box>(1d4 × ESS) Bio Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Thunder Effect</b> (5 Evocation, 5 XP):",
                "You can create loud noises and vibrations, potentionally breaking brittle things, ect...",
                "You can play specific sounds.",
                "You can deal <box>(1d4 × ESS) Thunder Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Light Effect</b> (5 Evocation, 10 XP):",
                "You can create a point of light, which lasts 1 Minute (20 Rounds), emitting Bright-Light in <box>2 × ESS^(1/3) meters</box>, and Low-Light in Double the Radius.",
                "You can also make Objects and Entities glow the same way.",
                "You can color, and animate light.",
                "You can deal <box>(1d4 × ESS) Heat Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Darkness Effect</b> (5 Anima, 10 XP):",
                "You can create darkness, which lasts 1 Minute (20 Rounds), emitting Darkness in <box>2 × ESS^(1/3) meters</box>",
                "You can animate and move shadows.",
                "You can deal <box>(1d4 × ESS) Bio Damage</box>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Mass Elementalism</b> (10 XP):",
                "As a <b>Main-Action</b> you can have 3 Different Targets.",
                "As a <b>Main-Action + Bonus-Action</b> you can have 5 Different Targets.",
                "You can choose Different Effects for each Target.",
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
                ["Cast Time", "Bonus-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["AGI Save", "8 × ESS"],
            ],
        },
    ],
}