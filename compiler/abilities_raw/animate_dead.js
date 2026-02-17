module.exports = {
    name: "Animate Dead",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 CS, (10 Anima | 20 Enchantment | 50 Conjuration)",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Enchantment | 50 Conjuration)",
    ],
    tags: [
        "Offense, Defense, Utility",
        "Proxy",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, a Target corpse in Range gets Animated as an Undead.`,
                `The Undead has <a href="undying.html" target="_blank">Undying</a>, <a href="essence_sustenance.html" target="_blank">Essence Sustenance</a>, and <b>Dark Vision</b>.`,
                `The Undeads have <box>(6 × ESS) Radiant Weakness</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `Each Undead under Control occupies <box>(10 × ESS) Proxy</box>`,
                `Undead understand their owner's language, and obey commands.`,
                `Undead can think and have memory (based on the INT stat), so they can follow plans and formations.`,
                `The Caster can forgo Control as a Free-Action, this doesn't make the Undead Perish.`,
                `The Caster loses Control if the Distance is greater than <box>1000 × CS^(1/3) meters</box> for over a Day.`,
                `Undead without Control will wander and be hostile to anything alive.`,
                `Defeated Undead are in too bad of a Condition to be used again. (Unless repaired somehow.)`,
            ],
        },
        {
            type: "p",
            content: [
                `The form and type of Undead is determined by the corpse.`,
                `Fleshy bodies make a Zombie, and their <b>Base MS</b> will be overridden to <box>3 × ESS^(1/3)</box>`,
                `Skeletal bodies make a Skeleton, which have <box>(6 × ESS) Bludgeon Weakness</box>`,
                `Limbs are based on the corpse, and the Undead can have the <b>Multi Legged</b> Passive.`,
                `The Undead are able to wear Armor, and if they have the appropriate limbs, even Wield Weapons and Shields.`,
                `Claws and jaws are considered Natural Melee Weapons with <box>1d8 Base Damage</box>, <box>5 Armor-Pen</box>, and Tier of this Ability's ESS.`,
            ],
        },
        {
            type: "table",
            full_width: "60%",
            width: ["30%", "70%"],
            content: [
                ["Zombie Type", "Stats (Multiply by ESS)"],
                ["STR", "10"],
                ["AGI", "2"],
                ["VIT", "10"],
                ["INT", "1"],
                ["WILL", "2"],
                ["EGO", "1"],
                ["Extra Stats", "20 HP, 12 HD, 4 SP"],
                ["Masteries", "10 Melee Weapon"],
                ["Melee To-Hit Modifier", "5"],
                ["Ranged To-Hit Modifier", "1"],
            ],
        },
        {
            type: "table",
            full_width: "60%",
            width: ["30%", "70%"],
            content: [
                ["Skeleton Type", "Stats (Multiply by ESS)"],
                ["STR", "4"],
                ["AGI", "10"],
                ["VIT", "4"],
                ["INT", "2"],
                ["WILL", "4"],
                ["EGO", "2"],
                ["Extra Stats", "8 HP, 30 HD, 8 SP"],
                ["Masteries", "10 Melee Weapon, 10 Ballistic, 10 Acrobatics"],
                ["To-Hit Modifier", "5"],
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Range", "CS^(1/3)"],
                ["Proxy per Undead", "10 × ESS"],
            ],
        },
    ],
}