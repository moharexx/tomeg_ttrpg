module.exports = {
    name: "Reflex Ward",
    category: "reactive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Divination",
    ],
    reqs_full: [
        "(5 INT | 5 WILL | 10 EGO), (5 Enchantment | 10 Divination | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When an Entity you Sense is getting Attacked by an Attacker you Sense, you can Enhance your Target's Reflexes.",
                "For the Duration the Target Entity can spend extra <box>4 × ESS</box> Free HD against Attacks, potentionally making them miss.",
                "Using this Free HD does not spend from your HD Pool, but still counts as Spending HD for the purposes of Abilities, like Breaking Stances.",
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
                ["Trigger", "Sense a Target Getting Attacked"],
                ["Duration", "Start of Casters Next Turn"],
                ["Range", "10 × CS^(1/3)"],
                ["Bonus HD on Use", "4 × ESS"],
            ],
        },
    ],
}