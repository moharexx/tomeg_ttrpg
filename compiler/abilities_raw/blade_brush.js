module.exports = {
    name: "Blade Brush",
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
        "Melee, Flow Cone AOE, Weapon Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you sweep your Melee Weapon, and make an Attack in a Cone.`,
                `The AOE Flows from one edge to the other, like left to right.`,
            ],
        },
        {
            type: "dots",
            content: [
                `This Ability has different Damage value based on the Weapon's Weight.`,
                `This Attack Retains Parent Weapon's Armor-Pen.`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>Flair</i>`,
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
                ["Cone Length", "Reach + 1"],
                ["Cone Spread", "120° (~1 Forward = +3 Width)"],
                ["Damage Of Weapon's Type (Light)", "1d6 × ESS"],
                ["Damage Of Weapon's Type (Medium)", "1d8 × ESS"],
                ["Damage Of Weapon's Type (Heavy)", "1d10 × ESS"],
            ],
        },
    ],
}