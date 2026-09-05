module.exports = {
    name: "Signature Trick",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
    ],
    tags: [
        "Utility",
        "Self, Buff",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Signature Trick Stance</b>.`,
                `When getting into this Stance, choose an <b>On-Attack</b> or <b>Meta-Ability</b> you have Unlocked, which Costs a <b>Bonus-Action</b>.`,
                `While in this Stance, you can use this <b>On-Attack</b> as a <b>Free-Action</b>, this has a Cooldown of <box>1 Minute (20 Rounds)</box>`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "None"],
            ],
        },
    ],
}