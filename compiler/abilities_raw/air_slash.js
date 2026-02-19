module.exports = {
    name: "Air Slash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Physical Damage, Projectile, Flow Sphere AOE",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you fire a Projectile made of Air with a swing.`,
            ],
        },
        {
            type: "p",
            content: [
                `When using this Ability, choose between Variants.`,
                `Focus Slash is a Ranged Projectile Attack.`,
                `Burst Slash is a Ranged Projectile Attack which explodes into a Flow Sphere AOE from its center.`,
            ],
        },
        {
            type: "table",
            full_width: "60%",
            width: ["30%", "70%"],
            content: [
                ["Focus Slash", "Value"],
                ["Range", "15 × STR^(1/3)"],
                ["Damage", "(2d10 × ESS) Physical"],
            ],
        },
        {
            type: "table",
            full_width: "60%",
            width: ["30%", "70%"],
            content: [
                ["Burst Slash", "Value"],
                ["Range", "2 × STR^(1/3)"],
                ["Radius", "STR^(1/3)"],
                ["Damage", "(1d12 × ESS) Physical"],
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
            ],
        },
    ],
}