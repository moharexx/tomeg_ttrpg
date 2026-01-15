module.exports = {
    name: "Disarm",
    category: "on_attack",
    type: [
        "Skill",
        "(Any)",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Debuff",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you attempt to disarm an Entity.",
                "The Hit Entity must make a <b>STR Save</b>, or one of their held or Wielded Items gets flung away.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Grab:</b>",
                "If you have a free hand, and you are in Flung Distance, you can grab the disarmed item.",
                "Before grabbing the disarmed item you can drop whatever you're holding or Wielding to make a free slot.",
                "When you grab something this way you can Instantly Wield it if you have a Free Wielding Slot.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>When Melee:</b>",
                "The <b>STR Save</b> is <box>12 × ESS</box>.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>When Ranged:</b>",
                "The <b>STR Save</b> is <box>8 × ESS</box>.",
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
                ["Melee STR Save", "12 × ESS"],
                ["Ranged STR Save", "8 × ESS"],
                ["Weapon Flung Distance", "2 × STR^(1/3)"],
            ],
        },
    ],
}