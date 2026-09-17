module.exports = {
    name: "Rift Blade",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense, Defense, Utility",
        "Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You imbue your Melee Attack with a crack in space it self.`,
                `On-Hit the Target makes a <b>Soul Save</b> of <box>14 × ESS</box>, or get Teleported <box>6 × ESS</box> meters to a Pinpointed Position.`,
                `You can Teleport with the Target, and offset yourself from them by your <box>Melee Reach</box>`,
                `The Teleportation's Distance is measured from yourself.`,
                `Rift Blade's Teleported does NOT Activate Reactions, or Trigger Stances.`,
            ],
        },
        {
            type: "p",
            content: [
                `You could also just spend <box>Main-Action + Bonus-Action</box> to Teleport <box>6 × ESS + Melee Reach</box>`,
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
                ["Cast Time", "Main-Action"],
                ["Special Condition", "Melee"],
                ["Soul Save", "14 × ESS"],
                ["Teleport Distance", "6 × ESS^(1/3)"],
                ["Self Offset Position", "Weapon Reach"],
            ],
        },
    ],
}