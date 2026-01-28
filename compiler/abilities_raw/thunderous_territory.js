module.exports = {
    name: "Thunderous Territory",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Evocation | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Thunder Damage, VIT Save",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere the air becomes dusty, and small rocks will start to from.`,
                `When using this Ability, you are put in <b>Thunderous Territory Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, and at the Start of your subsequent Turns, you can reposition this Ability within Range.`,
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
                ["Radius", "2 × CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "(2d4 × ESS) Thunder"],
            ],
        },
    ],
}