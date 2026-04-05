module.exports = {
    name: "Peashooter",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Physical Damage, Minon",
        "Bonus-Action, PROXY",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you create Peashooter(s) whitin Range.`,
                `Allocate up to <box>4 × ESS</box> PROXY, freely devided between the Peashooter(s).`,
                `The Tier of the Peashooter depends on the PROXY Allocated, and Capped by the Ability's ESS.`,
                `The Peashooters can be of different types.`,
                `On on your subsequent Turns, the Peashooters can take the Attack-Action once.`,
            ],
        },
        {
            type: "p",
            content: "Peashooter Variants:",
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Peashooter", "Value"],
                ["Static To-Hit", "6 × Tier"],
                ["Physical Damage", "4 × Tier"],
                ["PROXY", "2 × Tier"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Repeater", "Value"],
                ["Static To-Hit", "4 × Tier"],
                ["Physical Damage", "6 × Tier"],
                ["PROXY", "2 × Tier"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Gatling Pea", "Value"],
                ["Static To-Hit", "8 × Tier"],
                ["Physical Damage", "8 × Tier"],
                ["PROXY", "4 × Tier"],
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Peashooter's Range", "10 ESS^(1/3)"],
                ["Peashooter's HP", "2 × ESS"],
                ["PROXY", "4 × ESS"],
            ],
        },
    ],
}