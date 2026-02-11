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
            content: "When using this Ability, you throw your Melee Weapon.",
        },
        {
            type: "dots",
            content: [
                "If the Weapon has the Throw Property, the Attack counts as a Line AOE Attack, without the Long Range part.",
                "If the Weapon has the Heavy Property, the Attack has a Radius.",
                "This Attack Retains Armor-Pen and all Special Properties the Parent Weapon does on a Regular Attack-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Boulder Throw</b> (50 STR | Any Earth Spell):",
                "If you have a free Wielding Slot, you can grab a portion of the sorrounding terrain to use as the Projectile.",
                "The Object can be: <box>Light | Medium | Heavy</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Return</b> (50 WILL):",
                "It fucking returns. (Free-Action)",
                "This feature can be used in itself as a <b>Bonus-Action</b> to retrieve any Object weighing at Max <box>ESS Kg</box> from <box>20 × ESS^(1/3) meters</box>",
                "The Wielder of the Object is eligable to a STR Save of <box>4 × ESS</box>",
            ],
        },
        {
            type: "p",
            content: "Weapon Variants:",
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Light", "Value"],
                ["Cast Time", "Main-Action"],
                ["Range", "12 / 24 × STR^(1/3)"],
                ["Damage", "(1d10 × ESS) Weapon Damage Type"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Medium", "Value"],
                ["Cast Time", "Main-Action"],
                ["Range", "8 / 16 × STR^(1/3)"],
                ["Damage", "(1d12 × ESS) Weapon Damage Type"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Heavy", "Value"],
                ["Cast Time", "Main-Action"],
                ["Range", "4 / 8 × STR^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Damage", "(2d8 × ESS) Weapon Damage Type"],
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