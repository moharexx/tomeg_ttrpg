module.exports = {
    name: "Steel Tempest",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Melee, Flow Line AOE, Weapon Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you thrust your Melee Weapon, and make an Attack in a Line.`,
                `This Attack has Penetration equal to the used Weapon's.`,
                `The Damage of the Ability is determined by the Weapon's Weight Property, using 2 Wielding Slots uses the Heavy Damage.`,
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
                ["Line Length", "2 × Weapon Reach"],
                ["Damage Of Weapon's Type (Light)", "1d8 × ESS"],
                ["Damage Of Weapon's Type (Medium)", "1d10 × ESS"],
                ["Damage Of Weapon's Type (Heavy)", "1d12 × ESS"],
            ],
        },
    ],
}