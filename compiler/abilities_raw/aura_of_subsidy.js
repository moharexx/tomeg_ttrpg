module.exports = {
    name: "Aura Of Subsidy",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Anima | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Melee, Static Sphere AOE, Negation, Buff",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Aura Of Subsidy Stance</b>.`,
                `While in <b>Aura Of Subsidy Stance</b>, you Subsidize those your favored Entities.`,
                `Chosen Entities (Excluding yourself) when entering the Radius gain <b>Subsidy</b>, or they can resist this with a <b>Soul Save</b> of <box>10 × ESS</box>`,
                `Entities under <b>Subsidy</b> gain <box>2 × ESS</box> </box> Healing, Shielding, BUFFERS, and Negation.`,
                `On a Successful Save, the Target Entity is immune to this Aura for <box>1 Minute (20 Rounds)</box>`,
                `The <b>Subsidy</b> from this Ability is only effective while the Target is within the Radius.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b> (Main-Action + Bonus-Action):`,
                `Chosen Targets must Succeed a <b>Soul Save</b> of <box>14 × ESS</box>, even those that have Save immunity from this Stance.`,
                `On a Failed Save: the Targets get the <b>Subsidy</b> with <box>2 × ESS</box> </box> Healing, Shielding, BUFFERS, and Negation until the End of your Next Turn.`,
                `On a Successful Save: nothing.`,
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
                ["Bonus Support", "2 × ESS"],
            ],
        },
    ],
}