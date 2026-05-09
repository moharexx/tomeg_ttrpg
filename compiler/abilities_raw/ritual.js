module.exports = {
    name: "Ritual",
    category: "meta",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Arcana | 10 Anima",
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
                `Increase the Casting Time of a Spell, and Increase its Stats based on the amount of Jumps in Casting Time.`,
                `The Spell is Cast with Multiplied Range, Size, and Effective ESS; <box>(Jumps in Cast Time) + 1</box>`,
                `This Effective ESS Multiplier has NO effect on Range and Size scalings (Ritual already provides its own).`,
            ],
        },
        {
            type: "p",
            content: [
                `While Casting a Ritual it takes a all of your Actions on each of your Turns.`,
                `If you get Damaged while Casting, Roll a <box>(Soul | VIT) Save of Damage Received</box>`,
                `If the Save is Failed, the Ritual Catastrophically Fails, instantly Casting the Ability on the Caster.`,
                `<b>Example:</b> Rital Casting Fireball, 15 Minutes in, Save Failed! Fireball explodes on the Caster with the 1 Minute Ritual Multipliers.`,
                `The Spell also Catastrophically Fails if the Caster has an Action reducing Condition on their Turn.`,
                `The Caster can safely stop the Ritual by Spending all their Actions that Turn.`,
            ]
        },
        {
            type: "dots",
            content: [
                "You cannot use Ritual on Reactive, On-Attack, and Stance Type Abilities!",
            ],
        },
        {
            type: "list",
            content: [
                `<b>Cast Time Table:</b>`,
                `1 Round (Some Actions)`,
                `1 Minute (20 Rounds)`,
                `1 Hour (1200 Rounds)`,
                `1 Day (28800 Rounds)`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Community Ritual</b> (20 Arcana | 20 Anima):`,
                `You can invite in others to participate in the Ritual.`,
                `The Ritual speeds up proportional to the Participants' Total XP (based on the Caster's).`,
                `Participants can safely leave at any time (the original Caster can't).`,
                `<b>Example:</b> Your party joins the Ritual, 2 People with the same Total XP as you speeds up the Ritual to by +2× thus 3× speed.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Pause Ritual</b> (50 Arcana | 50 Anima):`,
                `As a <b>Bonus-Action</b> you can Pause the Ritual.`,
                `A Paused Ritual can be easily Disrupted (Catastrophically Fail at the Position) or Dispelled. (WIP)`,
                `You can Resume it at the same Place it was Paused at.`,
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
                ["(AOE, Range, ESS) Multiplier", "(Jumps in Cast Time) + 1"],
            ],
        },
    ],
}