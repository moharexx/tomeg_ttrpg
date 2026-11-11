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
                `When you use this Ability, you attempt to disarm an Entity.`,
                `The Hit Entity must make a <b>STR Save</b>, or one of their held or Wielded Items gets flung away.`,
                `If you Succeed against a Wielded Item, then that Wielding Slot is Disabled till the End of their Next Turn.`,
                `You can Target a Natural Weapons or Shield, Un-Wielding them, and also Disabling one Wielding Slot.`,
                `The Save Difficulty depends on if the Parent Attack is [Melee/Ranged]; <box>[12/8] × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Grab:</b>`,
                `If you are in Flung Distance, you can fling the Item to yourself.`,
                `If you have a free Wielding Slot you can instantly Wield the Item.`,
                `If you don't, you can freely drop anything you're Wielding to make space.`,
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
                ["[Melee/Ranged] STR Save", "[12/8] × ESS"],
                ["Flung Distance", "2 × (STR | CS)^(1/3)"],
            ],
        },
    ],
}