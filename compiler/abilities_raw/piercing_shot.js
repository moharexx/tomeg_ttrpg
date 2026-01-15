module.exports = {
    name: "Piercing Shot",
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
        "Variable Damage, Flow AOE",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When you use a Single-Target Projectile Attack, you can use this Ability to make it Hit Multiple Targets.",
                "The Ranged Attack will become a Line AOE Attack, with <b>Half</b> the Range.",
                "One Choosen Target Receives the Original Parent Attack, and the others Recieve this Ability's Damage.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Line Attack Stops if a Hit Attack's Damage was Fully Negated.",
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
                ["Line Length", "Parent Attack's Half Range"],
                ["Damage using Light Weapons", " (1d6 × ESS) Parent Damage Type"],
                ["Damage using (Medium Weapon | Ability)", "(1d8 × ESS) Parent Damage Type"],
                ["Damage using Heavy Weapons", "(1d10 × ESS) Parent Damage Type"],
            ],
        },
    ],
}