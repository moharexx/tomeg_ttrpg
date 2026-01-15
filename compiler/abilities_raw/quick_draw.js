module.exports = {
    name: "Quick Draw",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon | Ballistic | Martial Arts",
    ],
    reqs_full: [
        "10 Melee Weapon | 10 Ballistic | 10 Martial Arts",
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
                "When using this Ability, you will be able to do the Attack-Action as a Free-Action once on Your Next Turn.",
                "This Ability can only be used if you have not used the Attack-Action on your Turn.",
                "If you use the Attack-Action that Turn, this Ability is Cancelled, you do NOT gain back the Action Cost.",
            ],
        },
        {
            type: "dots",
            content: [
                "If the Attack-Action would only cost you a Bonus-Action, you make the Free-Attack-Action with Advantage.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>COMBO:</b>",
                "The Free-Action Attack can be used immediately after any Trigger you have Activates, like Reactive Abilities, Stances, ect...",
                "This means that you will be able to use Quick Draw again on Your next Turn.",
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