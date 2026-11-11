module.exports = {
    name: "Static Glitch",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Abjuration",
    ],
    reqs_full: [
        "10 CS, (5 Enchantment | 10 Transmutation | 20 Abjuration)",
    ],
    tags: [
        "Offense",
        "Melee, Static Line AOE, Bio Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, make a Line AOE Attack.`,
                `On Dealing Damage the Target gains the <b>Distort Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Distort Effect:</b>`,
                `The Ability will repeat its Damage on the Caster's Next Turn.`,
                `After repeating the Damage, the Effect Ends.`,
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
                ["Bio Damage", "1d6 × ESS"],
                ["Line Length", "3 × CS^(1/3)"],
                ["Line Width", "0.5 × CS^(1/3)"],
            ],
        },
    ],
}