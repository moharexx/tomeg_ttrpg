module.exports = {
    name: "T-Highjump",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Athletics",
    ],
    reqs_full: [
        "10 Athletics",
    ],
    tags: [
        "Utility",
        "Mobility",
        "Main-Action, GRIT",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You can Spend GRIT to Highjump great distances.`,
                `You cannot use this Ability while <a href="../main/mechanics.html#conditions">Airborne</a>.`,
                `When you use T-Highjump you can choose to not Fall after the Turn you used it in.`,
                `This movement can go sideways, it doesn't necessarily need to be upwards.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>T-Jump Maneuvers</b> (Any Flight Ability):`,
                `You can T-Highjump while Airborne, and the Ability's Movement can curve.`,
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
                ["Ability Cost", "5 GRIT × ESS"],
                ["Max Jump Height", "12 × ESS^(1/3)"],
            ],
        },
    ],
}