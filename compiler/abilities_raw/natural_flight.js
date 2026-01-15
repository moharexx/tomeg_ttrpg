module.exports = {
    name: "Natural Flight",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "Wings or similar",
    ],
    reqs_full: [
        "Wings or similar",
    ],
    tags: [
        "Utility",
        "Mobility",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You can Fly with some physical thing, like wings, propellers, ect...`,
                `You can do all movement things while not on the ground, and do the Move-Action and every other Movement in any direction, ignoring gravity.`,
                `You can choose to not Fall, remaining in the air.`,
            ],
        },
        {
            type: "p",
            content: [
                `You have the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition</a> when Flying with this Ability.`,
                `You can still get the <b>Prone Condition</b>, imagined as a loss of balance.`,
                `While you have <b>0 MS</b> or if you cannot take Actions this Ability is Disabled.`,
            ],
        },
    ],
}