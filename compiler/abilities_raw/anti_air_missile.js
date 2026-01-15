module.exports = {
    name: "Anti-Air Missile",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense",
        "Weapon Damage, Projectile, Executing",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you make a Ranged Projectile Attack.",
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing</a> against Entities with the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition.</a>`,
                "This Ability adheres to the rules of the Reload Property.",
            ],
        },
        {
            type: "dots",
            content: [
                "This Attack Retains Armor-Pen and all Special Properties the Parent Weapon does on a Regular Attack-Action.",
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
                ["Range", "Weapon Range"],
                ["Damage when using Light Weapon", "(1d8 × ESS) Weapon Damage Type"],
                ["Damage when using Medium Weapon", "(1d10 × ESS) Weapon Damage Type"],
                ["Damage when using Heavy Weapon", "(1d12 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}