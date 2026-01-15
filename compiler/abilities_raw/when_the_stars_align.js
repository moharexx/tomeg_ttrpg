module.exports = {
    name: "When The Stars Align",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "1000 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 1000 Evocation",
    ],
    tags: [
        "Offense",
        "Heat + Demat + Thunder + Radiant Damage, Flow Line AOE",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 1000,
    description: [
        {
            type: "p",
            content: [
                `<i><b>"When the Stars Align..."</b></i>`,
                `When using this Ability, you are put in <b>When The Stars Align</b> Stance.`,
                `You predetermine in which direction the Beam will go on Trigger, this direction is obvious to any observer.`,
                `While in <b>When The Stars Align</b> Stance your Rolled INIT counts as 0 for the purpose of Round Order.`,
                `The Next Turn you can Trigger the <b>When The Stars Align.</b>`,
                `On Trigger you shoot out a massive Beam of pure power, this is a Flow Line AOE Attack.`,
                `After the Initial Attack, the Line Travels it's Length at the Start of every Round, repeating the Attack, for <box>9 Rounds.</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>`,
                `This Ability CANNOT CRIT.`,
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
                ["Stance Trigger", "Main-Action + Bonus-Action at Your Next Turn"],
                ["Line Length", "9 × CS^(1/3)"],
                ["Line Width", "1 × CS^(1/3)"],
                ["Line Lifetime", "9 Rounds"],
                ["To-Hit Bonus", "9 × ESS"],
                ["Heat Damage", "9 × ESS"],
                ["Demat Damage", "9 × ESS"],
                ["Thunder Damage", "9 × ESS"],
                ["Radiant Damage", "9 × ESS"],
            ],
        },
    ],
}