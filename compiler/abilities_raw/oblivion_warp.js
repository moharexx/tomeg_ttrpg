module.exports = {
    name: "Oblivion Warp",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Conjuration | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Conjuration | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Melee, Demat Damage, Crowrd Control",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Oblivion Warp Stance</b>.`,
                `On Stance Trigger; Entities within the Radius must make a <b>Soul Save</b> or Take <box>2d6 × ESS</box> Demat Damage and get Teleported.`,
                `Teleported Entities get Teleported into a Pinpointed position, they are all position as close as possible to the Targeted position.`,
                `You can decide which Entity takes which closest possible position.`,
                `Oblivion Warp's Teleported does NOT Activate Reactions, or Trigger Stances.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>A spell forged in the most brutals of Elemental Battlegrounds.</i>`,
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
                ["Stance Trigger", "Main-Action + Bonus-Action on your Next Turn"],
                ["Radius", "4 × ESS^(1/3)"],
                ["Soul Save", "10 × ESS"],
                ["Demat Damage", "2d6 × ESS"],
                ["Teleport Distance", "10 × ESS^(1/3)"],
            ],
        },
    ],
}