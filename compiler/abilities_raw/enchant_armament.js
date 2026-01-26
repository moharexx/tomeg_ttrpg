module.exports = {
    name: "Enchant Armament",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "50 WILL",
        "5 Enchantment | 10 Transmutation | 20 Anima",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 WILL",
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
                `You Gain <box>3 × ESS</box> Enchantment Points, <b>EP</b> for short.`,
                `At Cast you allocate the EP on Buffs to the Targeted Armament, which lasts for the Duration.`,
                `Different Enchantments have different Caps on how much EP can be put into them.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose 1 Unlock that you gain for free.`,
                `If Cast as <b>Innate</b>, the Ability can only Target currently Wielded and Worn Armaments, and Ends when Unequipped.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Tier Up</b> (Any Armament) <box>Unlock: 5 XP</box>:`,
                `The Armament's <b>Tier</b> increases to <box>EP</box>`,
                `<box><b>EP Cap:</b> EP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Damage</b> (Anything Wieldable) <box>Unlock: 5 XP</box>:`,
                `Choose 1 Damage Type; <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `While Wielding, you can choose to gain a <box>EP</box> Damage Bonus.`,
                `This Damage Bonus can apply to any Attack-Action, or any Damage Instance which deals the same Type.`,
                `When Radiant or Necrotic is chosen, either Half the Damage Bonus or only choose the HP or SP part of it.`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> 2 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Support</b> (Anything Wieldable) <box>Unlock: 5 XP</box>:`,
                `Choose 1 Type; <box>Healing | Shielding</box>`,
                `While Wielding, you gain <box>EP</box> extra Potency.`,
                `When choosing Healing, this Potency can only be Spent on Healing. Duh!`,
                `When choosing Shielding, this Potency can only be Spent on BUFFERs, or Abilities with the Shielding Tag.`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> 2 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Piercing</b> (Any Weapon) <box>Unlock: 5 XP</box>:`,
                `The Weapon gains <box>EP</box> extra Armor-Pen.`,
                `<box><b>EP Cap:</b> 3 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Accuracy</b> (Anything Wieldable) <box>Unlock: 5 XP</box>:`,
                `While Wielding gain a Bonus To-Hit of <box>EP</box> on all Attacks.`,
                `<box><b>EP Cap:</b> 3 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Reach | Range</b> (Melee Weapon | Ranged Weapon) <box>Unlock: 5 XP</box>:`,
                `This Enchantment, unlike the others, Costs a set amount per Level, and can be Upgraded at Max <box>3</box> Times.`,
                `A Melee Weapon's Reach Increases by <box>ESS^(1/3)</box> per Level.`,
                `A Ranged Weapon's Range Increases by <box>(20 / 40 × ESS^(1/3))</box> per Level.`,
                `<box><b>EP Cost Per Level:</b> ESS</box>`,
                `<box><b>Level Cap:</b> 3</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Agile</b> (Anything Wieldable | Armor) <box>Unlock: 5 XP</box>:`,
                `While Wielding or Wearing the Item, the User's Max HD increases by: <box>5 × EP</box>`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> 3 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Dodging</b> (Shield | Armor) <box>Unlock: 5 XP</box>:`,
                `While Wielding or Wearing the Item, any incoming Attack with To-Hit under <box>2 × EP</box> is treated as 0.`,
                `<b>Note:</b> This looks at Finalized To-Hit, so after all modifiers, like Disadvantage!`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> 3 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Armor</b> (Armor) <box>Unlock: 5 XP</box>:`,
                `For each Point of EP put into this, allocate 6 Points or Resistance to the Armor.`,
                `Resistance Types; <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
                `All Resistance Types are Capped at <box>Armor's Property Points × Tier</box>, this includes the Armor's Base Resistance.`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> Unlimited</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Resiliance</b> (Anything Wieldable | Armor) <box>Unlock: 5 XP</box>:`,
                `For each 3 Point of EP put into this, gain <box>2</box> Armor VS All.`,
                `You gain this Bonus only while Wielding the Item or Wearing the Armor.`,
                `If the User could benefit from multiple sources of this, choose only one!`,
                `<box><b>EP Cap:</b> 6 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `When multiple Armaments are Targeted, the Buffs can be different.`,
                `This Ability can be used as a <b>Main-Action</b> to Target up to 3 Items instead of 1.`,
                `When you use <a href="../main/mechanics.html#switch_weapon" target="_blank">Switch Weapon</a> as a <b>Bonus-Action</b>, you can Cast this Abilty as a <b>Free-Action</b> on one Wielded Weapon.`,
                `When you Cast the <a href="../abilities/battle_aura.html">Battle Aura Ability</a>, you can Cast this Abilty as a <b>Free-Action</b> on it.`,
                `When you Cast the <a href="../abilities/imbue_armament.html">Imbue Armament Ability</a>, you can Cast this Abilty as a <b>Free-Action</b> on one of the same Armaments.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can have +1 EP.`,
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
                ["Enchantment Points", "3 × ESS"],
            ],
        },
    ],
}