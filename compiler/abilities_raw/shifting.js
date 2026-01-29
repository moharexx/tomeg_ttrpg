module.exports = {
    name: "Shifting",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Transmutation | 20 Conjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 CS, (10 Transmutation | 20 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Utility",
        "Self, Mobility",
        "Main-Action + Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Shifting Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, you Teleport <box>2 × ESS^(1/3)</box> meters.`,
                `You can NOT Teleport a collectively weighing more than <box>50 × ESS Kg</box>`,
                `You can NOT Teleport Entities other than Yourself.`,
                `On Stance Trigger, you Teleport <box>2 × ESS^(1/3)</box>.`,
                `Shifting's Teleportation does NOT Activate Reactions, or Trigger Stances.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Stance Trigger", "Bonus-Action at Your Next Turn"],
                ["Teleport Distance", "2 × ESS^(1/3)"],
                ["Max Weight", "50 × ESS kg"],
            ],
        },
    ],
}