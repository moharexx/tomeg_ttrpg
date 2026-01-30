module.exports = {
    name: "Olympic Athlete",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Athletics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics",
    ],
    tags: [
        "Utility",
        "Mobility, Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `From Swimming and Climbing you have no Movement Penalties.`,
                `Negates the Disadvantage for Melee Attacks made underwater. (Or in any liquid...)`,
                `Additionally when Swimming or Climbing you need not make a d10 Check, assume you Rolled a 10.`,
            ],
        },
    ],
}