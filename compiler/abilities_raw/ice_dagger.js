module.exports = {
    name: "Ice Dagger",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Cold Damage, Executing",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Add On-Hit inflict a <b>Cold Effect</b> onto the Target.`,
            ]
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                `At the Start of Caster's Next Turn the Target recieves <box>2d6 × ESS</box> <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Cold Damage.`,
                "After the Damage the Cold Effect Ends.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> A Cold Effect can be removed by a Heat Effect.",
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
                ["Special Condition", "Melee"],
                ["Executing Damage", "(2d6 × ESS) Cold"],
            ],
        },
    ],
}