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
        "Ranged, Static Sphere AOE, Psychic Damage, VIT Save, Effect",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere the air becomes dusty, and small rocks will start to from.`,
                `When using this Ability, you are put in <b>Psychic Locus Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>Soul Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you can now inflict Damaged Entities with the <b>Charmed Effect</b>.`,
                `This can be done only once on this Ability.`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>Charmed Effect:</b>`,
                `The Charmed Target makes <b>Soul Save's</b> with Disadvantage.`,
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
                ["Stance Trigger", "Continuous"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["Soul Save", "8 × ESS"],
                ["Damage", "(2d6 × ESS) Psychic"],
            ],
        },
    ],
}