module.exports = {
    name: "Bulwark",
    category: "stance",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "20 VIT",
        "5 Martial Arts | 10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 VIT",
        "<b>Skill:</b> 5 Martial Arts | 10 Melee Weapon",
    ],
    tags: [
        "Defense",
        "Self, Negation, Buff",
        "Free-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Bulwark Stance</b>.`,
                `While in <b>Bulwark Stance</b>, you can provide <a href="../main/mechanics.html#take_cover" target="_blank">Cover</a> for yourself and other Entities.`,
                `When you use the <a href="../main/mechanics.html#defense_action" target="_blank">Defense-Action</a>, you can Take Cover as a Free-Action in that Turn.`,
                `The Cover you provide is gone when you: Move or get moved.`,
            ],
        },
        {
            type: "p",
            content: [
                `The <b>ESS</b> you Cast this Ability at is <box>Total XP / 100</box>, and if somehow it's less, the Ability Fails.`,
                `Incoming Abilities with more than Double the <b>ESS</b> of this Ability are too powerful, and can ignore this Cover.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Cast Time", "Free-Action"],
                ["Stance Trigger", "None"],
            ],
        },
    ],
}