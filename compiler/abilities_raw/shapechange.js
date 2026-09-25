module.exports = {
    name: "Shapechange (WIP)",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 VIT | 50 WILL",
        "20 Transmutation | 50 Conjuration | 200 Enchantment",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL",
        "<b>Spell:</b> 50 CS, (20 Transmutation | 50 Conjuration | 200 Enchantment)",
    ],
    tags: [
        "Offense, Defense, Utility, Cooldown",
        "Everything Under The Sun",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `You can shape yourself into many different forms, temporarly or permanently changing or enhancing your form.`,
                `The default use of this Ability has no Cooldown, and permanently changes or enhances your form.`,
                `You can change your age, sex, and even species, you can give yourself extra limbs, wings, ect...`,
                `You can give yourself a Natural Armor, and Natural Weapons and Shields.`,
                `The Max Tier any of your Natural Armaments can be is equal to the ESS this Ability is Cast at.`,
                `Your Natural Armaments can have Permanent Innate <a target="_blank" href="imbue_armament.html">Imbue Armament</a> on them.`,
                `You can also re-assign the XP of your <box>STR, AGI, VIT, Athletics, Acrobatics, and Sleight</box>`,
                `By re-assigning you can also Unspent back into XP, and Spend that XP into other Stats.`,
                `The Max Weight of your new form is <box>150 × ESS</box> Kg.`,
            ]
        },
        {
            type: "p",
            content: [
                `You can do a Prime or Behemoth Shapechange, this has a Cooldown of a <b>Long-Rest</b>.`,
                `This form lasts for up to <b>1 Hour (1200 Rounds)</b>, or until the <b>BUFFER</b> runs out.`,
                `This feature is WIP...`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Polymorph:</b> (WIP)`,
                `You can make this Ability's Range into Touch, Targeting someone other than yourself.`,
                `An Unwilling Target can make a <box>VIT | Soul</box> Save of <box>6 × ESS</box> to resist the Ability.`,
                `This can also be used as a Debuff, to re-assign their physical Stats down, strip them of arms, ect...`,
                `When you Unspend XP to Debuff, you can make it so it requires a Long-Rest for the Target to Spend that XP again.`,
                `The worst you can is to turn them into something with no legs, no arms, no eyes, no ears, 0 MS, Rooted and Prone.`,
                `Even then, they can technically use Spells.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Notes:</b>`,
                `Without <a target="_blank" href="natural_flight.html">Natural Flight</a> or <a target="_blank" href="multi_legged.html">Multi Legged</a>, your wings and extra legs aren't more than aesthetics.`,
                `Your Natural Weapons must be "Wielded", like any other Weapons, and can be Enchanted using <a target="_blank" href="enchant_armament.html">Enchant Armament</a>.`,
                `You can gain the mechanical advantages without changing the look of your form, it doesn't have to make sense, do things, be creative, be free.`
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Special Cooldown", "Long-Rest"],
                ["Special Duration", "1 Hour (1200 Rounds)"],
            ],
        },
    ],
}