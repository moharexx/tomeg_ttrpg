module.exports = {
    name: "Meteor Strike",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "Spell: (50 INT | 50 WILL | 50 EGO), (20 Conjuration | 50 Transmutation | 200 Evocation)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile, Flow Sphere AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When used, you summon a Meteor in Summon Range.",
                "In your Next Turn you can Hurl the Meteor, as a Free-Action.",
                "If you don't it just falls down, and gets wasted.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Summon Range", "10 × CS^(1/3)"],
                ["Hurl Range", "20 × CS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Damage", "(2d12 × ESS) Physical"],
            ],
        },
    ],
}