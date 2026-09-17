module.exports = {
    name: "Blister Burst",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Transmutation | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphere AOE, VIT Save, Bio Damage, Effect",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, the Target Entity swells up with blisters and pops, nearby Entities get infected from the pus.`,
                `The Target Entity must Succeed a <b>VIT Save</b> of <box>10 × ESS</box>, or take <box>2d6 × ESS</box> Bio Damage.`,
                `If the Target Faild the <b>VIT Save</b>, an explosion with a <b>Radius</b> of <box>3 × ESS^(1/3)</box> gets centered on the Target.`,
                `Entites other than the Target within the <b>Radius</b> take the same Damage on a Failed <b>AGI Save</b> of <box>14 × ESS</box>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `On Failing a Save from this Ability, the Target gets Soaked with water.`,
                `This Effect Ends after the Entity uses a <b>Main-Action</b> to remove it.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "3 × ESS^(1/3)"],
                ["VIT Save", "10 × ESS"],
                ["AGI Save", "14 × ESS"],
                ["Bio Damage", "2d6 × ESS"],
            ],
        },
    ],
}