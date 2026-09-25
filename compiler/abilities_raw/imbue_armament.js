module.exports = {
    name: "Imbue Armament",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "20 WILL",
        "5 Enchantment | 10 Transmutation | 20 Anima",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 WILL",
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Transmutation | 20 Anima)",
    ],
    tags: [
        "Utility",
        "Touch, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you change an Armament's Damage or Resistance Types.`,
                `For each Damage or Resistance Type an Armament has choose an Imbuement.`,
                `A Weapon's Armor-Pen Stat will turn into the new Damage Types' Penetration.`,
                `This Ability must be Cast at least at the Armament's Tier or it will Fail!`,
            ],
        },
        {
            type: "p",
            content: [
                `If Cast as <b>Innate</b>, the Ability can only Target currently Wielded and Worn Items, and only Ends when Un-Wielded or taken off.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Simple Imbuement</b> (Weapons):`,
                `List of Damage Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `When Physical is chosen, you must decide at Cast to use either Bludgeoning, Slashing, or Piercing.`,
                `When Electric is chosen, it will NOT <b>Maximize</b> its Damage against Soaked or Airborne Targets.`,
                `When Radiant or Necrotic is chosen, it will deal ONLY either the HP or the SP part of the Damage, decided at Cast.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>True Imbuement</b> (Weapons):`,
                `List of Damage Types: <box>Electric | Radiant | Necrotic</box>`,
                `Electric Damage is <b>Maximized</b> against Soaked and Airborne Targets.`,
                `Radiant and Necrotic are Hybrid Damage Types, which go both into HP and SP.`,
                `<b>Choose 1 Drawback:</b>`,
                `<box>1.</box> The Weapon loses <box>4 × ESS</box> Armor-Pen. (Must have at least that much <b>Base</b> Armor-Pen for this!)`,
                `<box>2.</box> Either add a <b>Bonus-Action</b>, or turn a <b>Bonus-Action</b> into a <b>Main-Action</b> when using any Ability which deals Weapon Damage Type.`,
                `<b>Note:</b> The Attack-Action counts as an Ability!`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Resistance Imbument</b> (Armors):`,
                `List of Resistance Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `Change the Resistance Type into the chosen one.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `This Ability can be used as a <b>Main-Action</b> to Target up to 3 Items instead of 1.`,
                `When you use the <a href="../main/mechanics.html#switch_action" target="_blank">Switch-Action</a> you can Cast this as a <b>Free-Action Reaction</b> on your Armaments.`,
                `When you Cast <a href="enchant_armament.html">Enchant Armament</a>, you can Cast this as a <b>Free-Action Reaction</b> on one of the same Armaments.`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "Touch"],
                ["Cast ESS", "Item Tier"],
            ],
        },
    ],
}