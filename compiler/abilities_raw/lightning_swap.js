module.exports = {
    name: "Lightning Swap",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    tags: [
        "Utility",
        "Action Economy",
        "Free-Action, GRIT | HD",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You spend either <b>GRIT</b> or <b>HD</b> to use <a href="../main/mechanics.html#switch_weapon" target="_blank">Switch-Weapon</a> or <a href="../main/mechanics.html#interact" target="_blank">Interact-Action</a> as a <b>Free-Action.</b>`,
                `For the purposes of Abilites and other Actions treat as if you used the <b>Switch-Action</b> or <b>Interact-Action</b> as a <b>Main-Action.</b>`,
                `The <b>ESS</b> you Cast this Ability at is <box>Total XP / 100</box>, and if somehow it's less, the Ability Fails.`,
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Free-Action"],
                ["Ability Cost", "(5 GRIT | 10 HD) × ESS"],
            ],
        },
    ],
}