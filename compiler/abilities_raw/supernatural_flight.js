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
                `You can Fly, why? Because this Ability says so.`,
                `You can do all movement things while not on the ground, and do the <b>Move-Action</b> and every other Movement in any direction, ignoring gravity.`,
                `If you wish you don't Fall, simply staying afloat, standing in the air or whatever, go out and aurafarm.`,
            ],
        },
        {
            type: "p",
            content: [
                `You do NOT have the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition</a> even while Flying.`,
                `You can still get the <b>Prone Condition</b>, imagined as a loss of balance.`,
                `While you have the <b>Prone or Staggered Condition, or are Sprinting</b>, you have the <b>Airborne Condition</b> if you are Flying.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaring</b> (<a href="natural_flight.html" target="_blank">Natural Flight</a>):`,
                `By using a <b>Main-Action</b> you start <a href="../main/mechanics.html#sprint" target="_blank">Sprinting</a>, and use a <b>Move-Action</b>.`,
                `This Sprinting is special in a way where even if you're Flying you don't get the <b>Airborne Condition</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Air Hop</b> (<a href="geppo.html" target="_blank">Geppo</a>):`,
                `By using a <b>Main-Action</b> you can End the <b>Prone Condition</b> from yourself, and use a <b>Move-Action</b>.`,
            ],
        },
    ],
}