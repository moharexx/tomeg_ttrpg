module.exports = {
    name: "Telekinesis",
    category: "passive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 20 DES), (5 Transmutation | 10 Enchantment | 20 Evocation)",
    ],
    tags: [
        "Offense, Defense, Utility, Unlocks",
        "Physical Damage, Crowd Control",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You have Telekinetic Abilities, these Abilities have Action Costs and an Unlock Cost.",
                `You can use the <a href="../main/mechanics.html#interact">Interact Action</a> with Telekinesis.`,
                "When interacting, lifting, and moving inanimate object you take the Force's STR into account, dividing it if there are more Objects.",
                "When you Unlock this Ability, you get 1 of the Unlocks for Free.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Grab</b> (5 XP):",
                "As a <b>Free-Action</b>, you can Grab inanimate Objects you can Pinpoint in Range.",
                "As a <b>Main-Action</b>, Grab an Entity if they Fail a <box>CS (STR | AGI) Save</box>",
                `A Grabbed Entity is <a href="../main/mechanics.html#conditions">Rooted.</a>`,
                `The <b>Move Unlock</b> and <b>Crush Unlock</b> automatically Succeeds against <b>Grabbed Targets.</b>`,
                "The Entity can repeat the Save as a Bonus-Action.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Move</b> (5 XP):",
                "Moving inanimate Objects is a <b>Free-Action.</b>",
                "If you move an Entity, it will costs a <b>Main-Action.</b>",
                "Move Distance: <box>3 × ESS^(1/3)</box>",
                "A Target not already Grabbed will throw a <box>CS (STR | AGI) Save</box> against this.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Eject</b> (5 XP):",
                "As a <b>Main-Action</b> you can Eject an inanimate Object in Range, this is a Projectile Attack.",
                "Eject-Range: <box>10 / 20 × CS^(1/3)</box>",
                "Damage: <box>(2d10 × ESS) Physical</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Crush</b> (5 XP):",
                "As a <b>Main-Action</b> you can attempt to Crush a Target.",
                "Damage: <box>(2d8 × ESS) Physical</box>",
                "A Target not already Grabbed will throw a <box>CS (STR | AGI) Save</box> against this.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Projectile Grab</b> (5 XP):",
                "As a <b>Main-Action Reaction</b> you attempt to catch a Projectile midair in Range.",
                "Grab Strength: <box>2d10 × ESS</box>",
                "If Grab Strength is equal or higher than To-Hit, the Projectile is Grabbed.",
                "If not, the Projectile Attack is unchanged.",
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
                ["Range", "5 × CS^(1/3)"],
                ["(STR | AGI) Save", "CS"],
                ["Telekinesis STR", "10 × ESS"],
            ],
        },
    ],
}