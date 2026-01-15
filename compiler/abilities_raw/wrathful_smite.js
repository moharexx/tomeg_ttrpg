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
        "To-Hit",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Adds Bonus To-Hit and On-Hit Damage to the Parent Attack by Spending SP.",
                "After using this Ability, the Caster can only use his Actions in the following ways:",
                "<box>Move (Towards) | Attack-Action | Wrathful Smite</box> against/towards the same Entity until the End of the Casters Next Turn.",
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