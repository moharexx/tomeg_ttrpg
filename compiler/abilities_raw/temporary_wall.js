module.exports = {
    name: "Temporary Wall",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Ranged, Static Disc AOE",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Temporary Wall Stance</b>.`,
                `When you Enter this Stance, you create a Disc shaped, thin Wall made of a light pseudo material.`,
                `Additionally while in this Stance, you can use a <b>Bonus-Action</b> to create/recreate this Wall.`,
                `The Wall lasts till you're in the Stance, or it's Destroyed, and you cannot have more than one Wall at a time.`,
                `If the Wall is created in a position where it's clipping into something, then the Wall will be stuck to that thing.`,
            ]
        },
        {
            type: "p",
            content: [
                `When you Create a Wall you decide the Wall's position, rotation, and if it's transparent or not.`,
                `The Wall can either be anchored to a fixed position or a position relative to you.`,
                `To change the Position of the Wall you must use a <b>Bonus-Action</b> to recreate it.`,
                `When the Wall is positioned relative to you and right under you, you can walk in the air with it.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Wall has a Static STR Save of <box>20 × ESS</box> for interactions. (For stopping <a href="../main/mechanics.html#pass_through" target="_blank">Pass Through<a>, and such...)`,
                `The Caster can make the <a href="../main/mechanics.html#shove" target="_blank">Shove</a> and <b>Pass Through</b> Actions with the Wall, for these purposes the Wall's Effective STR is <box>20 × ESS</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Range", "2 × CS^(1/3)"],
                ["Disc Radius", "ESS^(1/3)"],
                ["Wall HP", "15 × ESS"],
            ],
        },
    ],
}