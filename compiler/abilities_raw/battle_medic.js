module.exports = {
    name: "Battle Medic",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Science",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Science",
    ],
    tags: [
        "Defense, Utility, Cooldown",
        "Healing, Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You use the <b>Treat Wounds</b> Action as a <b>Main-Action</b>, rather than the regular 1 Minute Cast Time.`,
                `The <b>ESS</b> this Ability is Cast at is <box>Modifier / 10</box> (at least 1)`,
            ],
        },
        {
            type: "p",
            content: [
                `Additionally, you can make Surgeries with just a Main-Action, but 4× Difficulty.`,
                `This has no Cooldown.`
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
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Range", "Touch"],
            ],
        },
    ],
}