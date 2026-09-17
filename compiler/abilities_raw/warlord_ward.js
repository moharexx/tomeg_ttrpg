module.exports = {
    name: "Warlord Ward",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Martial Arts | 20 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts | 20 Melee Weapon",
    ],
    tags: [
        "Offense, Defense",
        "Self, Negation, Variable Damage, To-Hit",
        "Main-Action / Trigger",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Warlord Ward Stance</b>.`,
                `When Entering <b>Warlord Ward Stance</b>, you can Reduce a single HP Damage instance by <box>10 × ESS</box>`,
                `The Stance Trigger can only be used after you Reduced a Damage Instance with this Stance.`,
                `On Stance Trigger: Enhance your Melee Attack-Action, giving it <box>5 × ESS</box> Bonus To-Hit and Damage, the Type of which is the same as the Damage Reduced.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, HD Decrease</box>`,
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
                ["Stance Trigger", "Melee Attack-Action"],
                ["Damage Reduction", "10 × ESS"],
                ["To-Hit, Damage Bonus", "5 × ESS"],
            ],
        },
    ],
}