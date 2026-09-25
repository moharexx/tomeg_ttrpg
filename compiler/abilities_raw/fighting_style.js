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
                `You can use this Ability when making the <a target="_blank" href="../main/mechanics.html#switch_action">Switch-Action</a>, allowing you to change your Weapons.`,
                `You can either Simulate Weapons and Shields, or change the ones you're Wielding.`,
                `The new Armaments can have up to their regular Max Property Points, and Tier equal to your ESS.`,
                `Simulated Armaments count as Natural, and can use your Martial Arts Mastery.`,
                `If you change an Armament you're currently Wielding, the changes only last while Wielding it.`,
                `You can't Simulate Ranged and Thrown Weapons, and can't use the <b>Weapon Throw</b> Ability with Simulated Weapons.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Finger Guns</b> (50 Martial Arts, 20 XP):`,
                `You can Simulate Ranged and Throw Weapons, and can use the <b>Weapon Throw</b> Ability.`,
                `The Reload and Slow-Reload Property separately retain their state between Weapon Switches.`,
                `For Throwing a Simulated Weapon you make the Ranged Attack as normal, and your Weapon remains Wielded.`,
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
                ["Cast Time", "Same as Switch-Action (Counts as Switch-Action)"],
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Armament Tier", "ESS"],
            ],
        },
    ],
}