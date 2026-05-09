module.exports = {
    name: "Combat Teleport",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Conjuration | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Conjuration | 50 Enchantment)",
    ],
    tags: [
        "Utility, Cooldown",
        "Static Sphere AOE, Soul Save, Mobility",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you choose Targets in a Radius around you to be Teleported to a <b>Pinpointed</b> location within Range.`,
                `Unwilling Targets can throw a Soul Save against being Teleported.`,
                `The Targets' collective weight can be up to <box>250 × ESS Kg</box>`,
                `Where each Teleported Target end up in the destination's Radius is determined by the Caster.`,
                `Combat Teleport's Teleportation does NOT Activate Reactions, or Trigger Stances.`,
            ],
        },
        {
            type: "p",
            content: [
                `<b>Note:</b> Yes, you can exclude yourself from the Target list.`,
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