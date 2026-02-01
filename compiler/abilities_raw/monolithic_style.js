module.exports = {
    name: "Monolithic Style",
    category: "passive",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "WILL, Athletics",
        "Enchantment, Abjuration",
    ],
    reqs_full: [
        "50 WILL, 50 Athletics",
        "50 Enchantment, 50 Abjuration",
    ],
    tags: [
        "Offense, Defense, Utility, Style",
        "Action Economy",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "list",
            content: [
                `<b>Entering And Leaving the Fighting Style:</b>`,
                `Once per Turn, as a Free-Action, you can commit to <box>Entering | Leaving</box> this Fighting Style.`,
                `This means you <box>Enter | Leave</box> the Fighting Style at the Start of Your Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Monolithic Style Pros:</b>`,
                `Rather than having a Main-Action and Bonus-Action, you have 3 Main-Actions.`,
                `Stances which Break from Taking Damage no longer Break from Taking Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Monolithic Style Cons:</b>",
                "You cannot use Reactions.",
                "For the purpose of Turn Order your Rolled INIT is 0.",
                "Every Ability, including Attack-Actions, Shove, and Grapple, but NOT the Defense-Action, will be used only at your Next Turn.",
                "This basically means each Turn you commit those Actions only to your Next Turn.",
                `With a <a href="../main/mechanics.html#feint" target="_blank">Feint</a> you can hide what Actions you have commited.`,
            ],
        },
    ],
}