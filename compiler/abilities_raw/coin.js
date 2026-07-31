module.exports = {
    name: "Coin",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Ranged, Variable Damage",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you imbue a small object, often a coin, with the powers of this Ability, they you throw it.`,
                `The power of this small object becomes apparent when Hit, doing various tricks based on the Attack.`,
                `The small object loses its power after the End of the Caster's Next Turn, or when used.`,
                `Hitting Coins takes a To-Hit of <box>10 × ESS</box>`,
                `The Caster and whomever the Caster designates as Ally always Hit the Coin.`,
            ]
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose one Coin Trick for Free, the rest have a Cost.`,
                `You cannot Start with Coin Deflect, but that Trick has no XP Cost, only Requirements.`,
                `If someone else Hits the Coin they can only use Coin Tricks Unlocked by themselves.`,
                `Hitting the Coin without using a Trick will Disable it.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Split</b> (Ranged Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Single Target Ranged Attack, it can reflect it in a different Direction, and Split the Coin.`,
                `This makes 2 Projectiles, the Original Attack, and the Split Coin, and these Attacks can't have the same Target.`,
                `The Split Coin has the Same To-Hit and Range as the Original Attack and <box>(1d12 × ESS) Physical Damage</box>`,
                `The Split Coin is a CRIT if the Original Attack was also a CRIT.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Reflect</b> (Line Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Line Attack, it can Reflect it in a different Direction.`,
                `This reflection also works on Line Based Attacks which move the Caster, reflecting the Caster as well.`,
                `Being Hit multiple times from the same Line Attack won't Proc the Damage multiple times, but rather <a href="../main/mechanics.html#maximize_and_minimize">Maximize</a> the Damage.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Bounce</b> (Melee Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Melee Attack, it is sent out as a Ranged Attack.`,
                `The Coin will have the Same To-Hit and Damage as the Original Attack and <box>40 / 80 × ESS^(1/3)</box> Range.`,
                `The Coin can inherit all On-Attacks of the Melee Attack, including Melee Only On-Attacks.`,
                `After the Coin Hits it will bounce up to <box>ESS^(1/3)</box> meters, and be <b>Usable Again</b> with its Duration Refreshed.`,
                `If an AOE Melee Attack Hits multiple Coins, the Coins mustn't Hit the same Target.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Deflect</b> (Reaction against Ranged and Line Attacks) <box>Unlock: Reflex Meta-Ability, Coin Reflect, Coin Split</box>:`,
                `This Trick doesn't happen on Hitting the Coin, rather this is a <b>Main-Action Reaction</b> you can make.`,
                `You can make this Reaction if you Pinpoint a Ranged or Line AOE Attack which comes inside the Throw Range.`,
                `You Throw the Coin in its Path, deflecting it by using either the Coin Split or Coin Reflect Tricks.`,
                `You make an Attack the same as if you used a Finesse Throw Weapon, if the To-Hit is at least the Opposing Attack's To-Hit you Succeed.`,
                `You can use On-Attacks and Meta-Abilities on the Coin Throw itself.`,
            ]
        },
        {
            type: "p",
            content: [
                `<b>ULTRAKILL</b>`,
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
                ["Cast Time", "Bonus-Action"],
                ["Throw Range", "5 × (STR | AGI)^(1/3)"],
                ["Coin Duration", "Till the End of your Next Turn"],
            ],
        },
    ],
}