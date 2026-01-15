module.exports = {
    name: "Fighting Style",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Self, Buff",
        "Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When this Ability is used, you can count your body as any Natural Melee Weapon and Shield.",
                "This Ability cannot get over the Property Point Maximum, and cannot be Impossible to normally Wield.",
                "The Ability Ends when the Caster loses Consciousness.",
            ],
        },
        {
            type: "dots",
            content: [
                `When you use the <a href="../main/mechanics.html#switch_weapon" target="_blank">Switch Weapon Action</a>, you can change the Simulated Armaments.`,
                "Casting this Ability counts as a Switch Weapon Action, and becomes a Bonus-Action if Switch Weapon is a Bonus-Action.",
                "Simulated Melee Weapons cannot have the Throw Property.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Finger Guns</b> (50 Martial Arts, 20 XP):",
                "You can Simulate Ranged Weapons, these count as Natural Ranged Weapons.",
                `The Reload and Slow-Reload Property separately retain their state between Weapon Switches.`,
                "Simulated Melee Weapons can now have the Throw Property.",
                "The Throw Property is treated differently, you can simply make Ranged Attacks (still using STR) with it.",
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
                ["Cast Time", "Free-Action"],
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Simulated Item Tier", "ESS"],
            ],
        },
    ],
}