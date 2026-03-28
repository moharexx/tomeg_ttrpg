module.exports = {
    name: "Master Brawler",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Athletics | 5 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 Athletics | 5 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Self",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Master Brawler Stance</b>.`,
                `While in <b>Master Brawler Stance</b>, you gain access to 2 new Actions and 1 Free Wielding Slot which can only be used to Grapple a Target.`,
                `If a Target Fails a <b>Grapple</b> or <b>Shove STR Save</b>, you can deal <box>2 × ESS</box> Physical Damage with <box>10 × ESS</box> Armor-Pen.`,
                `Already Grappled Target can take this Damage, on a Failed <b>STR Save</b> of <box>Athletics Modifier</box> at The Start of Your Turns.`,
                `A Target can only take this Damage once on a Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Restrain</b> (Main-Action):`,
                `You can <a href="../mechanics/grapple.html">Grapple</a> or <a href="../mechanics/shove.html">Shove</a> with a Bonus <box>4 × ESS</box> Save Difficulty.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Into The Dirt</b> (Free-Action):`,
                `You can <b>Shove</b> a Target Grappled by You, which will end the <b>Grapple</b> on the Target.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "None"],
                ["Physical Damage", "2 × ESS"],
                ["Armor-Pen", "10 × ESS"],
            ],
        },
    ],
}