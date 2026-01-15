module.exports = {
    name: "Gas Screen",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense, Utility, Unlock",
        "Bio Damage, Crawl Cone AOE, Obscurance",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you create a Poisonous Gas in a Cone, that Sight based Perception cannot see through.",
                "Entities in the Gas at the Start of Their Turns must make a <b>VIT Save</b> or take Damage.",
                "When a Wind based Attack is used, if it Deals more than <box>20 × ESS</box> Damage it disperses the Gas Screen.",
                "If the Wind is an AOE then <box>5 × ESS</box> Damage is Enough to disperse the Gas Screen.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Shaped Cloud</b> (50 Transmutation)",
                "This Ability can be Shaped in whatever way the Caster desires.",
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
                ["Duration", "Till End of Caster's Next Turn"],
                ["Cone Length", "CS^(1/3)"],
                ["Cone Spread", "180° (Half Sphere)"],
                ["VIT Save", "10 × ESS"],
                ["Damage", "(2d6 × ESS) Bio"],
            ],
        },
    ],
}