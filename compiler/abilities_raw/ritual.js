module.exports = {
    name: "Ritual",
    category: "meta",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Arcana | Anima",
    ],
    reqs_full: [
        "10 Arcana | 10 Anima",
    ],
    tags: [
        "AOE +, Range +, ESS +",
        "Action Cost ++",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You Increase the Casting Time of a Spell, and Increase the ESS you put into it for each jump in Casting Time.",
                "The Spell is Cast with Multiplied AOE Size, Range, and ESS.",
            ],
        },
        {
            type: "p",
            content: [
                "This Meta-Ability can be used even when the <b>Spell Memorization</b> Feature is used for Casting.",
                "When you use Ritual with <b>Spell Memorization</b>, you can use other Unlocked Meta-Abilities.",
            ],
        },
        {
            type: "p",
            content: [
                "While Casting a Ritual it takes a <b>Main-Action + Bonus-Action</b> on each of your Turns.",
                "If you get Damaged while Casting, Roll a <box>(Soul | VIT) Save of Damage Recieved</box>",
                "If the Save is Failed the Ability is instantly Cast on the Caster, with the highest reached time in the Cast Time Table.",
                "<b>Example:</b> Rital Casting Fireball, 2 Hours in, attacked and Failed the Save, Fireball explodes on the Caster with the 1 Hour Ritual Multiplier.",
                "The Spell also catastrophically Fails if the <b>Main-Action + Bonus-Action</b> is not provided.",
            ]
        },
        {
            type: "p",
            content: [
                "You can Ritual Stances, but only Stances which have some kind of Duration or Continuous effect, and is an AOE.",
                "After the Ritual is complete you place down the Stance's AOE on a point in <box>10 × CS^(1/3) meters</box>",
                "It will be count as an Active Ability, with a Duration of 1 Minute (20 Rounds), and you will NOT be in a Stance.",
                "The Stance can still be Triggered normally, this Ends the Ability as normal, unless the Stance states that it remains after Trigger.",
            ]
        },
        {
            type: "dots",
            content: [
                "You cannot use Ritual on Reactive and On-Attack Type Abilities!",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Cast Time Table:</b>",
                "Up to Main-Actions + Bonus-Action",
                "1 Minute (20 Rounds)",
                "1 Hour (1200 Rounds)",
                "1 Day (28800 Rounds)",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Community Ritual</b> (20 Arcana | 20 Anima):",
                "You can invite in others to participate in the Ritual.",
                "??? shortening? Potency? (WIP)",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Pause Ritual</b> (50 Arcana | 50 Anima):",
                "As a <b>Main-Action + Bonus-Action</b> you can Pause the Ritual.",
                "You can Resume it at the same Place it was Paused at.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Ritual Anything</b> (1000 Arcana | 1000 Anima):",
                "The Restriction that only Spells can be Ritual Casted is lifted.",
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
                ["Type", "Spell"],
                ["(AOE, Range, ESS) Multiplier", "(Cast Time Jumps) + 1"],
            ],
        },
    ],
}