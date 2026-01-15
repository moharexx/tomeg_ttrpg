module.exports = {
    name: "Snipe",
    category: "on_attack",
    type: [
        "Skill",
        "(Ranged, Cone)",
    ],
    reqs_short: [
        "Ballistic | Perception",
    ],
    reqs_full: [
        "10 Ballistic | 20 Perception",
    ],
    tags: [
        "Utility",
        "Range",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use a Ranged Projectile Attack, you can increases it's Range and Long Range.",
                "When used on a Cone Attack, the Length of the Cone is Increased.",
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
                ["Extra Range", "60 × ESS^(1/3)"],
                ["Extra Long Range", "120 × ESS^(1/3)"],
                ["Extra Cone Length", "2 × ESS^(1/3)"],
            ],
        },
    ],
}