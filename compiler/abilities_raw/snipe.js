module.exports = {
    name: "Snipe",
    category: "on_attack",
    type: [
        "Skill",
        "(Ranged, Cone)",
    ],
    reqs_short: [
        "10 Ballistic | 10 Perception",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic | 10 Perception",
    ],
    tags: [
        "Utility",
        "Range",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When you use a Ranged Attack, you can increases its Range, including Long Range.`,
                `When used on a Cone Attack, the Length of the Cone is increased.`,
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
                ["Extra Range", "(60 / 120) × ESS^(1/3)"],
                ["Extra Cone Length", "4 × ESS^(1/3)"],
            ],
        },
    ],
}