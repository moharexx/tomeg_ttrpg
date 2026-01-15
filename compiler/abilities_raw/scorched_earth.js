module.exports = {
    name: "Scorched Earth",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (20 Evocation | 50 Conjuration | 100 Transmutation)",
    ],
    tags: [
        "Offense",
        "Heat Damage, AOE",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Two explosive Projectiles made of fire that Scorches the ground.",
                "An Entity Targeted with both Projectiles will only get Effected by one.",
            ],
        },
        {
            type: "list",
            content: [
                "Scorched Terrain:",
                "The ground withing the Radius of the exlosion is Scorched for 1 Minute (20 Rounds).",
                "Entities Standing on the Scorched Terrain take <box>1d8 × ESS</box> Heat Damage.",
                "Scorched Terrain does not Stack, and the Strongest one will be in Effect.",
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
                ["Projectile Amount", "2"],
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Damage", "(1d8 × ESS) Heat"],
            ],
        },
    ],
}