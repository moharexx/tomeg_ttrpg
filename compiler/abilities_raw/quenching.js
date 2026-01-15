module.exports = {
    name: "Quenching",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Fire Bolt, Cold Ray",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), Fire Bolt, Cold Ray",
    ],
    tags: [
        "Offense",
        "Heat+Cold+Thunder Damage, Projectile",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire two Rays, one of Heat, and one of Cold.",
                "Shoot out a Ray of <box>Heat</box> and <box>Cold</box>, order interchangable.",
                "The two Attacks can have Different Targets.",
                "Using On-Attacks will Apply to both Attacks of this Ability.",
                "Both Attacks use the Same d10 Check.",
            ],
        },
        {
            type: "list",
            content: [
                "Shatter:",
                "Hitting both Attacks against a Construct Deals Extra <box>1d10 × ESS Thunder Damage</box>",
                "Only if the Construct is made of Mineral, Crystal, Glass or a similar material.",
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Damage", "(1d10 × ESS) Heat, Cold"],
            ],
        },
    ],
}