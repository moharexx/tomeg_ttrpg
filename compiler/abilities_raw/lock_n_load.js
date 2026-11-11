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
                `When using this Ability, you are put in <b>Lock'n Load Stance</b>.`,
                `While in <b>Lock'n Load Stance</b>, you ignore the Reload Property of your Ranged Weapons.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b>`,
                `You can make any Ranged Weapon ignore its Reload Property in Natural Melee Reach.`,
                `This lasts until the Start of your Next Turn.`,
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