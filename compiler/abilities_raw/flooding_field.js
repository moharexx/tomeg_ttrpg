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
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
                `Entities Damaged by this Ability get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you can fill Radius with water.`,
                `Entities inside the water will be effected by the <a href="../main/mechanics.html#underwater_rules" target="_blank">Underwater Rules</a>.`,
                `This can be done only once on this Ability.`,
                `Once the Stance Ends, all the weter and <b>Soaked Effect</b> done by this Ability will be gone.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `On Dealing Damage, the Target gets Soaked with water.`,
                `This Effect Ends after the Entity uses a <b>Main-Action + Bonus-Action</b> to remove it.`,
                `It will also End if the Ability Ends.`,
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
                ["Stance Trigger", "Continuous"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "(2d8 × ESS) Physical"],
            ],
        },
    ],
}