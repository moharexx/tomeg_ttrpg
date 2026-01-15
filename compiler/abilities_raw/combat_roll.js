module.exports = {
    name: "Combat Roll",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Acrobatics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Acrobatics",
    ],
    tags: [
        "Defense",
        "Negation, Self, Mobility",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When getting Targeted, you make a Combat Roll before the Attack, making the Attack potentionally miss.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Dodging Attacks with To-Hit:</b>",
                "If <box>Roll HD</box> is greater than <b>Attack's To-Hit</b>, you make the Combat Roll, and the Attack Misses.",
                "Otherwise the Attack comes out normally, and only <b>after</b> that you attempt to make the Roll.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Dodging Saves:</b>",
                "If <box>Roll HD</box> is greater than <box>Save Difficulty</box> then you make the Combat Roll.",
                "Otherwise you Fail, and only <b>after</b> being normally Targeted, you attempt to make the Combat Roll.",
                "If even after a Successful Combat Roll you would still be Targeted, then you are still Targeted as normal.",
                `<b>Example:</b> A <a href="../abilities/fireball.html">Fireball</a> is hurled at you, you Combat Roll with Success, but even after the Roll you are still in the AOE so you still get Targeted.`,
                `<b>Example:</b> Targeted by a Spell which requres Pinpoint, you Combat Roll with Success, behind cover, not being Targeted, wasting your Opponents Spell and Actions.`,
            ],
        },
        {
            type: "dots",
            content: [
                "Combat Roll's movement does not Activate Triggers.",
                "If you have a Movement Impairing Condition then Combat Roll Activates Triggers.",
                "You can Combat Roll on your Turns as an Active Ability, without the need for the Trigger.",
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
                ["Cast Time", "Bonus-Action"],
                ["Trigger", "Getting Targeted"],
                ["Range", "Self"],
                ["Roll HD", "2d10 × ESS"],
                ["Roll Distance", "MS / 2"],
            ],
        },
    ],
}