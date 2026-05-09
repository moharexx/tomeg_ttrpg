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
        "Self, Negation, Mobility",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You quickly roll out of danger, potentionally dodging an Attack.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Dodging Attacks:</b>`,
                `Roll <box>Roll HD</box> against the <b>To-Hit</b> of the Attack, if you Roll at least equal you Succeed, and the Attack Misses.`,
                `Otherwise the Attack comes out normally, <b>after</b> that you can still Roll the distance if you want.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Dodging Saves:</b>`,
                `Roll <box>Roll HD</box> against the <b>Save Difficulty</b> of the Save, if you Roll at least equal you Succeed.`,
                `Success doesn't mean you instantly dodge the Save, rather you are allowed to make the Combat Roll and then determine if you're still being Targeted.`,
                `If you Fail, <b>after</b> being Targeted normally, you can still Roll the distance if you want.`,
                `<b>Example:</b> Targeted by a Spell which requres Pinpoint, you Combat Roll with Success, behind cover, the Caster can't Pinpoint you, wasting your Opponent's Spell.`,
                `<b>Example:</b> A <a target="_blank" href="../abilities/fireball.html">Fireball</a> is hurled at you, you Combat Roll with Success, after the Roll you are still in the AOE so you still get Targeted.`,
            ],
        },
        {
            type: "p",
            content: [
                `Combat Roll's movement doesn't Activate Triggers.`,
                `You can Combat Roll on your Turns as if it was an Active Ability, without the need for the Trigger.`,
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
                ["Roll HD", "(1d10 + 6) × ESS"],
                ["Roll Distance", "MS / 2"],
            ],
        },
    ],
}