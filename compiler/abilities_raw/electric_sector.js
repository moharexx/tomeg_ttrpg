module.exports = {
    name: "Electric Sector",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Electric Damage, VIT Save",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere the electric charge increases, sparkles and bolts of electricity start to appear.`,
                `When using this Ability, you are put in <b>Electric Sector Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `You increase the </b>Damage</b> to <box>1d12 × ESS</box> until the Stance Ends.`,
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
                ["Electric Damage", "1d8 × ESS"],
            ],
        },
    ],
}