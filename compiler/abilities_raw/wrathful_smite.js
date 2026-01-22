module.exports = {
    name: "Wrathful Smite",
    category: "on_attack",
    type: [
        "Spell",
        "(Melee)",
    ],
    reqs_short: [
        "Anima",
    ],
    reqs_full: [
        "20 Anima",
    ],
    tags: [
        "Offense",
        "Melee, Necrotic Damage, To-Hit",
        "Bonus-Action, SP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You imbue your Melee Weapon with a part of your Soul and wrath for more power.`,
                `You add Bonus To-Hit and On-Hit Damage to the Parent Melee Attack by Spending <b>SP</b>.`,
                `After using this Ability, the Caster can only use their Actions in the following ways:`,
                `<box>Move (Towards) | Attack-Action | Wrathful Smite</box> against/towards the same Entity until the End of the Casters Next Turn.`,
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
                ["Bonus To-Hit", "1 × SP"],
                ["Bonus On-Hit Damage", "(1 × SP) Necrotic"],
                ["Max SP Cost", "5 × ESS"]
            ],
        },
    ],
}