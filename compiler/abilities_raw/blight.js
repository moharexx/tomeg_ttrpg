module.exports = {
    name: "Blight",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Anima | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Enchantment | 20 Anima | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, VIT Save, Bio Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, Target a Pinpointed location, in which Targets will wither.`,
                `All Targets Inside the Radius must make a VIT Save or get Hit.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "3 × ESS^(1/3)"],
                ["VIT Save", "10 × ESS"],
                ["Damage", "(2d8 × ESS) Bio"],
            ],
        },
    ],
}