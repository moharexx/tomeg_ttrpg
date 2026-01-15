module.exports = {
    name: "Incredible Defense",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 STR | 10 AGI",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 STR | 10 AGI",
    ],
    tags: [
        "Defense",
        "Negation",
        "Bonus-Action, GRIT | HD",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You Spend either <b>GRIT</b> or <b>HD</b> to use the <a href="../main/mechanics.html#defense_action" target="_blank">Defense-Action</a> as a <b>Bonus-Action.</b>`,
                `For the purposes of Abilites, Shields, and other Actions, treat as if you used the <b>Defense-Action</b> as a <b>Main-Action.</b>`,
                `The <b>ESS</b> you Cast this Ability at is <box>Total XP / 100</box>, and if somehow it's less, the Ability Fails.`,
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
            ],
        },
    ],
}