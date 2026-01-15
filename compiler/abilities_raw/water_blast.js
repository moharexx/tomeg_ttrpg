module.exports = {
    name: "Water Blast",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(5 INT | 5 WILL | 5 EGO), (5 Conjuration | 10 Transmutation | 20 Evocation)",
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
                "When used, fire a Single Target Projectile made of water.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Underwater Jet:</b>",
                "When the Projectile goes into the Water it will turn into an Underwater Jet.",
                "While in this Underwater form, each meter traveled will count as half a meter for it's range.",
                "When it exits the Water, the Jet turns back into the Projectile and continues traveling.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Soaked Effect:</b>",
                "On Dealing Damage, the Target gets Soaked with water.",
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Damage", "(2d10 × ESS) Physical"],
            ],
        },
    ],
}