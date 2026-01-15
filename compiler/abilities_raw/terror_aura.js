module.exports = {
    name: "Terror Aura",
    category: "stance",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "Performance",
        "Enchantment | Divination | Anima",
    ],
    reqs_full: [
        "50 Performance",
        "(50 INT | 20 WILL | 20 EGO), (20 Enchantment | 20 Anima | 50 Divination)",
    ],
    tags: [
        "Utility",
        "AOE, Crowd Control, Debuff",
        "Main-Action + Bonus-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Terror Aura Stance.",
                "When Entities move into the Radius, they must make a Soul Save.",
                "When an Entity Starts it's Turn Within the Radius, they must make a Soul Save.",
                "When this Stance is Triggered, all Entity in Radius must make a Stance Trigger Soul Save.",
                "On a Failed Save they gain the Terror Effect.",
            ],
        },
        {
            type: "list",
            content: [
                "Terror Effect:",
                "Entities have Disadvantage on Attacks against the Caster and cannot willfully move closer to the Caster.",
                `This Effect Ends if the Caster gets the <a href="../main/mechanics.html#conditions">Dying Condition</a> or Dies.`,
                "Effect Duration: <box>1 Minute (20 Rounds)</box>",
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
                ["Stance Trigger", "Main-Action Next Round"],
                ["Radius", "CS^(1/3)"],
                ["Soul Save", "6 × ESS"],
                ["Stance Trigger Soul Save", "10 × ESS"],
            ],
        },
    ],
}