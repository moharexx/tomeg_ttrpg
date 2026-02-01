module.exports = {
    name: "Knocking Sweep",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon | Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Defense",
        "Melee, Flow Sphere AOE, STR Save, Crowd Control",
        "Main-Action, GRIT",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you attempt to knock Entities away from yourself.`,
                `Entities inside your Melee Reach must succeed a <b>STR Save</b> of <box>10 × ESS</box> or be Knockbacked.`,
                `The Direction of the Knockback is directly aways from you.`,
            ],
        },
        {
            type: "dots",
            content: [
                `You can Spend <box>5 × ESS</box> GRIT to change the Knockback direction for each Entity.`,
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
                ["Range", "Reach"],
                ["STR Save", "10 × ESS"],
                ["Knockback", "2 × ESS^(1/3)"],
            ],
        },
    ],
}