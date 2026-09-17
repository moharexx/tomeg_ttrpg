module.exports = {
    name: "Sanctuary",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Abjuration | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 CS, (5 Abjuration | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Defense",
        "Touch, Negation, Buff, Unlock",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you protect a Touched Entity.`,
                `The Touched Target gains <b>Sanctuary</b>, the Target can resist this with a <b>Soul Save</b> of <box>14 × ESS</box>`,
                `An Attacker must Succeed a <b>Soul Save</b> to be able to Target an Entity under <b>Sancuary</b> with anything harmful. (Any Offense Tagged Ability)`,
                `On a Fail the Attacker's Action is wasted.`,
                `If an Entity under <b>Sanctuary</b> attempts to directly harm anyone else, they lose the <b>Sanctuary</b> effect.`,
                `"Anything harmful" is kinda up do GM, be logical please and reasonable. (pov: me when i cope)`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Mass Sanctuary</b> (10 XP):`,
                `You make this Ability into a Stance for enchanced effects.`,
                `Entities Within the Radius (Excluding yourself) gain <b>Sanctuary</b>, the Targets can resist this with a <b>Soul Save</b> of <box>14 × ESS</box>`,
                `You don't gain any of the benefits from the <b>Sanctuary</b>, but must still follow its rules, or the Stance Breaks.`,
                `This Stance Breaks from: <box>Using Abilities, Sanctuary Break Conditions</box>`,
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Stance Stats", "Value"],
                ["Action Cost", "Main-Action + Bonus-Action"],
                ["Trigger", "None"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "10 × ESS^(1/3)"],
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
                ["Cast Time", "Main-Action"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "Touch"],
                ["Soul Save", "14 × ESS"],
            ],
        },
    ],
}