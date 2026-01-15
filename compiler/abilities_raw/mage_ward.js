module.exports = {
    name: "Mage Ward",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Abjuration | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Defense, Cooldown",
        "Negation, Shielding, BUFFER",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, create a protective Ward on Yourself.`,
                `This is a <a href="../main/mechanics.html#buffer" target="_blank">BUFFER</a>, while Active gain a Resistance Override for all Damage Types.`,
                `This means if you have less than <box>6 × ESS</box> Resistance against any Damage Type, count it as having <box>6 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Control Ward</b> (<a href="../abilities/control.html" target="_blank">Control Meta-Ability</a>, 5 XP):`,
                `You can make Damage ignore Mage Ward's BUFFER, and go straight into HP or SP.`,
                `You can do this selectively, with any Part of any Damage Instance, like seperating Hybrid Damage's HP and SP parts.`,
                `If you let Damage through your Mage Ward, then for that Damage you don't gain the Resistance Override.`,
                `If an Ability has interaction with BUFFERs, you cannot let that Damage pass through!`,
            ],
        },
        {
            type: "dots",
            content: [
                "This Ability cannot CRIT!",
                `(insert here obscure reference to <a href="../abilities/psych_ward.html" target="_blank">Psych Ward</a>, a no longer existing ability)`,
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Long-Rest"],
                ["Duration", "1 Minute"],
                ["BUFFER Amount", "CS"],
                ["Override Resistance", "6 × ESS"],
            ],
        },
    ],
}