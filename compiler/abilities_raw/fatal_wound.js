module.exports = {
    name: "Fatal Wound",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Physical Damage",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You imbue your Melee Attack with Fire.`,
                `On a Hit you inflict the <b>Wound Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Wound Effect:</b>`,
                `At the Start of the Caster's Next Turn the Target takes <box>(1d8 × ESS) Physical</box> <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Damage, with <box>10 × ESS</box> Armor-Pen.`,
                `This Effect Ends after Dealing Damage.`,
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
                ["Ability Cost", "(5 GRIT | 10 HD) × ESS"],
                ["Special Condition", "Melee"],
                ["Damage", "(1d8 × ESS) Physical"],
                ["Wound's-Pen", "10 × ESS"],
            ],
        },
    ],
}