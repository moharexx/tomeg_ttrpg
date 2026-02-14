module.exports = {
    name: "Backwards Swing",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense, Cooldown",
        "Weapon Damage",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you make a <b>Melee <a href="../main/mechanics.html#attack_action" target="_blank">Attack-Action</a></b> with <b>Disadvantage</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Forwards Swing</b> (50 INIT, 10 XP):`,
                `As part of some Abilities you make a <b>Melee Attack-Action</b>, when doing so you can Forward Swing it.`,
                `A Forward Swinged Attack's Action Cost is reduced, but gains <b>Disadvantage</b>.`,
                `From Main-Action to Bonus-Action, or from Bonus-Action to Free-Action.`,
                `Using <b>Forwards Swing</b> doesn't count as an Ability for Breaking Stances.`,
                `<b>Forwards Swing</b> has a <box>1 Minute (20 Round)</box> Cooldown.`,
                `<b>Example of Abilities that can be Forwards Swinged:</b> <a href="retaliate.html" target="_blank">Retaliate</a>, <a href="haymaker.html" target="_blank">Haymaker</a>, <a href="opportunity_attack.html" target="_blank">Opportunity Attack</a>, <a href="riposte.html" target="_blank">Riposte</a>.`,
            ]
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
                ["Cooldown", "Can use Next Round"],
            ],
        },
    ],
}