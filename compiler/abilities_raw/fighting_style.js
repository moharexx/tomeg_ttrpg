module.exports = {
    name: "Fighting Style",
    category: "passive",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "20 WILL | 20 Enchantment",
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 WILL | 20 Enchantment",
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Self, Buff",
    ],
    unlock_cost: 10,
    description: [
            {
            type: "p",
            content: [
                `When you use the <a target="_blank" href="../main/mechanics.html#switch_action">Switch-Action</a>, you can Simulate or Alter your Weapons and Shields.`,
                `The new Armaments can have up to their regular Max Property Points, and Tier equal to your ESS.`,
                `Simulated Armaments count as Natural, and Melee Weapons can use your Martial Arts Mastery.`,
                `If you Alter an Armament you're currently Wielding, the changes only last while Wielding it.`,
                `You can't Simulate Ranged and Thrown Weapons, and can't use the <b>Weapon Throw</b> Ability with Simulated Weapons.`,
            ],
        },
        {
            type: "p",
            content: [
                `This <b>Essence Enhance</b> can be used in more ways than just combat stats.`,
                `Everything you hold, carry, or wear can be much tougher and harder, from clothes, to tools, and more.`,
                `You can solidify cloth to hold its shape, or carry something flimsy without it falling apart, or even make the air around you viscous.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Finger Guns</b> (50 Martial Arts):`,
                `You can Simulate Ranged and Throw Weapons, and can use the <b>Weapon Throw</b> Ability with them.`,
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
                ["Duration", "Till Consciousness is lost"],
                ["Armament Tier", "ESS"],
            ],
        },
    ],
}