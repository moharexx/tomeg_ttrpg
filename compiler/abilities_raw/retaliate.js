module.exports = {
    name: "Retaliate",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Martial Arts | 50 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts | 50 Melee Weapon",
    ],
    tags: [
        "Offense, Defense",
        "Melee, Weapon Damage, Negation",
        "Main-Action + Bonus-Action / Trigger",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Retaliate Stance</b>.`,
                `While in <b>Retaliate Stance</b>, the next Attack Ignores your HD, and Hits you.`,
            ],
        },
        {
            type: "dots",
            content: [
                `When Hit, if <box>Retaliate-Strength</box> is Equal or Greater than <b>Incoming Pre-Mitigation Damage</b>, you <b>Retaliate</b> the Attack.`,
                `When you <b>Retaliate</b> an Attack, you Negate the full Attack, meaning Effects, ect...`,
                `When you <b>Retaliate</b> an Attack, you can also <b>Teleport</b> to the Attacker if they are within <box>10 × ESS^(1/3)</box> Range, and make a Melee Action-Attack.`,
                `<b>Retaliate</b>'s <b>Teleport</b> does NOT Activate Reactions, or Trigger Stances.`,
                `If the Attack-Action would cost you only a <b>Bonus-Action</b> you make this Attack with Advantage.`,
                `You can also activtivate <b>Retaliate</b> by succeeding a save.`,
                `When you <b>Retaliate</b> a Dash Type Attack, you can choose to stop or not to stop the Dash of the Attack.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `<b>Note:</b> This Ability can CRIT for 2× Retaliate Strength, throw your d10 pls`,
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
                ["Stance Trigger", "Get Attacked"],
                ["Teleport Ragne", "10 × ESS^(1/3)"],
                ["Retaliate Strength", "2d10 × ESS"],
            ],
        },
    ],
}