module.exports = {
    name: "Combat Teleport",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Conjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Utility, Cooldown",
        "Range, Static Sphere AOE, Soul Save, Mobility",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Teleport Entities on a Failed Save inside the Radius to a Pipointed location within Range.`,
                `After the Cast Time you choose Targets inside the Radius, collectively not weighing more than <box>250 × ESS Kg</box>`,
                `Teleported Entities stay in their relative position inside the Radius.`,
                `Combat Teleport's Teleportation does NOT Activate Reactions, or Trigger Stances.`,
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
                ["Cooldown", "Short-Rest"],
                ["Teleport Distance", "10 × ESS^(1/3)"],
                ["Soul Save", "4 × ESS"],
                ["Radius", "CS^(1/3)"],
                ["Max Weight", "250 × ESS kg"],
            ],
        },
    ],
}