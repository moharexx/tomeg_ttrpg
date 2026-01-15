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
                "<b>Entering And Leaving the Fighting Style:</b>",
                "As a Free-Action, you can commit to Entering the Fighting Style.",
                "This means at the Start of Your Next Turn you will Enter the Fighting Style.",
                "As a Free-Action, you can commit to Leaving the Fighting Style.",
                "This means at the Start of Your Next Turn you will Leave the Fighting Style.",
                "When you Leave Monolithic Style you lose the commited Abilities.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Monolithic Style Pros:</b>",
                "You gain +2 Main-Actions.",
                "Stances which Break from Taking Damage no longer Break from Taking Damage.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Monolithic Style Cons:</b>",
                "You do not have any Bonus-Actions.",
                "You cannot use Reactions.",
                "For the porpuse of Turn Order you have 0 INIT, you still have your INIT for other things.",
                "Every Ability, including Attack-Actions, Shove, and Grapple, but NOT the Defense-Action, will be used only at your Next Turn.",
                "This basically means each Turn you commit those Actions only to your Next Turn.",
                `With a <a href="../main/mechanics.html#feint" target="_blank">Feint</a> you can hide what Actions you have commited to Your Next Turn.`,
            ],
        },
    ],
}