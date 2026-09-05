module.exports = {
    name: "Blood Saw",
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
        "<b>Spell:</b> 10 CS, (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Offense",
        "Melee, Flow Rectangle AOE, Physical Damage, Executing",
        "Main-Action, REST-HP",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you Create a Saw out of your Blood.`,
                `This is a Flow Rectangle AOE Melee Attack, the AOE Flows down its Width, from one edge to the other.`,
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing</a>.`,
                `Targets Damaged by this Ability get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "dots",
            content: [
                `You place down this AOE to where it's center is at max <box>ESS^(1/3)</box> meters away from you.`,
                `If the Attack's Damage is reduced to 0, the Rectangle's AOE Stops at that Target.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `An Entity can use a <b>Main-Action</b> to Remove this Effect from themselves.`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>"i was hungry"</i>`,
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
                ["Rectangle Length and Height", "ESS^(1/3)"],
                ["Rectangle Width", "3 × ESS^(1/3)"],
                ["Physical Damage", "2d6 × ESS"],
            ],
        },
    ],
}