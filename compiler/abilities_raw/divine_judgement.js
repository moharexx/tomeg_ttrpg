module.exports = {
    name: "Divine Judgement",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Radiant Damage, Healing",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `A circle appears under the Target Entity, which after Divine pillar smites them.`,
                `You get Healed equal to Damage Dealt.`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>Natz Judgement</i>`,
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
                ["Range", "5 × CS^(1/3)"],
                ["To-Hit Bonus", "5 × ESS"],
                ["Radiant Damage", "1d10 × ESS"],
            ],
        },
    ],
}