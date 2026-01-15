module.exports = {
    name: "Spatial Backtrack",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 50 EGO), (10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Utility",
        "Self, Soul Save, Mobility",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you save your current position, and can return to it later.`,
                `As a <b>Bonus-Action</b> you can Recast to teleport back to the saved position.`,
                `You can choose additional Targets, if they are <b>Pinpointed</b>, are in Backtrack Radius, and their combined mass is not more than <b>Max Mass.</b>`,
                `Unwilling Targets can make a <b>Soul Save</b> to not be Teleported.`,
            ],
        },
        {
            type: "dots",
            content: [
                `You can only have 1 Spatial Backtrack at a time!`,
                `If you walk out of Backtrack's Range then the Ability Ends.`,
                `If the saved position is somehow blocked, like being in solid ground, then the Recast Fails.`,
                `This Ability's Movement does NOT Break Stances.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Multiple Backtrack</b> (20 Anima):`,
                `You can have multiple Spatial Backtracks.`,
                `For each Spatial Backtrack after the first, you must supply <b>10 × ESS</b> Proxy.`,
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
                ["Recast Time", "Bonus-Action"],
                ["Range", "Self"],
                ["Backtract Range", "100 × ESS^(1/3)"],
                ["Backtract Radius", "ESS^(1/3)"],
                ["Soul Save", "6 × ESS"],
                ["Max Mass", "10Kg × ESS"],
            ],
        },
    ],
}