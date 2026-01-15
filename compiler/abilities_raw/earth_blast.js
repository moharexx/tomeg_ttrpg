module.exports = {
    name: "Earth Blast",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Conjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of earth.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Seismic Wave:</b>",
                "This Ability can be Cast Directly into solid ground.",
                "When done so, the it travels as a Seismic Wave till it reaches a surface, where it turns into the Projectile and continues in the same direction.",
                "The Seismic Wave has <box>10 × CS^(1/3) Range</box>, if it reaches surface the Projectile has it's regular range starting from there.",
                "The Seismic Wave can Hit a Target inside solid ground, the Damage and Armor-Pen is the same as regular.",
                "The Projectile cannot turn into the Seismic Wave, it must be Directly Cast into solid ground.",
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
                ["Range", "5 / 10 × CS^(1/3)"],
                ["Damage", "(2d8 × ESS) Physical"],
                ["Armor-Pen", "5 × ESS"],
            ],
        },
    ],
}