module.exports = {
    name: "Heal More",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Enchantment | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Enchantment | 50 Anima)",
    ],
    tags: [
        "Defense",
        "Ranged, Healing",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you give out a total of <box>20 × ESS</box> Healing between Pinpointed Targets in Range.`,
                `The Maximum Healing any Target can recieve is <box>4 × ESS</box>`
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a>, gain +5 Healing Pool, and +1 Max Healing.`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Healing Pool", "20 × ESS"],
                ["Max Healing", "4 × ESS"],
            ],
        },
    ],
}