module.exports = {
    name: "Master Brawler",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Athletics | Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Self, Crowd Control",
        "Main-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Master Brawler Stance.</b>`,
                `While in <b>Master Brawler Stance</b>, you have 1 Free Wielding Slot which can be used only to Grapple a Target.`,
                `While in <b>Master Brawler Stance</b>, you can use <a href="../mechanics/grapple.html">Grapple</a> or <a href="../mechanics/shove.html">Shove</a> as a <b>Main-Action</b> to gain a Bonus <box>4 × ESS</box> to the Save Difficulty.`,
                `While in <b>Master Brawler Stance</b>, you can <b>Shove</b> a Target as A Free-Action, which will end the <b>Grapple</b> on the Target.`,
                `While in <b>Master Brawler Stance</b>, when you <b>Grapple</b> or <b>Shove</b> a Target, you can deal <box>2 × ESS</box> Physical Damage with <box>10 × ESS</box> Armor-Pen.`,
                `Already Grappled Target can take this Damage, on a Failed <b>STR Save</b> of <box>Athletics Modifier</box>`,
                `A Target can only take Damage from this <b>Stance</b> once on a Turn.`,
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
                ["Cast Time", "Main-Action"],
                ["Stance Trigger", "None"],
                ["Damage", "2 × ESS"],
                ["Armor-Pen", "10 × ESS"],
            ],
        },
    ],
}