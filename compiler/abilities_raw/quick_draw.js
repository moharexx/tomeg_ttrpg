module.exports = {
    name: "Quick Draw",
    category: "active",
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
        "Offense",
        "Variable Damage",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you will be able to use the <a target="_blank" href="../main/mechanics.html#attack_action">Attack-Action</a> as a <b>Free-Action</b> once on your Next Turn.`,
                `This Ability can only be used if you haven't used an Offense Tagged Ability on that Turn. (This includes Quick Draw itself!)`,
                `If an Offense Tagged Ability is used in that Turn, then this Ability is Cancelled, and you DON'T gain back the Action Cost.`,
                `<b>Note:</b> Readying an Offensive Tagged Ability is by itself an Offensive Tagged Ability!`,
            ],
        },
        {
            type: "p",
            content: [
                `If the Attack-Action would only cost you a Bonus-Action, you make the Free-Attack-Action with Advantage.`,
                `This Ability cannot be used outside of your Turn, for example; as a Reaction, because like... that would be very weird.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `The <b>Free-Action</b> Attack can be immediately used after you use a Reactive Ability like <a target="_blank" href="opportunity_attack">Opportunity Attack</a>, or something Triggers your Stance.`,
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
            ],
        },
    ],
}