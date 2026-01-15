module.exports = {
    name: "Fireball",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Transmutation | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphere AOE, AGI Save, Heat Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Projectile made of condensed fire, which detonates into a roar of flames.",
                "The Projectile doesn't need to impact for it to explode, it can explode midair.",
                "From the Projectile's explosion flows out the Sphere AOE, Targets must make a <b>AGI Save</b> or get Hit.",
            ],
        },
        {
            type: "dots",
            content: [
                "When this Projectile is Physically Blocked in some way it Explodes.",
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
                ["Range", "20 × CS^(1/3)"],
                ["Radius", "3 × ESS^(1/3)"],
                ["AGI Save", "10 × ESS"],
                ["Damage", "(2d8 × ESS) Heat"],
            ],
        },
    ],
}