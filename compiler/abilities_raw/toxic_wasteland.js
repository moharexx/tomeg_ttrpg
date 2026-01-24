module.exports = {
    name: "Toxic Wasteland",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Bio Damage, VIT Save, Executing",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere noxious gas appear which rots Entities.`,
                `When using this Ability, you are put in <b>Toxic Wasteland Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you can add <a href="../main/mechanics.html#executing" target="_blank">Executing</a> to this Ability.`,
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
                ["VIT Save", "10 × ESS"],
                ["Damage", "(2d6 × ESS) Bio"],
            ],
        },
    ],
}