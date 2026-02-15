module.exports = {
    name: "Judgement",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Flow Sphere AOE, AGI Save, Thunder Damage, Mobility",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Judgement Stance</b>.`,
                `On Stance Triggered, dash in a stright line to a point and Target Entities inside the Radius.`,
                `Targeted Entities take <box>2d10 ×ESS</box> Thunder Damage on a Failed <b>AGI Save</b> of <box>10 × ESS<box>`,
                `The AOE of this Ability is a Melee Flow Sphere, Flowing out from you.`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
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
                ["Stance Trigger", "Main-Action at Your Next Turn"],
                ["Dash Distance", "2 × MS"],
                ["Radius", "2 × ESS^(1/3)"],
                ["AGI Save", "10 × ESS"],
                ["Damage", "(2d10 × ESS) Thunder"],
            ],
        },
    ],
}