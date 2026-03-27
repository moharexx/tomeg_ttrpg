module.exports = {
    name: "Weapon Throw",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Melee Weapon | 10 Martial Arts | 20 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 Melee Weapon | 10 Martial Arts | 20 Ballistic",
    ],
    tags: [
        "Offense",
        "Ranged, Flow AOE, Weapon Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: `When using this Ability, you throw your Melee Weapon.`,
        },
        {
            type: "dots",
            content: [
                `This Ability uses different stats based on the Weapon's Weight.`,
                `If the Weapon has the Throw Property, the Attack counts as a Line AOE Attack, without the Long Range part.`,
                `If the Weapon has the Heavy Property, the Attack has a Radius.`,
                `This Attack Retains Parent Weapon's Armor-Pen.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Boulder Throw</b> (50 STR | Any Earth Spell):`,
                `If you have a free Wielding Slot, you can grab a portion of the sorrounding terrain to use as the Projectile.`,
                `The Object can be: <box>Light | Medium | Heavy</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Return</b> (50 WILL):`,
                `It fucking returns. (Free-Action)`,
                `This feature can be used in itself as a <b>Bonus-Action</b> to retrieve any Object weighing at Max <box>ESS Kg</box> from <box>20 × ESS^(1/3) meters</box>`,
                `The Wielder of the Object is eligable to a <b>STR Save</b> of <box>2 × ESS</box>`,
            ],
        },
        {
            type: "p",
            content: `Weapon Weight:`,
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Light", "Value"],
                ["Range", "8 / 16 × STR^(1/3)"],
                ["Damage Of Weapon's Type", "1d10 × ESS"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Medium", "Value"],
                ["Range", "6 / 12 × STR^(1/3)"],
                ["Damage Of Weapon's Type", "1d12 × ESS"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Heavy", "Value"],
                ["Range", "4 / 8 × STR^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Damage Of Weapon's Type", "2d8 × ESS"],
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
            ],
        },
    ],
}