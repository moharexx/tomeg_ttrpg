module.exports = {
    name: "Glacial Storm",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Abjuration | 10 Evocation | 20 Transmutation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Abjuration | 10 Evocation | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, VIT Save, Cold Damage, Crowd Control",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, around a chosen point, the temperature drops, snow and ice grows and swirls.`,
                `When using this Ability, you are put in <b>Glacial Storm Stance</b>.`,
                `When Entering this Stance and in your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
                `Targets Damaged by this Ability get the <b>Cold Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `For the rest of the Stance's Duration, its Radius is Doubled.`,
                `This feature can't Stack.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Cold Effect:</b>`,
                `The Target's MS is reduced by <box>CS^(1/3)</box>`,
                `Slow Strength is Doubled against Soaked Targets.`,
                `Targets reduced to 0 MS have the <a href="../main/mechanics.html#conditions">Rooted Condition</a>.`,
                `The <b>Cold Effect</b> Ends at the End of Target's Next Turn.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Stance Trigger", "None"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Cold Damage", "1d8 × ESS"],
                ["Slow Strength", "CS^(1/3)"],
            ],
        },
    ],
}