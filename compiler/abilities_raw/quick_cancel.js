module.exports = {
    name: "Quick Cancel",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 INIT | 20 acrobatics | 20 intuition",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 INIT | 20 acrobatics | 20 intuition",
    ],
    tags: [
        "Defense",
        "Self, Negation",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When you Trigger a Reaction or Stance, you can Cancel your Action which did that.`,
                `This means your Action, Movement, or Ability never happened, but you do <b>NOT</b> get back the <b>Action Cost</b> of it.`,
                `The Reaction or Stance you Triggered still goes off, possibly wasting it.`,
            ],
        },
        {
            type: "p",
            content: [
                `If your <box>INIT + (10 × ESS)</box> is less than their INIT, then you Fail to Cancel in time, and this Ability does nothing.`,
            ],
        },
        {
            type: "p",
            content: [
                `innit.`,
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
                ["Trigger", "you Trigger a Stance or Reaction"],
                ["Bonus INIT", "10 × ESS"],
            ],
        },
    ],
}