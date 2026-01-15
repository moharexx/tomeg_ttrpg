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
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Conjuration | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Offense",
        "VIT Save, Flow Cone AOE, Debuff",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, spray a Cone of Blinding lights, or colorful spray material, or whatever the Caster desires.",
                "This is a Flow Cone AOE Ranged Save, flowing out from the Caster.",
                "Targets mush Succeed a <b>VIT Save</b> or get the <b>Blinded Effect.</b>",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Blinded Effect:</b>",
                "The Target's Sight based Perception is disabled.",
                "The Target is Blinded until the End of it's Next Turn.",
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