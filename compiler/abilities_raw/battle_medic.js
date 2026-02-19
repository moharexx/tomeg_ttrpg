module.exports = {
    name: "Battle Medic",
    category: "passive",
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
                `You can make the <a href="../main/mechanics.html#medicate">Medicate Action</a> as a <b>Main-Action</b>.`,
                `If you use <b>Treat Wounds</b> as a Main-Action, you cannot Treat Wounds with this feature again for <box>1 Minute (20 Rounds)</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `Using Battle Medic counts as a Skill Type Ability, with the Defense, and Healing Tag.`,
                `Battle Medic counts as being Cast at ESS equal to: <box>Modifier / 10</box> (at least 1)`
            ],
        },
    ],
}