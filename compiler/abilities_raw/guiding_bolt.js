module.exports = {
    name: "Guiding Bolt",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Divination | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Enchantment | 10 Divination | 20 Evocation)",
    ],
    tags: [
        "Offense, Utility",
        "Radiant Damage, Projectile, To-Hit",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You create an orb of Light, which you shoot at an Entity.",
                "This is a Single Target Projectile which inflicts the <b>Light Effect</b> on Hit.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Light Effect:</b>",
                "The Target glows, revealing the Target in Darkness, and Invisibility.",
                "The Next Attack against the Target has <box>5 × ESS</box> Bonus To-Hit, and adds Bonus On-Hit Damage equal to this Ability's.",
                "This Effect Ends at the Start of Your Next Turn, or when the Target is Hit.",
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
                ["Damage", "(4 × ESS) Radiant"],
                ["Light Effect To-Hit Bonus", "5 × ESS"],
            ],
        },
    ],
}