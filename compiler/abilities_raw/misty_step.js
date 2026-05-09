module.exports = {
    name: "Misty Step",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "200 Acrobatics",
        "5 Transmutation | 10 Conjuration | 20 Enchantment",
    ],
    reqs_full: [
        "200 Acrobatics",
        "10 CS, (5 Transmutation | 10 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Utility, Cooldown",
        "Self, Mobility",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You can Teleport to a point which you can Pinpoint within Teleport Distance.`,
                `You can carry things you're holding, and even Entities you're Grappling.`,
                `The collective weight of what you bring cannot be over <box>100 × ESS Kg</box>`,
                `Unwilling Targets can make a Soul Save against being Teleported.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Misty Touch</b> (50 Enchantment):`,
                `Makes the Ability's Range Touch.`,
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
                ["Range", "Self"],
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Soul Save", "10 × ESS"],
                ["Teleport Distance", "6 × ESS^(1/3)"],
                ["Max Weight", "100 × ESS Kg"],
            ],
        },
    ],
}