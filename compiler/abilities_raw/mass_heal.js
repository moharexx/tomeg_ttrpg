module.exports = {
    name: "Mass Heal",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Enchantment | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Defense",
        "Ranged, Healing",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Mass Heal Stance</b>.`,
                `On Stance Trigger, you give out a total of <box>100 × ESS</box> Healing between Sensed Targets in Range.`,
                `The Maximum Healing any Target can recieve is <box>20 × ESS</box>`
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a>, gain +5 Healing Pool, and +1 Max Healing.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "Main-Action + Bonus-Action in your Next Turn."],
                ["Range", "5 × CS^(1/3)"],
                ["Healing Pool", "100 × ESS"],
                ["Max Healing", "20 × ESS"],
            ],
        },
    ],
}