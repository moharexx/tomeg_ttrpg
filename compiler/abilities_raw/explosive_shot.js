module.exports = {
    name: "Explosive Shot",
    category: "on_attack",
    type: [
        "Skill",
        "(Any)",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense",
        "Variable Damage, Flow Sphere AOE",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use any Non-Save Attack, you can use this Ability to make a Single Explosion on one of the Hit Targets.",
                "If the Attack Misses the Target, you can still Trigger the Explosion at the point of the Miss.",
                "The Hit Target suffers either the Damage of the Parent Attack, or this Ability's.",
                "When Multiple Explosive Shots are made with offshoot Child Attacks, Entities get Targeted only once.",
            ],
        },
        {
            type: "dots",
            content: [
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
                ["Radius", "2 × ESS^(1/3)"],
                ["Damage using Light Weapons", "(1d6 × ESS) Parent Damage Type"],
                ["Damage using (Medium Weapon | Ability)", "(1d8 × ESS) Parent Damage Type"],
                ["Damage using Heavy Weapons", "(1d10 × ESS) Parent Damage Type"],
            ],
        },
    ],
}