module.exports = {
    name: "Clairvoyance",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Divination | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 20 EGO), (5 Divination | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Sense",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Choose a Point, you create an invisible incorporeal Sensing object at that Point.`,
                `Clairvoyance has the same Senses as you do.`,
                `Clairvoyance can be Pinpointed with a Successful <b>Scan Area (Intuition | Perception)</b> of <box>CS</box>`,
                `As a Bonus-Action you can Move the Clairvoyance <box>4 × ESS^(1/3) meters</box>`,
                `As a Bonus-Action you can refresh the Duration of Clairvoyance.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Distant Clairvoyance</b> (10 XP):`,
                `Cast Clairvoyance for 1 Minute (20 Rounds) to increase the Spawn Range to <box>2000 × ESS^(1/3)</box>`,
                `When you Cast it this way you can specify a vague description to where Clairvoyance should Spawn.`,
                `<b>Example:</b> "I want to see a busy street!" -> Spawns in a highly populated street.`,
                `When there is nothing matching your description, Clairvoyance Fails.`,
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
                ["Cast Time", "Bonus-Action"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Spawn Range", "20 × ESS^(1/3)"],
                ["Move Distance", "4 × ESS^(1/3)"],
                ["Scan Difficulty", "CS"],
            ],
        },
    ],
}