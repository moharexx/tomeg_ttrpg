module.exports = {
    name: "Seismic Dominion",
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
                `Within Range, in a choosen Sphere the air becomes dusty, and small rocks will start to from.`,
                `When using this Ability, you are put in <b>Seismic Dominion Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you can Double it's </b>Armor-Pen</b>.`,
                `This can be done only once on this Ability.`,
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
                ["Damage", "(2d6 × ESS) Physical"],
                ["Armor-Pen", "5 × ESS"],
            ],
        },
    ],
}