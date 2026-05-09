module.exports = {
    name: "Conscious Soul (WIP)",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "20 INT | 20 WILL | 20 EGO",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 INT | 20 WILL | 20 EGO",
    ],
    tags: [
        "Utility",
        "Buff",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `Your Soul is conscious, even without a Vessel.`,
                `This means you have Actions even when you are "Dead".`,
                `The base rule of 1 Minute (20 Rounds) for when your Soul naturally floats away after Death is removed.`,
                `The Soul can still get destroyed if <b>SP</b> goes below <box>-Max SP</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `As a <b>Free-Action</b> you can leave your current Vessel.`,
                `As a <b>Main-Action</b> you can possess a suitable Vessel.`,
            ],
        },
        {
            type: "p",
            content: [
                `Click here for more information about <a target="_blank" href="../main/mechanics.html#souls">Souls</a>.`,
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
                ["Soul Max HD", "Max SP"],
                ["Soul MS", "(Max SP)^(1/3)"],
            ],
        },
    ],
}