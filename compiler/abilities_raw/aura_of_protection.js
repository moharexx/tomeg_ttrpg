module.exports = {
    name: "Aura Of Protection",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Abjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Enchantment | 10 Abjuration | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Melee, Static Sphere AOE, Negation, Buff",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Aura Of Protection Stance</b>.`,
                `While in <b>Aura Of Protection Stance</b>, you Protect those that are closest to you.`,
                `Chosen Entities (Excluding yourself) when entering the Radius gain <b>Protection</b>, or they can resist this with a <b>Soul Save</b> of <box>10 × ESS</box>`,
                `Entities under <b>Protection</b> gain <box>1 × ESS</box> Armor VS All and Save Bonus, To-Hit against them is Reduced by <box>2 × ESS</box>`,
                `On a Successful Save, the Target Entity is immune to this Aura for <box>1 Minute (20 Rounds)</box>`,
                `The <b>Protection</b> from this Ability is only effective while the Target is within the Radius.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b> (Main-Action + Bonus-Action):`,
                `Chosen Targets must Succeed a <b>Soul Save</b> of <box>14 × ESS</box>, even those that have Save immunity from this Stance.`,
                `On a Failed Save: the Targets get <b>Protection</b> with <box>4 × ESS</box> Armor VS All and Save Bonus, <box>8 × ESS</box> To-Hit Reduction until the End of your Next Turn.`,
                `On a Successful Save: nothing.`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>Stance Trigger</b> (Main-Action + Bonus-Action):`,
                `Chosen Targets must Succeed a <b>Soul Save</b> of <box>14 × ESS</box>, even those that have Save immunity from this Stance.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Stance Trigger", "Main-Action + Bonus-Action"],
                ["Radius", "2 × ESS^(1/3)"],
                ["Soul Save", "10 × ESS"],
                ["Armor VS All, Save Bonus", "1 × ESS"],
                ["To-Hit Reduction", "2 × ESS"],
            ],
        },
    ],
}