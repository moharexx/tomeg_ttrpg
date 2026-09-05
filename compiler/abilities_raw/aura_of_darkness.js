module.exports = {
    name: "Aura Of Darkness",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Divination | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Abjuration | 10 Divination | 20 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Any Sphere AOE, Obscurance",
        "Bonus-Action / Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Aura Of Darkness Stance</b>.`,
                `When Entering <b>Aura Of Darkness Stance</b>, Choose an AOE Type from the table below.`,
                `While in <b>Aura Of Darkness</b>, you emit Darkness in a chosen AOE, and Low-Light in Double the Radius.`,
                `On Trigger, you Double the Radius, this Ends the Stance, but still emits Darkness until the End of Your Next Turn.`,
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["AOE Type", "Radius"],
                ["Flow", "8 × ESS^(1/3)"],
                ["Crawl", "6 × ESS^(1/3)"],
                ["Static", "4 × ESS^(1/3)"],
            ],
        },
        {
            type: "list",
            content: [
                `<b>Selective Darkness</b> (20 Divination, 5 XP):`,
                `You can choose which Entities that can see through the Darkness, like it wasn't there.`,
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "Bonus-Action"],
            ],
        },
    ],
}