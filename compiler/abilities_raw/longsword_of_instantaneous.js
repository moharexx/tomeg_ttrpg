module.exports = {
    name: "Longsword Of Instantaneous",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon, Matrial Arts, Transmutation, Enchantment",
    ],
    reqs_full: [
        "1000 Melee Weapon, 1000 Matrial Arts, 1000 Transmutation, 1000 Enchantment",
    ],
    tags: [
        "Offense",
        "Variable Damage, AOE, Mobility",
        "Main-Action + Bonus-Action / Free-Action",
    ],
    unlock_cost: 1000,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Longsword Of Instantaneous Stance.",
                "The Next Round you can Trigger the Longsword Of Instantaneous.",
                "This Ability does NOT Activate Triggers if Target's INIT is less than your Weapon Mastery.",
                "When Longsword Of Instantaneous is Triggered you blink in a Line and make an Attack onto every Entity which touched the Line.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>The Stance Breaks when:</b> <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
            ],
        },
        {
            type: "raw",
            content: `<br><br><br><p class="bottomless"><b>moharexx's Longsword Of The Instantaneous</b><br>This is the name of a move specifically handcrafted by moharexx for achieving not the quickest cast, not the longest distance, not pure damage, but simply having the <b>fastest speed.</b></p>`,
        },
        {
            type: "raw",
            content:
                `<p class="bottomless">It has elements of:</p><ul class="bottomless">
                <li>weapon mastery + martial arts (cuz basics?)</li>
                <li>inertia control (into surrounding conjured material (in my case fire))</li>
                <li>spatial manipulation (duh)</li>
                <li>local physics manipulation (to increase the max speed / speed of light on yourself, reduce your mass)</li>
                <li>change/time manipulation (for extra "charge" potential, slow down time, and at cast time instantly speed it up)</li>
                </ul>`,
        },
        {
            type: "p",
            content: [
                "It might be the fastest ability, but due to moharexx's lacking speed it is not the fastest in moharexx's hand, if there would be a hyperentity of speed, or someone more skilled who mastered the move they would easily be faster.",
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
                ["Stance Trigger", "Free-Action at Your Next Turn"],
                ["To-Hit Multiplier", "2×"],
                ["Line Length", "MS"],
                ["Damage", "(2d4 × ESS) Weapon Damage"],
                ["Penetration", "9 × ESS"],
            ],
        },
    ],
}