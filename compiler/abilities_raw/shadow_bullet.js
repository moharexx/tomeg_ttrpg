module.exports = {
    name: "Shadow Bullet",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Anima | 10 Abjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Necrotic Damage, Debuff, Effect",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, fire a Single Target Projectile made of Shadow.`,
                `On Dealing Damage, the Target is inflicted with the <b>Darkness Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Darkness Effect:</b>`,
                `All Healing, Shielding, or BUFFERs the Target recives are Reduced by <box>8 × ESS</box>`,
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Necrotic Damage", "2d6 × ESS"],
                ["Support Reduction", "8 × ESS"],
            ],
        },
    ],
}