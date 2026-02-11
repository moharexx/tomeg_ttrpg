module.exports = {
    name: "Voyage",
    category: "stance",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "1000 STR | 1000 AGI",
        "1000 CS, (200 Enchantment | 1000 Evocation | 1000 Transmutation)",
    ],
    reqs_full: [
        "<b>Skill:</b> 1000 STR | 1000 AGI",
        "<b>Spell:</b> 1000 CS, (200 Enchantment | 1000 Evocation | 1000 Transmutation)",
    ],
    tags: [
        "Utility",
        "Mobility, Travel",
        "1 Minute / Continuous",
    ],
    unlock_cost: 1000,
    description: [
        {
            type: "p",
            content: [
                `<i><b>The Warp Drive of the Tömegpokalipszis.</b></i>`,
                `When using this Ability, you choose a direction and enter <b>Voyage Stance.</b>`,
                `While in <b>Voyage Stance</b> you fly at high speeds, freely accelerating and decelerating, but with slow turning speed (60° per Round).`,
                `Kinetic energy is much lower than physics would deem, and is harmless (compared to the caster's level).`,
                `Hitting an obstacle you can't smash through (up to GM) will Break the Stance.`,
                `Carrying more than <box>50 × ESS Kg</box> will Break the Stance.`,
            ],
        },
        {
            type: "p",
            content: [
                `This Ability's Distance, like other Travel Abilities, scale linearly, and don't have a cube root in them.`,
                `Travel Abilities have an Effective ESS Cap on their Distance related Stats.`,
                `This Cap is based on the Omniverse's Essence Permeability (EP) and Dimensional Permeability (DP).`,
                `<b>Effective Essence Cap on Voyage Speed:<b> <box>(EP)^(1/DP)</box> (<b>~2e28</b> assuming EP is 1e85 and DP is 3)`,
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["40%", "60%"],
            content: [
                ["Condition", "Max Speed (3× to get m/Round)"],
                ["Atmosphere", "(20 × ESS) m/s"],
                ["Space", "(200 × ESS) m/s"],
                ["Interdimensional Void", "(2000 × ESS) m/s"],
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, HD Decrease, Taking Damage</box>",
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Stance Trigger", "None"],
                ["Speed", "See Table"],
                ["Max Weight", "50 × ESS Kg"],
            ],
        },
    ],
}