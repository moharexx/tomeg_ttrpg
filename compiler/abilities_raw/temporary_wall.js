module.exports = {
    name: "Temporary Wall (unfinished)",
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
        "Ranged, Static Line AOE",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>temporary wall Stance</b>.`,
                `When you Enter, you are put in <b>temporary wall Stance</b>, you create a Wall made of a light pseudo material.`,
                `You decide the Wall's position, rotation, and if it's transparent or not.`,
                `The Wall can either be anchored to a position or it stays in the same position relative to you.`,
                `While in this Stance, the Stance's Cast Time is a <b>Bonus-Action</b>.`,
                `For Entities that try to <a href="../main/mechanics.html#pass_through" target="_blank">Pass Through<a> the wall, the wall has <box>20 × ESS STR</box>.`,
                `The Wall has the same <b>Pass Through</b> Check as its Caster when the Caster uses <b>Pass Through</b> or when the Wall is trying to use it.`,
                `The Caster can <a href="../main/mechanics.html#shove" target="_blank">Shove</a> Entities with the Wall as A <b>Bonus-Action</b>.`,
            ]
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
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
                ["Line Length", "ESS^(1/3) / 4"],
                ["Line Width", "ESS^(1/3)"],
                ["Wall HP", "15 × ESS"],
                ["Wall Weight", "10 × ESS Kg"],
            ],
        },
    ],
}