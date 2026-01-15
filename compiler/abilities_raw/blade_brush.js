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
        "Weapon Damage, Flow Cone AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you sweep your Melee Weapon, and make an Attack in a Cone.",
                "This is a Cone AOE Melee Attack.",
                "The Cone's starts out from your center.",
            ],
        },
        {
            type: "dots",
            content: [
                "This Attack Retains Armor-Pen and all Special Properties the Parent Weapon does on a Regular Attack-Action.",
                "The AOE Flows from one edge to the other, like left to right.",
                "If the Attack's Damage is reduced to 0, the Cone's AOE Stops at that Target.",
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
                ["Damage when using Light Weapon", "(1d6 × ESS) Weapon Damage Type"],
                ["Damage when using Medium Weapon", "(1d8 × ESS) Weapon Damage Type"],
                ["Damage when using Heavy Weapon", "(1d10 × ESS) Weapon Damage Type"],
            ],
        },
    ],
}