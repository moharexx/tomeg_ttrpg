module.exports = {
    name: "Lightning Blazer",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Heat and Electric Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire Two Blazing Lightnings Projectile, in a straight Line.",
                "Both Projectiles deal both Heat and Electric Damage.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Electric Effect:</b>",
                `Against Airborn Targets this Ability Deals <a href="../main/mechanics.html#max_value">Maximalized</a> Damage.`,
            ],
        },
                {
            type: "list",
            content: [
                "<b>Heat Effect:</b>",
                "Against Entities Wet with Water, this Ability Deals <b>Half-Damage.</b>",
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
                ["To-Hit Divisor", "2"],
                ["Damage per Projectile", "(1d6 × ESS) Heat + (1d6 × ESS) Electric"],
            ],
        },
    ],
}