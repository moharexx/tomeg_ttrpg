module.exports = {
    name: "Down Smash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Athletics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics",
    ],
    tags: [
        "Offense",
        "Physical Damage, Flow Sphere AOE, Mobility",
        "Main-Action, GRIT",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You Smash Down from the sky, creating a shockwave where you land.",
                "This is a Stance-Like Ability, meaning it is structured like a Stance, but it does not count as a Stance for any other purpose.",
                "This means you can freely be in another real Stance while you are in Down Smash.",
            ],
        },
        {
            type: "p",
            content: [
                "When you Enter Down Smash, you begin to count the Distance fallen.",
                `You can only Enter Down Smash when you are <a href="../main/mechanics.html#conditions" target="_blank">Airborne.</a>`,
                "If the <b>Airborne Condition</b> Ends on you, so does the Down Smash.",
                "While Falling with this Ability, you Fall an Extra <box>5 × ESS^(1/3)</box> meters at the End of Your Turns.",
                "When you hit ground, you make a Shockwave, this is a Flow Sphere AOE Melee Attack, which you are NOT Included in.",
                "You can Spend up to <box>(5 × ESS) GRIT</box> to increase the Damage, this also reduces the Fall Damage, potentially fully Negating it.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Flying Smash</b> (50 XP):",
                `When you use Down Smash, you can choose to Travel in any Direction, ignoring regular gravity.`,
                "This replaces the Falling Speed to be only the Extra Fall Speed provided by this Ability.",
                "While in Flying Smash you have the <b>Airborne Condition.</b>",
                "Additionally you can use a <b>Bonus-Action</b> to Travel an Extra <b>5 × ESS^(1/3)</b> meters.",
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
                ["Fall Damage Reduction", "Equal to GRIT Spent"],
                ["Extra Fall Speed", "5 × ESS^(1/3) at the End of your Turns"],
                ["Radius", "(Fallen Distance / 5) Up to a Maximum of (4 × ESS^(1/3))"],
                ["Damage", "(3d4 × ESS) + (GRIT Spent) Physical Damage"],
            ],
        },
    ],
}