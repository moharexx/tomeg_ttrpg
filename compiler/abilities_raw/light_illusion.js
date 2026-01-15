module.exports = {
    name: "Light Illusion",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Divination",
    ],
    reqs_full: [
        "(10 INT | 20 WILL | 5 EGO), (5 Evocation | 10 Transmutation | 50 Divination)",
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
                "The Illusion can Emit Light: <box>10 × ESS^(1/3) Meters</box>",
                "For Entities to see that the Illusion is fake, they must pass a (Perception | Intuition | Arcana) Check.",
                "When the Illusion is investigated from close, it becomes obvious that it is an Illusion.",
                "The Illusion breaks Line of Sight, unless it is known to be an Illusion.",
            ]
        },
        {
            type: "list",
            content: [
                "Phantom Image (50 Divination)",
                "This Ability can be Modified with Divination, so that only your chosen Targets can see the Illusion.",
                "If the Ability is Discovered while it is a Phantom Image, it can be seen through.",
            ],
        },
        {
            type: "list",
            content: [
                "Moving Image (50 Evocation)",
                "The Illusion can be moved the Ability's Range each Round, and can be animated.",
            ],
        },
        {
            type: "p",
            content: [
                "Note: A Silent Image",
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
                ["Illusion Difficulty", "CS + (Evocation | Divination)"],
            ],
        },
    ],
}