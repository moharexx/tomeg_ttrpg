module.exports = {
    name: "Enchant Armament",
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
        "Utility, Unlock",
        "Touch, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you use this Ability, you Enchant an Armament.`,
                `Spend up to <box>2 × ESS</box> Enchantment Points (<b>EP</b> for short) on the Targeted Armament(s).`,
                `At Cast you allocate the EP to the Armament(s), which lasts for the Duration; <box>1 Minute (20 Rounds)</box>`,
                `Different Enchantments have different Caps on how much EP can be put into them.`,
            ],
        },
        {
            type: "p",
            content: [
                `There are 3 Slots which can give an active Enchant Buff; The 2 Wielding Slots, and the Armor Slot.`,
                `This means at most 3 Active Instances of Enchant Armament on an Entity.`,
                `An Item can only have up to 2 Instances of Enchant Armament with the <a href="permanence.html" target="_blank">Permanence Meta-Ability</a>.`,
                `When using the <a href="../main/mechanics.html#switch_action" target="_blank">Switch-Action</a>, you can also change which Enchant Armament Instances you use.`,
                `Casting a new Enchant Armament Instance on an Item allows the User of that Item to change to that Instance.`,
                `Multiple of the same Enchant Types can <b>NOT</b> be Active at the same time, even if it's different Instances of this Ability!`,
                `<b>Note:</b> When using 2 Wielding Slots on a single Item, it can have 2 Active Enchant Armament Instances.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose 1 Enchant that you own for free, without the XP Cost.`,
                `If Cast as <b>Innate</b>, the Ability can only Target currently Wielded and Worn Items, and Ends when Un-Wielded or taken off.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Tier Up</b> (Any Armament) <box>Unlock: 5 XP</box>:`,
                `The Armament's <b>Tier</b> increases to <box>EP</box>`,
                `<box><b>EP Cap:</b> ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Damage</b> (Wielding) <box>Unlock: 5 XP</box>:`,
                `For each Point of EP allocate 1 Damage Bonus.`,
                `Damage Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `This Damage Bonus can apply to Attack-Actions, and Damage Instances which deals the same Type.`,
                `For Radiant and Necrotic, either Half the Damage Bonus or choose only the HP or SP part of it.`,
                `<box><b>EP Cap:</b> 2 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Support</b> (Wielding) <box>Unlock: 5 XP</box>:`,
                `For each Point of EP allocate 1 Potency Bonus.`,
                `Potency Types: <box>Healing | Shielding | Negation</box>`,
                `Healing Potency can only be Spent on Healing. Duh!`,
                `Shielding Potency can only be Spent on BUFFERs, or Abilities with the Shielding Tag.`,
                `Negating Potency can only be Spent on Abilities with the Negation Tag.`,
                `<box><b>EP Cap:</b> 2 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Piercing</b> (Wielding) <box>Unlock: 5 XP</box>:`,
                `Gain <box>EP</box> extra Penetration on each Damage Instance.`,
                `<box><b>EP Cap:</b> 4 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Accuracy</b> (Wielding) <box>Unlock: 5 XP</box>:`,
                `Gain a To-Hit Bonus of <box>EP</box> on all Attacks.`,
                `<box><b>EP Cap:</b> 4 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Reach | Range</b> (Melee Weapon | Ranged Weapon) <box>Unlock: 5 XP</box>:`,
                `This Enchantment, unlike the others, Costs a set amount per Level, and can be Upgraded at Max <box>3</box> Times.`,
                `A Melee Weapon's Reach Increases by <box>ESS^(1/3)</box> per Level.`,
                `A Ranged Weapon's Range Increases by <box>(20 / 40) × ESS^(1/3)</box> per Level.`,
                `<box><b>EP Cost Per Level:</b> ESS</box>`,
                `<box><b>Level Cap:</b> 3</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Agile</b> (Wielding | Armor) <box>Unlock: 5 XP</box>:`,
                `Increase Max HD by: <box>5 × EP</box>`,
                `<box><b>EP Cap:</b> 4 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Dodging</b> (Wielding | Armor) <box>Unlock: 5 XP</box>:`,
                `Incoming Attacks' Finalized To-Hit is reduced by <box>EP</box>`,
                `<box><b>EP Cap:</b> 4 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Armor</b> (Armor) <box>Unlock: 5 XP</box>:`,
                `For each Point of EP put into this, allocate 9 Points of Resistance to the Armor.`,
                `Resistance Types: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `All Resistance Types are Capped at <box>Armor's Property Points × Tier</box>, this Cap includes the Armor's Base Resistances.`,
                `<box><b>EP Cap:</b> Unlimited</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Resiliance</b> (Wielding | Armor) <box>Unlock: 5 XP</box>:`,
                `Gain <box>EP</box> Armor VS All.`,
                `<box><b>EP Cap:</b> 2 × ESS</box>`,
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
                `When you Cast <a href="imbue_armament.html">Imbue Armament</a>, you can Cast this Abilty as a <b>Free-Action</b> on one of the same Armaments.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can have +1 EP.`,
                `When multiple Items are Targeted, rather than all receiving +EP, you have to spread out the +EP between Items.`,
                `<b>Note:</b> Potency Effects fade after <box>1 Minute (20 Rounds)</box>, even if the Ability would last longer!`,
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
                ["Enchantment Points", "2 × ESS"],
            ],
        },
    ],
}