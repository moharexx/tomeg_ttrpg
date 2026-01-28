module.exports = {
    name: "Light Illusion",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "5 CS, (5 Evocation | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Utility",
        "Obscurance, Illusion",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you create an Illusion of an Object, the Illusion is made of light.",
                "The Illusion can emit Bright-Light in <box>4 × ESS^(1/3)</box> Meters, and Low-Light in Double the Radius.",
                "Entities can determine it's an Illusion, if they pass a <box>15 × ESS</box> (Perception | Intuition | Arcana) Check.",
                "When the Illusion is investigated from close, it becomes obvious that it's an Illusion.",
                "The Illusion breaks line of sight, unless it's known to be an Illusion.",
            ]
        },
        {
            type: "list",
            content: [
                "Phantom Image (20 Divination)",
                "This Ability can be Modified with Divination, so that only your chosen Targets can see the Illusion.",
                "If the Ability is Discovered while it is a Phantom Image, it can be seen through.",
            ],
        },
        {
            type: "list",
            content: [
                "Moving Image (10 Transmutation)",
                "The Illusion can be moved the Ability's Range each Round, and can be animated.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"Silent Image"</i> - John DnD`,
            ]
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Illusion Difficulty", "15 × ESS"],
            ],
        },
    ],
}