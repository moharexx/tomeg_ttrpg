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
                `When used, you imbue a small object with the powers of this Ability and Throw it, often a coin.`,
                `The Legendary power of this small object becomes apparent when Hit, doing various things based on the Attack.`,
                `The small object loses its power after the End of the Caster's Next Turn.`,
                `Hitting Coins takes a To-Hit of <box>10 × ESS</box>`,
                `The Caster and whomever the Caster designates as Ally always Hit the Coin.`,
            ]
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose one Coin Trick for Free, the rest have a Cost.`,
                `You cannot Start with Coin Deflect, but it has no XP Cost, only Requirements.`,
                `If someone else Hits the Coin they can only use Coin Tricks Unlocked by them.`,
                `Hitting the Coin without any Coin Trick will Disable it.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Reflect</b> (On Line Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Line Attack, it can Reflect it in a different Direction.`,
                `This reflection also works on Line Based Attacks which move the Caster, reflecting the Caster as well.`,
                `Being Hit multiple times from the same Line Attack will not Proc the Damage multiple times, but rather <a href="../main/mechanics.html#maximize_and_minimize">Maximize</a> the Damage.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Split</b> (On Projectile Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Projectile Attack, it can reflect it in a different Direction, and Split the Coin.`,
                `This makes 2 Projectiles, the Original, and the Split Coin.`,
                `These 2 Projectiles must go in different Directions, so that they don't Hit the Same Target.`,
                `The Split Coin has the Same To-Hit and Range as the Original Attack and <box>(1d12 × ESS) Physical Damage</box>`,
                `The Split Coin is a CRIT if the Original Attack was also a CRIT.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Bounce</b> (On Melee Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Melee Attack, it is sent out as a Projectile Attack.`,
                `The Coin will have the Same To-Hit and Damage as the Original Attack and <box>40 / 80 × ESS^(1/3)</box> Range.`,
                `The Coin will inherate all On-Attacks of the Melee Attack, including Melee Only On-Attacks.`,
                `After the Coin Hits it will bounce <box>ESS^(1/3) meters</box> and be <b>Usable Again</b> if the Ability still has Duration left.`,
                `If an AOE Melee Attack Hits Multiple Coins, the Coins must go in different Directions, so that they don't Hit the same Target.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Deflect</b> (When Sensing a Projectile or Line Attack being made) <box>Unlock: Reflex Meta-Ability, Coin Reflect, Coin Split</box>:`,
                `This is considered a Reaction, and takes a Main-Action in place of the default Cast Time.`,
                `If the Attack's Path crosses inside the Throw Range of the Coin, you can Throw the Coin into the Path, Deflecting the Attack.`,
                `To Hit the Attack, the Coin Throws To-Hit must be Equal or Higher than the Attack's To-Hit.`,
                `Make the Coin Throw as if it was a Finesse Throwable Weapon, you can use On-Attacks on the Coin Throw to increase To-Hit.`,
                `On a Success you can do the Coin Reflect if the Deflected Attack was a Line, or the Coin Split if it was a Projectile.`,
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