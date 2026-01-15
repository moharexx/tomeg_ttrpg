module.exports = {
    name: "Brainrot",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Divination | 20 Anima | 50 Enchantment",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 50 EGO), (10 Divination | 20 Anima | 50 Enchantment)",
    ],
    tags: [
        "Offense",
        "Self, Flow Sphere AOE, Soul Save, Crowd Control",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `<b><i>"MUSTAAAAARD!!!!"</i></b>`,
                `An aura of mind rotting informational noise eminates out from you.`,
                `This is a Melee Crawl Sphere AOE Save, not Targeting the Caster.`,
                `Targets must make a <b>Soul Save</b>, on Fail they gain the <a href="../main/mechanics.html#conditions" target="_blank">Stunned Condition.</a>`,
                `The <b>Stunned Condition</b> lasts till the End of Target's Next Turn.`,
            ],
        },
        {
            type: "dots",
            content: [
                `This Crawl AOE flows through regular physical matter which has no Soul Circuitry or Magical Enhancements.`,
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
                ["Range", "Self"],
                ["Radius", "CS^(1/3)"],
                ["Soul Save", "8 × ESS"],
            ],
        },
    ],
}