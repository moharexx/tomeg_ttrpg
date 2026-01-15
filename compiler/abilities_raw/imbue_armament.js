module.exports = {
    name: "Imbue Armament",
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
        "<b>Spell:</b> (10 INT | 10 WILL | 20 EGO), (5 Enchantment | 10 Transmutation | 20 Anima)",
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
                `When you use this Ability, you change an Armament's Damage Type.`,
                `choose a Type of Imbuement, and if it has a Side Effect, choose one as well.`,
                `When Cast on an Armament, change 1 or more of the Armament Damage Types to other ones.`,
                `The Weapon's Armor-Pen Stat Will Always match the Armament's new Damage Type.`,
                `This Ability must be Cast at least at the Armament's Tier or it will Fail!`,
                `Any Side Effect only applies when using the specific Damage Type.`,
            ],
        },
        {
            type: "p",
            content: [
                `If Cast as <b>Innate</b>, the Ability's <b>Range</b> is Self.`,
                `This means only Weapons currently Wielded by You, and Ends if you no longer Wield them.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Type 1 Imbument:</b>`,
                `List of Damage Types: <box>Physical, Heat, Cold, Bio, Demat, Thunder, Psychic</box>`,
                `No Side Effects.`,
                `Electric can be chosen, but it will NOT Maximalize it's Damage against Soaked or Airborne Targets.`,
                `Radiant or Necrotic can be chosen, but it will deal ONLY either the Physical or the SP part of the Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Type 2 Imbument:</b>`,
                `List of Damage Types: <box>Electric</box>`,
                `List of Side Effects:`,
                `All Abilities with the <b>Weapon Damage Tag</b> have Halved To-Hit, including Attack-Actions.`,
                `Costs an Extra Bonus-Action to use any Ability with the <b>Weapon Damage Tag</b>, including Attack-Actions.`,
                `The Weapon Loses <box>2 × ESS</box> Penetration, the Weapon must have at least <box>2 × ESS</box> Armor-Pen or this CANNOT be chosen!`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Type 3 Imbument:</b>`,
                `List of Damage Types: <box>Radiant, Necrotic</box>`,
                `List of Side Effects:`,
                `Costs an Extra Bonus-Action to use any Ability with the <b>Weapon Damage Tag</b>, including Attack-Actions.`,
                `The Weapon Losses <box>4 × ESS</box> Penetration, the Weapon must have at least <box>4 × ESS</box> Armor-Pen or this CANNOT be chosen!`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `When you use <a href="../main/mechanics.html#switch_weapon" target="_blank">Switch Weapon</a> as a Bonus-Action, you can Cast This Abilty as a Free-Action.`,
                `Using this Ability you can Target All Weapons currently Wielded by You.`,
                `When you Cast <a href="../abilities/enchant_armament.html" target="_blank">Enchant Armament Ability</a>, you can Cast This Abilty as a Free-Action.`,
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