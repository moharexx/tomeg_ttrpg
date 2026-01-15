module.exports = {
    name: "Blade Whirl",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "50 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Melee Weapon",
    ],
    tags: [
        "Offense, Defense",
        "Weapon Damage, Negation, Flow Cylinder AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "You slash with your Blade around yourself, Creating a wind Wall to protect yourself.",
                "This is a Cylinder AOE Melee Attack.",
                "At the edge of the Radius, you create a Circle from which the Wall Flows from up and down.",
                "At the Start of your Next Turn, you repeat the Melee Attack in the Radius, with which the Wall Ends.",
                "If the Wall is reduced to 0 HP, you do NOT repeat the Melee Attack.",
                "The Ability has Armor-Pen equal to the Parent Weapons Armor-Pen.",
                "The Damage and Wall HP depends on Weapon Weight.",
                "Medium Weapons can Choose From one of the two."
            ],
        },
        {
            type: "dots",
            content: [
                "The Wall is Transparent.",
                "Projectiles inside the Wall are NOT effected.",
                "Projectiles coming from above the Wall can enter.",
                "If a Projectile reduces the Wall to 0 HP, it goes through with reduced Damage equal to the HP it Reduced from the Wall.",
                "This Ability cannot CRIT!",
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Light", "Value"],
                ["Damage", "(1d4 × ESS) Weapon Damage Type"],
                ["Wall Health", "6 × ESS"],
                ["Wall Armor VS Physical", "6 × ESS"],
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Heavy", "Value"],
                ["Damage", "(1d8 × ESS) Weapon Damage Type"],
                ["Wall Health", "16 × ESS"],
            ],
        },
        {
            type: "p",
            content: [
                `<i>"Don't think so."</i>`,
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
                ["Duration", "Until the Start of Your Next Turn | Until the Wall has 0 HP"],
                ["Radius", "Melee Reach"],
                ["Wall Height", "5 × Melee Reach"],
            ],
        },
    ],
}