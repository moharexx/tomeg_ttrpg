module.exports = {
    name: "Battle Aura",
    category: "passive",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT | 50 WILL | 50 Enchantment",
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL | 50 Enchantment",
        "<b>Skill:</b> 20 Martial Arts",
    ],
    tags: [
        "Defense",
        "Self, Buff",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When you use the <a target="_blank" href="../main/mechanics.html#switch_action">Switch-Action</a>, you can Simulate or Alter your Armor.`,
                `The new Armor can have up to its regular Max Property Points, and Tier equal to your ESS.`,
                `If you Alter an Armor you're currently Wearing, the changes only last while Wearing it.`,
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
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Armament Tier", "ESS"],
            ],
        },
    ],
}