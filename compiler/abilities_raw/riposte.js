module.exports = {
    name: "Riposte",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Melee, Weapon Damage, Negation",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When getting Targeted by an Attack within your Melee Reach, you can Riposte, redirecting the Attack and striking back.",
                "Make an <b>Attack-Action</b> against your Attacker, if your Attack's To-Hit is greater than the Incoming Attack's, you Successfully Riposte.",
                "This means not getting Hit by the Attack, and your Attack being made against your Attacker.",
                "If the Riposte Failed, then you are <b>Hit</b>, and your Attack isn't made.",
            ],
        },
        {
            type: "dots",
            content: [
                "When you Riposte an AOE Attack, you Stop it's Flow like if you regularly Negated it.",
                `After a Successful Riposte, if you can normally make the <a href="../main/mechanics.html#attack_action" taget="_blank">Attack-Action</a> with a <b>Bonus-Action</b>, apply Advantage to the Riposte Attack.`,
                "This Advantage only applies to the Riposte after it's already been Successful, and cannot make a Failed Reposte into a Success!",
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
                ["Trigger", "Getting Targeted by an Attack"],
            ],
        },
    ],
}