module.exports = {
    name: "Lightning Swap",
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
        "Utility",
        "Action Economy",
        "Free-Action, GRIT | HD",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `Spend either <b>GRIT</b> or <b>HD</b> to use a <a href="../main/mechanics.html#switch_action" target="_blank">Switch-Action</a> or <a href="../main/mechanics.html#interact" target="_blank">Interact-Action</a> as a <b>Free-Action</b>.`,
                `For Ability and Feature interactions treat as if you used said Action with a <b>Main-Action</b>.`,
                `When you Un-Wield your Shield with this Ability, you don't lose an already Active <a href="../main/mechanics.html#defense_action" target="_blank">Defense-Action</a>.`,
                `The <b>ESS</b> this Ability is Cast at is <b>always</a> <box>Total XP / 100</box> (at least 1)`,
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
                ["Cast Time", "Free-Action"],
                ["Resource Cost", "(5 GRIT | 10 HD) × ESS"],
            ],
        },
    ],
}