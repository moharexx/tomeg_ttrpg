module.exports = {
    name: "Lock'n Load",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Utility",
        "Buff",
        "Main-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Lock'n Load Stance.</b>",
                "While in <b>Lock'n Load Stance</b>, Slow-Reload's Action Cost is only a Bonus-Action.",
                "While in <b>Lock'n Load Stance</b>, Reload's Action Cost is a Free-Action, only once a Turn.",
                "When Reloading or Slow-Reloading, You can Reload all currently Wielded Weapons.",
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b>`,
                `You instantly Reload and Slow-Reload any chosen Weapons in Natural Melee Reach.`,
            ],
        },
        {
            type: "p",
            content: [
                "This Stance Breaks only when entering another Stance.",
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
                ["Stance Trigger", "Main-Action + Bonus-Action"],
            ],
        },
    ],
}