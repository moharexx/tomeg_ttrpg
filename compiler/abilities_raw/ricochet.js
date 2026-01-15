module.exports = {
    name: "Ricochet",
    category: "on_attack",
    type: [
        "Skill",
        "(Ranged)",
    ],
    reqs_short: [
        "Ballistic",
    ],
    reqs_full: [
        "10 Ballistic",
    ],
    tags: [
        "Offense",
        "Variable Damage, Projectile",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use a Single-Target Projectile Attack, you can use this Ability to make it Ricochet once.",
                "When the Parent Attack Hits a Target, you can choose it to Ricochet.",
                "The Attack is split into 2 Stages, before the Ricochet, and after it.",
                "The Caster can choose which Stage has the Parent Attack's Original Damage.",
                "The other Stage will have the Overwritten Damage of this Ability.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Ricochet can go in any Direction, but cannot instantly Hit the same Target.",
                "The Ability retains the Finalized To-Hit, and Penetration Values of the Parent Attack.",
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
                ["Cast Time", "Bonus-Action"],
                ["Range after Ricochet", "Parent Attack's Range"],
                ["Damage using Light Weapons", "(1d8 × ESS) Parent Damage Type"],
                ["Damage using (Medium Weapon | Ability)", "(1d10 × ESS) Parent Damage Type"],
                ["Damage using Heavy Weapons", "(1d12 × ESS) Parent Damage Type"],
            ],
        },
    ],
}