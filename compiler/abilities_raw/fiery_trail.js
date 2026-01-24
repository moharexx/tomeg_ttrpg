module.exports = {
    name: "Fiery Trail (unfinished)",
    category: "on_attack",
    type: [
        "Skill",
        "Spell",
        "(Mobility)",
    ],
    reqs_short: [
        "50 Acrobatics",
        "10 CS, (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Acrobatics",
        "<b>Spell:</b> 10 CS, (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Static Special AOE",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you leave a trail of fire behing yourself.`,
                `When moving you leave <b>Fiery Trail</b> behind Yourself.`,
                `On AOE Abilities that move you, you leave <b>Fiery Trail</b> in the AOE of the Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Fiery Trail:</b>`,
                `Fiery Trail is a Static Special AOE, it has the same Height and Width as you.`,
                `Fiery Trails Lenght is it's Parent Movements Lenght.`,
                `The Fiery Trail lasts for <box>1 Minute (20 Rounds)</box>`,
                `Entities Standing in the AOE take <box>1d12 × ESS</box> Heat Damage.`,
                `Fiery Trail does not Stack, and the Strongest one will be in Effect.`,
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
                ["Height and Width", "same as Casters"],
                ["Lenght", "Parent Movements Lenght"],
                ["Damage", "(1d12 × ESS) Heat"],
            ],
        },
    ],
}