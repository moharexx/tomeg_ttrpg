module.exports = {
    name: "Tetris",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "200 Melee Weapon | 200 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 200 Melee Weapon | 200 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Weapon Damage, Flow Line AOE, Mobility, HD",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Tetris Stance.</b>",
                "While in <b>Tetris Stance</b> you can perform different Tricks.",
                "If you don't have the Stacks to Spend you cannot do the Trick, duh!",
                "These Tricks count as Abilities, unless said otherwise.",
                "<b>Max Stack:</b> <box>4</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Upstack</b> (Bonus-Action):",
                `Gain 1 Stack, and remove the <a href="../main/mechanics.html#conditions" target="_blank">Prone Condition</a> from Yourself.`,
                `Using the <b>Upstack Trick</b> does NOT count as an Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Downstack</b> (Bonus-Action):",
                "Spend 1 Stack, gain <box>(15 × ESS) HD</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Tetris</b> (Bonus-Action):",
                "Spend 1 Stack, do a Flow Line AOE Melee Attack.",
                "Line Length: <box>4 × ESS^(1/3)</box>",
                "Line width: <box>ESS^(1/3)</box>",
                "Damage: <box>(2d8 × ESS) Weapon Damage Type</box>"
            ],
        },
        {
            type: "list",
            content: [
                "<b>T-Spin</b> (Bonus-Action):",
                "Spend 1 Stack, perform a Move-Action then a Melee or Ranged Attack-Action.",
                "This can only be used once per Round.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>All-Spin</b> (Bonus-Action):",
                "Spend 2 Stacks, gain <box>(15 × ESS) HD</box> and perform a Move-Action.",
                "This Move-Action does NOT Activate Reactions and Triggers.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Perfect Clear</b> (Bonus-Action):",
                "Can only be used at exactly 3 Stacks, and Ends the Stance!",
                `Spend 3 Stacks, do an <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Melee Attack, with Melee Reach.`,
                "Damage: <box>(2d6 × ESS) Weapon Damage Type</box>",
                "Penetration: <box>10 × ESS</box>",
            ],
        },
        {
            type: "p",
            content: [
                "You can drop to 0 Stacks with this Stance, and that won't Break it.",
                "The Stance Breaks when Taking Damage while at 3 or more Stacks.",
                `This Stance Breaking gives you the <a href="../main/mechanics.html#conditions" target="_blank">Staggered Condition.</a>`,
            ],
        },
        {
            type: "p",
            content: [
                `<i><b>"Have you ever played Tetris with your life on the line?"</b></i>`,
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "Performing a Perfect Clear"],
            ],
        },
    ],
}