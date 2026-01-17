module.exports = {
    name: "Conga Line",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Anima | 10 Enchantment | 20 Abjuration)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Enchantment | 20 Abjuration)",
    ],
    tags: [
        "Utility",
        "Necrotic Damage, Static Special AOE",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Conga Line Stance</b>.`,
                `While in <b>Conga Line Stance</b>, When moving you leave <b>Self Clones</b> behind Yourself.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Self Clones:</b>`,
                `Self Clones is a Static Special AOE, it has the same Height and Width as you.`,
                `Self Clones Lenght is it's Parent Movements Lenght.`,
                `The Self Clones lasts until the End of The Next Turn they have been created on.`,
                `Entities Starting and Ending Their Turn in the AOE must make a <b>VIT Save</b> of <box>12 × ESS<box> or take Damage.`,
                `Entities moving through the AOE also must make a <b>VIT Save</b> or take Damage.`,
                `Self Clones does not Stack, and the Strongest one will be in Effect.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Stance Trigger", "None"],
                ["Height and Width", "same as Casters"],
                ["Lenght", "Parent Movements Lenght"],
                ["VIT Save", "12 × ESS"],
                ["Damage", "(6 × ESS) Necrotic"],
            ],
        },
    ],
}