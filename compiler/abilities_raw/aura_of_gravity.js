module.exports = {
    name: "Aura Of Gravity",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Enchantment | 20 Anima)",
    ],
    tags: [
        "Offense",
        "Melee, Static Sphere AOE, STR Save, Debuff, Crowd Control",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Aura Of Gravity Stance</b>.`,
                `While in <b>Aura Of Gravity Stance</b>, you warp Gravity around yourself.`,
                `Chosen Entities when entering the Radius must Succeed a <b>STR Save</b> of <box>6 × ESS</box> or get the <a href="../main/mechanics.html#conditions" target="_blank">Dazed Condition</a>.`,
                `On a Successful Save, the Target Entity is immune to this Aura for <box>1 Minute (20 Rounds)</box>`,
                `The <b>Dazed Condition</b> from this Ability lasts for <box>1 Minute (20 Rounds)</box>, and is only effective while the Target is within the Radius.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b> (Main-Action + Bonus-Action):`,
                `Chosen Targets must Succeed a <b>STR Save</b> of <box>10 × ESS</box>, even those that have Save immunity from this Stance.`,
                `On a Failed Save: the Targets get the <b>Prone Condition</b>, and the <a href="../main/mechanics.html#conditions">Stunned Condition</a> until the End of Their Next Turn.`,
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
                ["Radius", "3 × ESS^(1/3)"],
                ["STR Save", "6 × ESS"],
            ],
        },
    ],
}