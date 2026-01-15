module.exports = {
    name: "Supernatural Flight",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "2000 Total XP",
    ],
    reqs_full: [
        "<b>Innate:</b> 2000 Total XP",
    ],
    tags: [
        "Utility",
        "Mobility",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                "You can Fly, why? Because this Ability says so.",
                "You can do all movement things while not on the ground, and do the Move-Action and every other Movement in any direction, ignoring gravity.",
                "If you wish you don't Fall, simply staying afloat, standing in the air or whatever, go out and aurafarm.",
            ],
        },
        {
            type: "p",
            content: [
                `You are NOT considered as <a href="../main/mechanics.html#conditions" target="_blank">Airborne</a> for any Condition interaction.`,
                `You can still get the <b>Prone Condition</b>, imagined as a loss of balance.`,
                `While you have the <b>Prone or Staggered Condition, or are Sprinting</b>, you CAN have the <b>Airborne Condition!</b>`,
            ],
        },
    ],
}