module.exports = {
    name: "Swoon",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Weapon Damage, VIT Save, Debuff, Executing",
        "Main-Action + Bonus-Action, GRIT",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you make a Melee Attacks against a Target.`,
                `If the Target gets 0 or less HP from this Attack, the Target must make a <b>VIT Save</b> of <box>10 × ESS</box> or get the <a href="../main/mechanics.html#conditions" target="_blank">Unconscious Condition</a>.`,
                `The Unconscious Condition lasts until the End of a <a href="../main/mechanics.html#resting" target="_blank">Short-Rest</a>.`,
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing.</a>`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Ability Cost", "5 GRIT × ESS"],
                ["Damage", "(1d12 × ESS) Weapon Damage"],
            ],
        },
    ],
}