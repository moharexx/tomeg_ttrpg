module.exports = {
    name: "Psychic Locus",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Anima | 10 Abjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Soul Save, Psychic Damage, Effect",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere gets filled with colorful, opaque, unrecognizable patterns.`,
                `When using this Ability, you are put in <b>Psychic Locus Stance</b>.`,
                `When Entering this Stance and in your subsequent Turns, Entities in the Radius must Succeed a <b>Soul Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `For the rest of the Stance's Duration, Damaged Targets get the <b>Charmed Effect</b>.`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>Charmed Effect:</b>`,
                `Targets make <b>Soul Saves</b> with Disadvantage.`,
                `This Effect Ends at the End of Casters Next Turn.`,
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
                ["Soul Save", "8 × ESS"],
                ["Psychic Damage", "1d10 × ESS"],
            ],
        },
    ],
}