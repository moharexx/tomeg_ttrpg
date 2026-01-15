module.exports = {
    name: "Great Spin",
    category: "stance",
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
        "Weapon Damage, Flow Sphere AOE, Stack",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Great Spin Stance.</b>",
                "Your Attack's Range increases with your Stacks.",
                "When the Stance is Triggered, you make a Flow Sphere AOE Melee Attack coming out of you.",
                "<b>Max Stack:</b> <box>3</box>",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, HD Decrease</box>",
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
                ["Stance Trigger", "Bonus-Action at your next Turn."],
                ["Radius", "Reach + (Stack × ESS^(1/3))"],
                ["Damage", "(1d10 × ESS) + (2 × Stack × ESS) Weapon Damage Type"],
            ],
        },
    ],
}