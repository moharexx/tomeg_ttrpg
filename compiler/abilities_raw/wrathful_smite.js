module.exports = {
    name: "Wrathful Smite",
    category: "on_attack",
    type: [
        "Spell",
        "(Melee)",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Enchantment | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Necrotic Damage, To-Hit",
        "Bonus-Action, SP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You imbue your Melee Weapon with a part of your Soul and wrath for more power.`,
                `You add Bonus To-Hit, On-Hit Damage, and Penetration to the Parent Melee Attack by Spending <b>SP</b>.`,
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
                ["Bonus To-Hit, Damage, Penetration", "Equal to SP Spent"],
                ["Bonus On-Hit Necrotic Damage", "1 × SP"],
                ["Max SP Cost", "5 × ESS"]
            ],
        },
    ],
}