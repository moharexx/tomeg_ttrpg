module.exports = {
    name: "Terror Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima | 20 Divination",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Enchantment | 10 Anima | 20 Divination)",
    ],
    tags: [
        "Offense",
        "Targeting, Soul Save, Effect, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Terrify a Pinpointed Entity or more.`,
                `You have <b>Targeting Points</b> equal to <box>12 × ESS</box>, you can Spend <b>Targeting Points</b> on Entities to Target them.`,
                `The Soul Save's Difficulty is equal to the <b>Targeting Points</b> Spent on the Target.`,
                `On a Failed Save the Target gain the <b>Terror Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Terror Effect:</b>`,
                `Applies Disadvantage on Attacks against the Caster, and cannot willfully move closer to them.`,
                `This Effect Ends if the Caster gets the <a target="_blank" href="../main/mechanics.html#conditions">Dying Condition</a> or Dies.`,
                `The <b>Terror Effect</b> last for the Ability's Duration.`,
                `Entities can repeat the <b>Soul Save</b> at the End of their Turns, Ending the <b>Terror Effect</b> on a Success.`,
            ],
        },
        {
            type: "p",
            content: [
                `This Ability can also have social interactions, like the <a target="_blank" href="../main/mechanics.html#intimidate">Intimidate</a> Action, making opponents flee or surrender.`,
                `Exact effects up to GM.`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Soul Save", "Targeting Points Spent on Entity"],
                ["Targeting Point", "12 × ESS"],
            ],
        },
    ],
}