module.exports = {
    name: "Out Of My Way!",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Athletics | Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:<b> 10 Athletics | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Self, Mobility, Crowd Control",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Out Of My Way! Stance.</b>`,
                `While in <b>Out Of My Way! Stance</b>, you can use the active part of <a href="../mechanics/pass_through.html">Pass Through</a> as a Free-Action.`,
                `While in <b>Out Of My Way! Stance</b>, you can use your <box><b>Full</b> Athletics Modifier</box> for the <b>Save Dificulty.</b>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>On Stance Trigger:</b>`,
                `Till the End of Your Turn, you gain the Benefits below.`,
                `You attempt a <a href="../mechanics/shove.html">Shove</a> on any Entity you <a href="../mechanics/pass_through.html">Pass Through</a>.`,
                `Once, as a Free-Action, you can move up to <box>MS / 2</box>`,
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
                ["Stance Trigger", "Bonus-Action"],
            ],
        },
    ],
}