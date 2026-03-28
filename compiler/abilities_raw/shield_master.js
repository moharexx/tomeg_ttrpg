module.exports = {
    name: "Shield Master",
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
        "Defense",
        "Self",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Dual Wielder Stance</b>.`,
                `While in <b>Dual Wielder Stance</b> you gain access to 2 new Actions, which you can use only while Wielding a Shield.`,
                `These Actions don't Trigger Shield Properties.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Human Barricade</b> (Main-Action + Bonus-Actions):`,
                `Chosen Sensed Entities within a Radius of <box>ESS^(1/3)</box> (you included) get the <a href="../mechanics/defense_Action.html">Defense-Action</a>.`,
                `This <b>Defense-Action</b> ends at the End of Your Next Turn, or if they are not in the Radius.`,
                `This counts as a Skill Type Ability with the Defense Tag.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Tactical Block</b> (Bonus-Action):`,
                `You make All Saves with Advantage until the End of Your Next Turn.`,
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