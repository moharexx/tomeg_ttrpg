module.exports = {
    name: "Temporary Pillar",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense, Defense",
        "Ranged, Flow | Static Line AOE, STR Save",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you create a temporary pillar made of a light pseudo material.`,
                `On Cast, you decide the Pillar's position, rotation and if it's a Flows or a Static AOE.`,
                `The Pillar can be either be anchored or be affected by gravity as normal, and can be transparent.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Flow AOE:</b>`,
                `If the Line Flows it can push Entitities on a Failed <b>STR Save</b> of <box>6 × ESS</box>`,
                `The Pillar Flows from one end of the Line to the other.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Static AOE:</b>`,
                `If the Line is Static, Entitities on a Failed <b>STR Save</b> of <box>6 × ESS</box> get pushed out of the AOE in a random direction.`,
                `On a Success a part of the Pillar just doesn't spawn in the same space as the Entity.`,
            ]
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "2 × CS^(1/3)"],
                ["Line Length", "4 × ESS^(1/3)"],
                ["Line Width", "ESS^(1/3)"],
                ["STR Save", "6 × ESS"],
                ["Pillar HP per Cubic Meter", "5"],
                ["Pillar Weight", "40 × ESS Kg"],
            ],
        },
    ],
}