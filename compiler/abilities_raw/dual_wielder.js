module.exports = {
    name: "Dual Wielder",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 Melee Weapon",
    ],
    tags: [
        "Offense, Defense",
        "Self",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Dual Wielder Stance</b>.`,
                `While in <b>Dual Wielder Stance</b> you gain access to 2 new Actions, which you can use only while Dual Wielding.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Blade Barrage</b> (Main-Action):`,
                `You can make 3 <a href="../main/mechanics.html#attack_action" target="_blank">Attack-Actions</a> against 3 different Targets.`,
                `Even if the Attack-Action is somehow AOE, it still doesn't Target the same Entity more than once.`,
                `Roll only a single d10 Check for all of them, still Roll Damage separately.`,
                `You can also use a single <a href="../main/mechanics.html#switch_action" target="_blank">Switch-Action</a> after or before any of these Attacks.`,
                `This counts as a Skill Type Ability with the Offense Tag.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Blade Block</b> (Bonus-Action):`,
                `You use the <a href="../mechanics/defense_Action.html">Defense-Action</a>.`,
                `This counts as a Skill Type Ability with the Defense Tag.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "None"],
            ],
        },
    ],
}