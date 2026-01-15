module.exports = {
    name: "Blood Spear",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "20 Martial Arts",
        "5 Transmutation | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts",
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Flow Line AOE, Executing",
        "Main-Action, REST-HP",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Spear made of Blood, in a straight Line.",
                "This is a Flow Line AOE Ranged Attack, flowing out from the Caster.",
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing.</a>`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Soaked Effect:</b>",
                `On a Hit, the Target gets Soaked with "water".`,
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
                ["Ability Cost", "(10 REST-HP) × ESS"],
                ["Line Length", "6 × (STR | CS)^(1/3)"],
                ["Line Width", "(STR | CS)^(1/3) / 2"],
                ["Damage", "(2d8 × ESS) Physical"],
            ],
        },
    ],
}