module.exports = {
    name: "Shield Roar",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon",
    ],
    reqs_full: [
        "10 Melee Weapon",
    ],
    tags: [
        "Offense, Defense",
        "Flow Sphere AOE, Crowd Control",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you Fully Negate an Incoming Hit, you can use this Ability to frighten your enemies around you.",
                "Targets, Excluding your Allies, within the Radius make a <b>Soul Save</b> or get the <b>Terror Effect.</b>",
            ],
        },
        {
            type: "dots",
            content: [
                "When this Ability is Used with a Heavy Shield, it's <b>Soul Save</b> is <box>6 × ESS</box>, but it's <b>Radius</b> is Doubled.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Terror Effect:</b>",
                "Entities have Disadvantage on Attacks against the Caster and cannot willfully move closer to the Caster.",
                "The Target can Repeat the Save for this Effect by using a <b>Main-Action.</b>",
                `This Effect Ends if the Caster gets the <a href="../main/mechanics.html#conditions">Dying Condition</a> or Dies.`,
                "Effect Duration: <box>1 Minute (20 Rounds)</box>",
            ],
        },
        {
            type: "p",
            content: [
                "This Ability cannot be used without a Shield Equipped.",
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
                ["Requirement", "Fully Negate an Incoming Hit"],
                ["Soul Save", "8 × ESS"],
                ["Radius", "STR^(1/3)"],
            ],
        },
    ],
}