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
                `The Coin loses its power when Used, or after the End of the Caster's Next Turn.`,
                `The Caster and their chosen Allies always Hit the Coin, otherwise a To-Hit of <box>10 × ESS</box> is needed.`,
                `The Coin itself counts as an Entity, and can Activate Triggers.`,
            ]
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose one Coin Trick for Free, the rest have a Cost.`,
                `You cannot Start with Coin Deflect, but that Trick has no XP Cost, only Requirements.`,
                `If someone else Hits the Coin they can only use Coin Tricks Unlocked by themselves.`,
                `Hitting the Coin without using a Trick will use up its power, thus Disabling it.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Split</b> (Ranged Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Single Target Ranged Attack, it can reflect it in a different Direction, and Split the Coin.`,
                `This makes 2 Projectiles, the Original Attack, and the Split Coin, and these Attacks can't have the same Target.`,
                `The Split Coin has the same To-Hit, Range, and CRIT State as the Original Attack, but <box>(1d12 × ESS) Physical Damage</box>`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Reflect</b> (Line Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Line Attack, it can Reflect it in some Direction.`,
                `This reflection can Attack and Hit the same Target another time.`,
                `If a Target is Hit multiple times, rather than multiple Damages, the Damage is <a href="../main/mechanics.html#maximize_and_minimize">Maximized</a>.`,
                `Coin Reflect also works on Abilities which move the Caster in a Line, like Charge or Flash Strike.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Coin Bounce</b> (Melee Attacks) <box>Unlock: 5 XP</box>:`,
                `When the Coin is Hit by a Melee Attack, it's sent out as a Ranged Attack.`,
                `The Coin will have the same Stats as the Original Attack, but Single Target with <box>40 / 80 × ESS^(1/3)</box> Range.`,
                `The Coin can inherit all On-Attacks of the Melee Attack, including Melee Only On-Attacks.`,
                `On a Hit the Coin can bounce up to <box>2 × ESS^(1/3)</box> meters in a chosen direction, and be <b>Usable Again</b> with Refreshed Duration.`,
                `If an AOE Melee Attack Hits multiple Coins, the Coins mustn't Attack the same Target.`,
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
                ["Throw Range", "Same as Finesse Throw Weapon"],
                ["Coin Duration", "Till the End of your Next Turn"],
            ],
        },
    ],
}