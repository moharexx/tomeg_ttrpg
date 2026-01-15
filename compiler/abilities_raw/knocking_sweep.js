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
        "<b>Skill:<b> 10 Melee Weapon | 10 Martial Arts",
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
                "When using this Ability, you attempt to knock Entities away from yourself.",
                "Entities inside your Melee Reach must succeed a <b>STR Save</b> of <box>6 × ESS</box> or be Knockbacked.",
                "The Direction of the Knockback is directly aways from you.",
            ],
        },
        {
            type: "dots",
            content: [
                "You can Spend GRIT to increase the <b>STR Save</b>, the Bonus Save is equal to GRIT spent.",
                "<b>Maximum GRIT Spending:</b> <box>6 × ESS</box>",
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
                ["STR Save", "6 × ESS"],
                ["Knockback", "2 × ESS^(1/3)"],
            ],
        },
    ],
}