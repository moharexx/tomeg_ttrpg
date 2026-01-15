module.exports = {
    name: "Entangle",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Abjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 DES), (5 Conjuration | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Utility",
        "Static Cube AOE, Crowd Control",
        "Main-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "Within Range, in a choosen Cube, vines and roots grow out, entangling everything in the area.",
                "When using this Ability, you are put in <b>Entangle Stance.</b>",
                "Entities at the Start of their Turn Inside the Area must make a <b>STR Save</b> or get Slowed until the Start of the Casters Next Turn.",
                "If the <b>STR Save</b> was Successful, the Slowed is Halved.",
            ],
        },
        {
            type: "dots",
            content: [
                `Targets reduced to 0 MS count as <a href="../main/mechanics.html#conditions" target="_blank">Rooted.</a>`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering another Stance.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "None"],
                ["Range", "10 × CS^(1/3)"],
                ["Cube Side Length", "2 × CS^(1/3)"],
                ["STR Save", "8 × ESS"],
                ["Slow Strength", "2 × CS^(1/3)"],
            ],
        },
    ],
}