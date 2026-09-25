module.exports = {
    name: "Battle Aura",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT | 50 WILL",
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL",
        "<b>Skill:</b> 20 Martial Arts",
    ],
    tags: [
        "Defense",
        "Self, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You can use this Ability when making the <a target="_blank" href="../main/mechanics.html#switch_action">Switch-Action</a>, allowing you to change your Armor.`,
                `You can either Simulate an Armor, or change the one you're currently Wearing.`,
                `The new Armor can have up to <box>6</box> Property Points, and Tier equal to your ESS.`,
                `If you change an Armor you're currently Wearing, the changes only last while Wearing it.`,
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
                ["Cast Time", "Same as Switch-Action (Counts as Switch-Action)"],
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Armament Tier", "ESS"],
            ],
        },
    ],
}