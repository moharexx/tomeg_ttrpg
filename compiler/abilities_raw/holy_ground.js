module.exports = {
    name: "Holy Ground",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Anima | 10 Enchantment | 20 Evocation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Radiant Damage, VIT Save",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere secrade light starts to emanate.`,
                `When using this Ability, you are put in <b>Holy Ground Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
                `Within the Radius of this Ability <a href="../main/mechanics.html#lighting" target="_blank">Bright-Light</a> is emitted, and <b>Low-Light</b> in double the Radius, both the Bright and Low-Light are a Static AOE.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you can choose which Entities are Targeted by this Ability.`,
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
                ["Damage", "(1d10 × ESS) Radiant"],
            ],
        },
    ],
}