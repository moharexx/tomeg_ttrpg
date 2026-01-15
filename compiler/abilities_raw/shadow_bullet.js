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
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Necrotic Damage, Debuff",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of Shadow.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Darkness Effect:</b>",
                "On Dealing Damage, all Healing, Shielding, and TEMP-HP they recieve until the End of their Next Turn is Reduced.",
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
                ["Damage", "(2d4 × ESS) Necrotic"],
                ["Reductions", "6 × ESS"],
            ],
        },
    ],
}