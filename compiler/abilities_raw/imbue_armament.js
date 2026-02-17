module.exports = {
    name: "Imbue Armament",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "20 WILL",
        "10 CS, (5 Enchantment | 10 Transmutation | 20 Anima)",
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
                `When you use this Ability, you change an Armament's Damage or Resistance Type.`,
                `For each Damage or Resistance Type an Armament has choose an Imbuement.`,
                `A Weapon's Armor-Pen Stat will turn into the new Damage Types' Penetration.`,
                `Side Effects only apply when the select Damage Type is used.`,
                `This Ability must be Cast at least at the Armament's Tier or it will Fail!`,
            ],
        },
        {
            type: "p",
            content: [
                `If Cast as <b>Innate</b>, the Ability can only Target currently Wielded and Worn Items, and Ends when Un-Wielded or taken off.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Elemental Imbuement</b> (Weapons):`,
                `List of Damage Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `When Electric is chosen, it will NOT <b>Maximize</b> its Damage against Soaked  Airborne Targets.`,
                `When Radiant or Necrotic is chosen, it will deal ONLY either the HP or the SP part of the Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Full Electric Imbuement</b> (Weapons):`,
                `Change the Damage Type to Electric, which is <b>Maximized</b> against Soaked and Airborne Targets.`,
                `<b>Choose 1 Side Effect:</b>`,
                `All Abilities with the <b>Weapon Damage Tag</b> have Halved To-Hit, including Attack-Actions.`,
                `The Weapon loses <box>2 × ESS</box> Armor-Pen. (The Weapon must have at least that much Armor-Pen to choose this!)`,
                `It Costs an Extra Bonus-Action to use any Ability with the <b>Weapon Damage Tag</b>, including Attack-Actions.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Full Hybrid Imbuement</b> (Weapons):`,
                `List of Damage Types: <box>Radiant, Necrotic</box>`,
                `Radiant and Necrotic are Hybrid Damage Types, which go both into HP and SP.`,
                `<b>Choose 1 Side Effect:</b>`,
                `The Weapon loses <box>4 × ESS</box> Armor-Pen. (The Weapon must have at least that much Armor-Pen to choose this!)`,
                `It Costs an Extra Bonus-Action to use any Ability with the <b>Weapon Damage Tag</b>, including Attack-Actions.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Resistance Imbument</b> (Armors):`,
                `List of Resistance Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `This Ability can be used as a <b>Main-Action</b> to Target up to 3 Items instead of 1.`,
                `When multiple Items are Targeted, the Enchants can be different.`,
                `When you use <a href="../main/mechanics.html#switch_action" target="_blank">Switch_action</a> as a <b>Bonus-Action</b>, you can Cast this Abilty as a <b>Free-Action</b> on one Wielded Item.`,
                `When you Cast <a href="battle_aura.html">Battle Aura</a>, you can Cast this Abilty as a <b>Free-Action</b> on it.`,
                `When you Cast <a href="enchant_armament.html">Enchant Armament</a>, you can Cast this Abilty as a <b>Free-Action</b> on one of the same Armaments.`,
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