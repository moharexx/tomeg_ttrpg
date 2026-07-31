module.exports = {
    name: "Shifting",
    category: "stance",
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
                `When Entering this Stance and once on each of your subsequent Turns, as a <b>Free-Action</b> you can Teleport <box>2 × ESS^(1/3)</box> meters.`,
                `You can NOT Teleport other Entities, or Objects collectively weighing more than <box>50 × ESS Kg</box>`,
                `On Stance Trigger, you can Teleport <box>2 × ESS^(1/3)</box> meters.`,
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