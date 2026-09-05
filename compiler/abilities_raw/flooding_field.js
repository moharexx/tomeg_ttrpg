module.exports = {
    name: "Flooding Field",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Physical Damage, VIT Save, Crowd Control",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere the air becomes extremely humid, and small water bubbles will start to from.`,
                `When using this Ability, you are put in <b>Flooding Field Stance</b>.`,
                `When Entering this Stance and in your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
                `Targets Damaged by this Ability get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `For the rest of the Stance's Duration, the full AOE is filled with water.`,
                `Entities inside the water will be effected by <a href="../main/mechanics.html#underwater_rules" target="_blank">Underwater Rules</a>.`,
                `Once the Stance Ends, all the water made by this Ability will sublimate into nothing.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `An Entity can use a <b>Main-Action</b> to Remove this Effect from themselves.`,
                `This Soaked Effect End if the Ability Ends.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Stance Trigger", "None"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Physical Damage", "1d10 × ESS"],
            ],
        },
    ],
}