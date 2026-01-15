module.exports = {
    name: "Guardian-Angel",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Enchantment | 50 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 50 WILL | 20 EGO), (10 Transmutation | 20 Enchantment | 50 Abjuration)",
    ],
    tags: [
        "Defense",
        "Healing, Targeting 5",
        "1 Minute (20 Rounds) / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You give a protective halo to your choosen Targets, if a Target falls, the halo bring them back.",
                "When using this Ability, you are put in Guardian-Angel Stance.",
                "When entering this Stance, you can choose 5 Targets who will be under the effect of this Stance.",
                "Each Target gets a Halo, if they go out of Range they lose the Halo.",
                "The Stance Ends when all Entities use up their Halo.",
                "Healing from this Spell can put the Soul back in the body, and thus Revive the Target.",
                `On a Successful Revival, or save from the <a href="../main/mechanics.html#conditions">Dying Condition,</a> the Target is also saved from the <a href="../main/mechanics.html#conditions">Prone Condition.</a>`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Halo Triggers:</b>",
                "Your Target gets Reduced from Over 0 HP, to 0 or Less HP: Target recieves normal amount of Healing.",
                "Your Target gets Reduced to Negative Max HP, and Dies: Double the Healing.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot CRIT.",
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Stance Trigger", "none"],
                ["Range", "20 × CS^(1/3)"],
                ["Healing", "4 × ESS"],
            ],
        },
    ],
}