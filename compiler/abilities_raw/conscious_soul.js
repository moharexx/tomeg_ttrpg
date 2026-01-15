module.exports = {
    name: "Conscious Soul",
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
                "Your Soul is conscious, even without a body.",
                `This means you have Actions even when you are "Dead".`,
                "The base rule of 1 Minute for when your Soul naturally floats away after Death is removed.",
                "If <b>SP</b> goes below <box>-Max SP</box>, the Soul is Destroyed!",
            ],
        },
        {
            type: "p",
            content: [
                "The Soul is a non-corporeal thing, and can fly.",
                "The Soul cannot use regular Senses to Pinpoint, but can still kinda use them.",
                "The Soul cannot use Skill Type Abilities.",
                "The Soul uses Abilities at 1/10 ESS.",
                "The Soul can use a Main-Action to possess a suitable Body, which has no Soul already in it.",
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