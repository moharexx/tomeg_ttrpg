module.exports = {
    name: "Practical Lore",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Lore",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Lore",
    ],
    tags: [
        "Utility, Cooldown",
        "Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "list",
            content: [
                `Your application of general knowledge and sharp wit gives you an edge in all kinds of situations.`,
                `You can use Lore when making a <a href="../main/mechanics.html#hack_device" target="_blank">Hack Device</a> Action.`,
                `You can use a <b>Bonus-Action</b> to replace the Modifier of a Science or Arcana Check with Lore's Modifier.`,
            ],
        },
        {
            type: "p",
            content: [
                `Additionally you can use 2 Special Actions; Quick Wits and Survival Wits.`,
                `Using any of the Special Actions puts a Cooldown onto both: <box>Short-Rest</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Quick Wits</b> (Free-Action):`,
                `You can replace all Mastery and Magic-Mastery Modifiers with your Lore Modifier.`,
                `This can also replace your Martial-Mastery Modifiers with <box>Lore Modifier / 2</box>`,
                `This lasts till the End of your Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Survival Wits</b> (Free-Action Reaction):`,
                `You can replace a single Save's Modifier with <box>Lore Modifier / 2</box>.`,
                `You can do this after you already Rolled the Save, don't reroll it, just adjust the Finalized Value.`,
            ],
        },
    ],
}