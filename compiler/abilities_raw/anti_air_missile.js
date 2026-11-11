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
        "Ranged, Weapon Damage, Executing",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you make a Single-Target Ranged Projectile Attack with a Wielded Ranged Weapon.`,
                `The Damage is <a href="../main/mechanics.html#executing" target="_blank">Executing</a> against Entities with the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition.</a>`,
                `This Attack inherets the Armor-Pen of your Ranged Weapon.`,
                `This Ability adheres to the rules of the Reload Property, needing your Weapon Reloaded, and making you have to Reload after using it.`,
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
                ["Damage using Light Weapons", "(1d8 × ESS) Weapon Damage Type"],
                ["Damage using Medium Weapons", "(1d10 × ESS) Weapon Damage Type"],
                ["Damage using Heavy Weapons", "(1d12 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}