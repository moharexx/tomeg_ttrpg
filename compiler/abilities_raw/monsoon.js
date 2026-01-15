module.exports = {
    name: "Monsoon",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 DES), (5 Transmutation | 10 Conjuration | 20 Evocation)",
    ],
    tags: [
        "Utility",
        "Flow Sphere AOE, Crowd Control",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "Within Range, choose a Sphere in which wind swirls and whirls with intensity.",
                "When using this Ability, you are put in Monsoon Stance.",
                "When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>STR Save</b> or get Forcefully Moved.",
                "Each time you decide if the Ability Pulls to it's center or Pushes from it's center.",
                "If the Ability Pulls, the AOE Flows from the Radius's Edge inwards.",
                "If the Ability Pushes, the AOE Flows from it's point of Origin outwards.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>On Stance Trigger:</b>",
                "You can Double it's </b>Pull and Push Distance</b>",
                "This Stance Trigger can be done Before the Targets Make their Saves.",
                "This can be done only once on this Ability.",
                "This Stance does NOT Break when you Trigger it.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering another Stance.",
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
                ["Stance Trigger", "Main-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["STR Save", "14 × ESS"],
                ["Pull and Push Distance", "ESS^(1/3)"],
            ],
        },
    ],
}