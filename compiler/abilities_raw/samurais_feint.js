module.exports = {
    name: "Samurai's Feint",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts",
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
                `Instantly Blink to a Sensed point within Range.`,
                `After using this Ability, you can use a Free-Action to Blink Back to where the Ability was originally cast.`,
                `If you haven't Blinked Back by the End of your Next Turn it will Trigger Automatically.`,
                `The Blink Back can happen even if the Caster is unable to Move normally, and doesn't care if the path is obstructed.`,
            ],
        },
        {
            type: "p",
            content: [
                `The only way to Cancel the Blink Back is to use something which Dispells Abilities.`,
                `If the Blink Back is Cancelled, then you gain the <a>Staggered Condition</a>.`,
                `Nothing more can be Blink Backed than what originally was brought along, not even being drenched by liquid.`,
                `Every Effect you get after using this Ability is Removed when you Blink Back.`,
                `This Ability doesn't Break Stances, even if the Stance normally Breaks from using Abilities.`,
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
                ["Range", "2 × MS"],
            ],
        },
    ],
}