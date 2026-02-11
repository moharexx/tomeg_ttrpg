module.exports = {
    name: "Down Smash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Athletics | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Flow Sphere AOE, Physical Damage, Mobility",
        "Main-Action, GRIT",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You Smash Down from the sky, creating a shockwave where you land.`,
                `This is a Stance-Like Ability, meaning it's structured like a Stance, but it doesn't count as a Stance for any other purpose.`,
                `This means you can freely be in another real Stance while you are in Down Smash.`,
            ],
        },
        {
            type: "p",
            content: [
                `While you're in Down Smash, you can choose to Fall anytime in your Turn, rather than only at the End.`,
                `Your Fall Speed is increased by <box>4 × ESS^(1/3)</box>`,
                `You create a shockwave where you land, this is a Flow Sphere AOE Melee Attack, which you are (obviously) excluded from.`,
                `You can Spend up to <box>(5 × ESS) GRIT</box> to increase the Damage of the Attack, and reduce the Fall Damage on yourself.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Viltrumite Combat</b> (50 XP):`,
                `You can use Down Smash <b>omni</b>directionally. (See what I did there?)`,
                `This means flying, and overrides the regular Fall Speed to <box>4 × ESS^(1/3)</box>`,
                `This flight is in a straight line.`,
                `You can use a <b>Bonus-Action</b> to either turn yourself in another direction, or travel an Extra <b>4 × ESS^(1/3)</b> meters.`,
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
                ["Extra Fall Speed", "4 × ESS^(1/3)"],
                ["Radius", "2 × ESS^(1/3)"],
                ["Damage", "(3d4 × ESS) + (GRIT Spent) Physical Damage"],
                ["Fall Damage Reduction", "GRIT Spent"],
            ],
        },
    ],
}