module.exports = {
    name: "Parry",
    category: "active",
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
        "Defense",
        "Negation, Debuff",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You ready yourself to Parry a single incoming Attack.`,
                `Till the End of your Next Turn, if there is an incoming Attack or Save, you can try to Parry it.`,
                `Roll <box>Parry Strength</box> against the <b>Pre-Mitigated</b> Damage, you need to Roll at least equal for a Success.`,
                `<b>On a Success;</b> you fully Negate the Attack from yourself, with all of its effects, and block the Flow of AOEs.`,
                `<b>On a Failed;</b> you are Hit by the Attack, or if it was a Save you Fail it.`,
            ],
        },
        {
            type: "p",
            content: [
                `Parry can only be used against Attacks and Saves with Damage, Hybrid Damage's weight (HP + SP) isn't doubled, Multi-Type Damages get added together.`,
                `If the Attack you Parried was Melee, the Target gains the <a target="_blank" href="../main/mechanics.html#conditions">Staggered Condition</a>.`,
                `You can use the Parry Ability multiple times, when you do so you can Parry that amount of different Attacks.`,
                `This Ability can CRIT for 2× Parry Strength, the CRIT determining Dice is the same d10 used in Parry Strength, <b><i>PARRY THE HEAVENS!!<i></b>`,
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
                ["Duration", "Till the End of your Next Turn."],
                ["Parry Strength", "(1d10 + 6) × ESS"],
            ],
        },
    ],
}