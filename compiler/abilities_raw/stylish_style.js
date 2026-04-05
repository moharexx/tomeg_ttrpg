module.exports = {
    name: "Stylish Style (WIP)",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "None",
    ],
    reqs_full: [
        "None",
    ],
    tags: [
        "Offense, Defense, Utility, Style",
        "Action Economy",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "list",
            content: [
                `<b>Entering And Leaving the Fighting Style:</b>`,
                `Once per Turn, as a Free-Action, you can commit to <b>Entering</b> this Fighting Style.`,
                `This means you <b>Enter</b> the Fighting Style at the Start of Your Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stylish Style:</b>`,
                `You have a Style Quota to fulfill each Turn, if you Fail, the <b>Style Breaks</b>.`,
                `The Quota starts at 1, and each subsequent Turn increases by +1`,
                `Keep track of the Total Style you earned.`,
                `As a <b>Free-Action</b> you can <b>Style Break</b>, this allows you to Spend ALL the Style you earned.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Style Gain Methods</b> (Each Capped at once per Round):`,
                `<box>Deal Damage | Heal | Shield</box>: +1 Style`,
                `<box>Reduce Entity to 0 HP | Buff | Debuff</box>: +1 Style`,
                `<box>Fully Negate an incoming Attack (Armor, HD, Ability)</box>: +1 Style`,
                `<box>Activate a <b>Special Condition</b></box>: +2 Style`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>Special Conditions:</b>`,
                `Special Conditions are when Abilities, Conditions, or Status Effects do some special interaction.`,
                `<b>Examples:</b> Damaging Someone who is <a href="../main/mechanics.html#conditions" target="_blank">Staggered</a>, Maximizing Executing Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Style Spend Methods:</b>`,
                `1 Style -> Recover to 1 HP.`,
                `1 Style -> End the Prone Condition.`,
                `1 Style -> Make a Move-Action.`,
                `2 Style -> Gain a Bonus-Action.`,
                `3 Style -> Gain a Main-Action.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Style Break:</b>`,
                `After Spending your earned Style Points, you gain the <a href="../main/mechanics.html#conditions" target="_blank">Staggered Condition</a> till the End of your Next Turn.`,
                `You also don't gain back any Actions at the Start of your Next Turn.`,
                `<b>Note:</b> This is the only way of Exiting this Style!`,
            ],
        },
    ],
}