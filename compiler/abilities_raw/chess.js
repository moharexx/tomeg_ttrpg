module.exports = {
    name: "Chess",
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
        "Weapon Damage, Mobility",
        "Main-Action / Continuous",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Chess Stance.</b>`,
                `While in <b>Chess Stance</b> you can perform different Tricks.`,
                `If you don't have the Stacks to Spend you cannot do the Trick.`,
                `These Tricks count as Abilities, unless said otherwise.`,
                `<b>Max Stack:</b> <box>6</box>`,
            ],
        },
        {
            type: "dots",
            content: [
                `While in <b>Chess Stance</b> if you Take Damage, you have to use the <b>King Trick</b> once, utill the End of Your Next Turn or the Stance Breaks.`,
                `If The Stance Breaks, you gain the <a href="../main/mechanics.html#conditions" target="_blank">Stagered Condition</a>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Pawn</b> (Main-Action):`,
                `Gain 1 Stack, and use the <a href="../main/mechanics.html#move_action" target="_blank">Move-Action.</a>`,
                `Using the <b>Pawn Trick</b> does NOT count as an Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Knight</b> (Main-Action):`,
                `Spend 1 Stack, then Teleport withing <b>MS Range.</b>`,
                `You need not Pinpoint the location, this can go over solid barriers, and does NOT Activate Reactions and Triggers.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Bishop</b> (Free-Action):`,
                `Spend 2 Stacks, then use any Bonus-Action Action (Like Abilities) as a Free-Action.`,
                `You can only use this Once per Round.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Rook</b> (Main-Action):`,
                `Spend 2 Stacks, then use the Move-Action and gain <box>(6 × ESS) <a href="../main/mechanics.html#resistances" target="_blank">Armor VS All</a></box> till the End of Your Next Turn.`,
                `Using the <b>Rook Trick</b> does NOT count as an Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Queen</b> (Main-Action):`,
                `Spend 3 Stack, then Teleport withing <b>MS Range,</b> the Next Action will gain <box>(4 × ESS) <a href="../main/mechanics.html#potency" target="_blank">Potency</a></box>`,
                `The Teleport doesn't need Pinpointed location, this can go over solid barriers, and does NOT Activate Reactions and Triggers.`,
                `If the Potency Bonus is not used till the End of your Next Turn, it will be lost.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>King</b> (Main-Action):`,
                `Spend 1 Stack, then use either the Move-Action or the Attack-Action.`,
                `Using the <b>King Trick</b> to make a Move-Action does NOT count as an Ability.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Not Using the <b>King Trick</b> after taking Damage</box>`,
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
                ["Stance Trigger", "None"],
            ],
        },
    ],
}