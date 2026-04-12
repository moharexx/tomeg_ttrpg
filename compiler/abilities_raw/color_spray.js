module.exports = {
    name: "Color Spray",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Conjuration | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Offense",
        "Melee, Flow Cone AOE, VIT Save, Debuff",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, spray a Cone of dazzling lights, or colorful spray material, or whatever the Caster desires.",
                "This is a Melee Flow Cone AOE, flowing out from the Caster.",
                "Targets must Succeed a <b>VIT Save</b> or get the <b>Dazzled Effect</b>.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Dazzled Effect:</b>",
                "The Target cannot Pinpoint with any of their Senses.",
                "This lasts till the End of the Target's Next Turn.",
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
                ["Cone Length", "CS^(1/3)"],
                ["Cone Spread", "90° (1 Forward = +2 Width)"],
                ["VIT Save", "10 × ESS"]
            ],
        },
    ],
}