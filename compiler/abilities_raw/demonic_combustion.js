module.exports = {
    name: "Demonic Combustion",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (50 INT | 20 WILL | 20 EGO), (10 Anima | 20 Enchantment | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Necrotic Damage, Crawl Sphere AOE, Executing",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action, REST-HP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Demonic Combustion Stance.</b>",
                "On Stance Trigger, you make a Crawl Sphere AOE Melee Save, flowing out from you.",
                "Entities within the Radius must Succeed a <b>Soul Save</b> or take Damage.",
                "This Ability doesn't Damage the Caster.",
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing.</a>`,
                "While in this Stance, your Rolled INIT for the purpose of Turn Order is 0.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
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
                ["Ability Cost", "(20 REST-HP) × ESS"],
                ["Radius", "2 × CS^(1/3)"],
                ["Soul Save", "14 × ESS"],
                ["Damage", "(2d10 × ESS) Necrotic"],
            ],
        },
    ],
}