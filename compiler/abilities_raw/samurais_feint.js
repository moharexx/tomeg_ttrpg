module.exports = {
    name: "Samurai's Feint",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Martial Arts",
    ],
    reqs_full: [
        "20 Martial Arts",
    ],
    tags: [
        "Utility",
        "Mobility",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Blink to a point within Range, if said point is Sensed, and there is a straight unobstructed path.",
                "After using this Ability, you can use a Free-Action to Blink back to where the Ability was originally cast.",
                "If you have not Blinked Back by the End of your Next Turn it will Trigger Automatically.",
                "The Blink Back can happen even if the Caster is unable to Move normally, and does not care if the path is obstructed.",
            ],
        },
        {
            type: "dots",
            content: [
                "The only way to cancel the Blink Back is to use something which Dispells Ability effects.",
                "When the Caster Dispells the Blink Back, the Blink Back is treated as not cast by the Caster.",
                "Nothing more can be Blink Backed than what originally was Brought along, not even being drenched by liquid.",
            ],
        },
        {
            type: "p",
            content: [
                "This Ability does not Break Stances, even if the Stance normally Breaks from Ability Use.",
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
                ["Range", "MS"],
            ],
        },
    ],
}