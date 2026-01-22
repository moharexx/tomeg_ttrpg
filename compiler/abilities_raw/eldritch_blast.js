module.exports = {
    name: "Eldritch Blast",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Abjuration)",
    ],
    tags: [
        "Offense, Unlock",
        "Ranged, Demat Damage, Projectile",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Projectile made of force.",
                "You can customize this spell with Unlocks.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Agonizing Blast</b> (20 Evocation, 5 XP):",
                "You can add your <box>CS / 2</box> to the Spells Damage.",
                "This makes this spells Cast Time bigger by a Bonus-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Distant Blast</b> (20 Divination, 5 XP):",
                "The Spells Range is <box>30 / 60 × CS^(1/3)</box>.",
                "This makes this spells Cast Time bigger by a Bonus-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Piercing Blast</b> (20 Abjuration, 5 XP):",
                "The Spell has <box>(10 × ESS) Demat-Pen</box>",
                "This makes this spells Cast Time bigger by a Bonus-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Critical Blast</b> (50 Enchantment, 10 XP):",
                "You can Increase the Spells CRIT Range by <box>1</box> for <box>5 × ESS</box> SP Cost.",
                "The Max SP you can Send is <box>10 × ESS</box>",
                "This can be Applied even after the Attack's Roll.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Tormentor's Blast</b> (50 Anima, 10 XP):",
                "You can use the Ability as a Stance, with a Free-Action Trigger on your Next Turn.",
                "The Blast will be shot out at the Stance Trigger.",
                "After Hitting a Target, the Hit will be repeated at the Start of Your Next Turn, along with all of it's On-Attacks.",
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Eldritch Smite</b> (50 Melee Weapon | 50 Martial Arts, 10 XP):",
                "The Ability becomes a Melee Attack with <box>Melee Reach</box> and it's Damage is <box>(2d6 × ESS) Demat</box>",
                "If <b>Distant Blast</b> is Active: Reach is Increased by <box>CS^(1/3)</box>",
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
                ["Finalized To-Hit Bonus", "5 × ESS"],
                ["Damage", "(1d10 × ESS) Demat"],
            ],
        },
    ],
}