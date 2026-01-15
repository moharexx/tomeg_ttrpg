module.exports = {
    name: "Glacial Storm",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Evocation | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 DES), (5 Abjuration | 10 Evocation | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Cold Damage, Static Sphere AOE, Crowd Control",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "Within Range, in a choosen Sphere the temperature drops, snow and ice starts to appear, in the air and on objects.",
                "When using this Ability, you are put in <b>Glacial Storm Stance.</b>",
                "When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.",
                "Entities Damaged by this Ability get the <b>Cold Effect.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>On Stance Trigger:</b>",
                "You can Double it's </b>Radius</b>",
                "This can be done only once on this Ability.",
                "This Stance does NOT Break when you Trigger it.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                "The Target's MS is reduced by <box>CS^(1/3)</box>",
                "Slow Strength is Doubled against Soaked Targets.",
                `Targets reduced to 0 MS count as <a href="../main/mechanics.html#conditions">Rooted.</a>`,
                "The <b>Cold Effect</b> Ends at the End of Target's Next Turn.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering another Stance.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>Egg champion</i>`,
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
                ["Stance Trigger", "Main-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "(1d12 × ESS) Cold"],
                ["Slow Strength", "CS^(1/3)"],
            ],
        },
    ],
}