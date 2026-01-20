module.exports = {
    name: "Feedbacker",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Melee, Negation",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you attempt to Redirect a Single Target Attack made against you.`,
                `Make a Melee Attack against your Attacker's Attack, if your Attack's To-Hit is greater than the Incoming Attack's, you Successfully Feedback it.`,
                `This means not getting Hit by the Attack, as you Redirect it towards another Target.`,
                `The Redirected Attack's To-Hit is the same as what you Rolled for this Ability.`,
                `The Range of the Redirected Attack is the same, but reset, as if the Attack was freshly made from your Position.`,
                `If the Feedback Failed, then you are <b>Hit</b>, and you don't Redirect the Attack.`,
            ],
        },
        {
            type: "dots",
            content: [
                `On a Successfully Feedback, you can put <b>On-Attacks</b> on the Redirect Attack.`,
                `Even if you CRIT, that won't make the Redirected Attack into a CRIT.`,
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
                ["Trigger", "Getting Targeted by a Single Target Attack"],
            ],
        },
    ],
}