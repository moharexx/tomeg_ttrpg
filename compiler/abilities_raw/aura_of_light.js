module.exports = {
    name: "Aura Of Light",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Evocation | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Utility, Unlock",
        "Any Sphere AOE",
        "Bonus-Action / Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Aura Of Light Stance</b>.`,
                `While in <b>Aura Of Light</b>, you emit Bright-Light in a chosen AOE, and Low-Light in Double the Radius.`,
                `When Entering <b>Aura Of Light Stance</b>, Choose an AOE Type from the table below.`,
                `On <b>Stance</b> Trigger, you Double the Radius of the Ability, and will emit Light until the End of Your Next Turn.`,
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["AOE Type", "Radius"],
                ["Flow", "10 × ESS^(1/3)"],
                ["Crawl", "8 × ESS^(1/3)"],
                ["Static", "6 × ESS^(1/3)"],
            ],
        },
        {
            type: "list",
            content: [
                `<b>Private Light</b> (20 Divination, 5 XP):`,
                `You can choose which Entities can see the Light.`,
                `Entities that can't see the Light can see it with a Perception Check of at least <box>10 × ESS</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Cast Time", "Bonus Action"],
                ["Stance Trigger", "Main-Action"],
            ],
        },
    ],
}