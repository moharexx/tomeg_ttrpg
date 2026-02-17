module.exports = {
    name: "Barrier Dome",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Abjuration | 10 Conjuration | 20 Enchantment)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Abjuration | 10 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Self, Static Sphere AOE, Shielding",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Barrier Dome Stance</b>.`,
                `When Entering <b>Barrier Dome Stance</b>, a Barrier appears, with you at the center of it.`,
                `Light and sound can pass through, but not at dangerous levels, hence the HP and Armor VS All of the Barrier.`,
                `The Dome doesn't move with the Caster, it stays where it was put! (But the Caster can get outside, with some tricks)`,
                `Entities on the edge will be pushed inside or outside the Barrier when it appears, Casters choice.`,
            ],
        },
        {
            type: "p",
            content: [
                `On the moment of Cast, you can decide if Barrier Dome is Anchored or not.`,
                `When Anchored, Barrier Dome can stay still midair, just floating there, carrying up to <box>500 × ESS Kg</box>`,
                `An Athletics Check of <box>50 × ESS</box> can move an Anchored Barrier Dome. (Passive Checks can be used here)`,
                `Even if not Anchored the Barrier Dome will clip inside the terrain, like the ground or walls.`,
                `If not Anchored, the Barrier Dome is very light, and can be moved, if not clipped to the terrain of course.`,
            ],
        },
        {
            type: "p",
            content: [
                `Some Attacks can bypass the Barrier, by being incorporeal or just being placed inside.`,
                `When an SP Attack goes through the Barrier, the Armor VS All reduces the SP Damage.`,
                `Barrier Dome can be repaired with <a href="../abilities/mending.html" target="_blank">Mending</a>, up to Dome Max HP`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance only Breaks when entering any other Stance.`,
                `This Ability can CRIT for 2× Dome Starting HP, throw your d10 please.`,
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
                ["Stance Trigger", "None"],
                ["Range", "Self"],
                ["Radius", "CS^(1/3)"],
                ["Dome Starting HP", "10 × ESS"],
                ["Dome Max HP", "20 × ESS"],
                ["Dome Armor VS All", "6 × ESS"],
            ],
        },
    ],
}