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
                `With this Ability you can make your body act like Melee Weapons and Shields, creating Simulated <b>Natural</b> Weapons.`,
                `Simulated Weapons can have Max Property Points, and must be Wielded like any other Weapon.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you use the <a href="../main/mechanics.html#switch_action" target="_blank">Switch-Action</a>, you can change the Simulated Armaments.`,
                `Casting this Ability counts as a Switch-Action, and Costs a Bonus-Action if Switch-Action is a Bonus-Action.`,
                `Simulated Melee Weapons cannot have the Throw Property, and cannot use the <a href="weapon_throw.html">Weapon Throw</a> Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Finger Guns</b> (50 Martial Arts, 20 XP):`,
                `You can Simulate Ranged and Throw Weapons, and can use the <b>Weapon Throw</b> Ability.`,
                `The Reload and Slow-Reload Property separately retain their state between Weapon Switches.`,
                `For Throwing you make the Ranged Attack as normal, and your Weapon remains Wielded.`,
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
                ["Cast Time", "Same as Switch-Action"],
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Simulated Item Tier", "ESS"],
            ],
        },
    ],
}