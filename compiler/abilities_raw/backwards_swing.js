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
                `When using this Ability, you make a <b>Melee Attack-Action</b> with <b>Disadvantage.</b>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Forwards Swing</b> (50 INIT, 10 XP):`,
                `When you make a <b>Melee Attack-Action</b> as a Reaction or Stance Trigger, you can use <b>Forwards Swing</b>.`,
                `<b>Forwards Swing</b> is just like <b>Backwards Swing</b> bit with a <box>1 Minute (20 Round)</box> Cooldown.`,
                `<b>Forwards Swing</b> does NOT Break Stances with the <box>Using Abilities</box> Stance Break.`,
                `<b>Example of Abilities that can have Forwards Swing:</b> <a href="../abilities/retaliate.html" target="_blank"Retaliate</a>, <a href="../abilities/haymaker.html" target="_blank"Haymaker</a>, <a href="../abilities/opportunity_attack.html" target="_blank"Opportunity Attack</a>, <a href="../abilities/riposte.html" target="_blank"Riposte</a>.`,
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