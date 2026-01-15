module.exports = {
    name: "Steel Tempest",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon",
    ],
    reqs_full: [
        "10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Weapon Damage, AOE",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: "When you use this Ability, you thrust your Melee Weapon, and make an Attack in a Line.",
        },
        {
            type: "dots",
            content: [
                "This Attack Retains Armor-Pen and all Special Properties the Parent Weapon does on a Regular Attack-Action.",
                "If the Attack's Damage is reduced to 0, the Line's AOE Stops at that Target.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"Hasagi!"</i> - Yasuo`,
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
                ["Line Length", "2 × Melee Attack's Reach"],
                ["Damage when using Light Weapon", "(1d8 × ESS) Weapon Damage Type"],
                ["Damage when using Medium Weapon", "(1d10 × ESS) Weapon Damage Type"],
                ["Damage when using Heavy Weapon", "(1d12 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}