/**
 * AUDIO-DATA.js
 * Manage your MP3 files and Lesson Titles here.
 */
const AUDIO_DATABASE = {
    "R1": {
        label: "R1 - L1 to L10",
        lessons: [
            { id: "L1", title: "Greeting & Names", file: "t2_l1.mp3" },
            { id: "L2", title: "Daily Routines", file: "t2_l2.mp3" },
            { id: "L3", title: "My Family", file: "t2_l3.mp3" },
            { id: "L4", title: "School Subjects", file: "t2_l4.mp3" },
            { id: "L5", title: "Hobbies", file: "t2_l5.mp3" },
            { id: "L6", title: "At the Park", file: "t2_l6.mp3" },
            { id: "L7", title: "Shopping", file: "t2_l7.mp3" },
            { id: "L8", title: "Food & Drinks", file: "t2_l8.mp3" },
            { id: "L9", title: "Weather", file: "t2_l9.mp3" },
            { id: "L10", title: "Review 1", file: "t2_l10.mp3" },
            { id: "R1", title: "Bimester Review 1", file: "t2_r1.mp3", isReview: true }
        ]
    },
    "R2": {
        label: "R2 - L11 to L20",
        lessons: [
            { id: "L11", title: "New lesson 11", file: "t2_l11.mp3" },
            // ... add more following the pattern
            { id: "R2", title: "Bimester Review 2", file: "t2_r2.mp3", isReview: true }
        ]
    }
    // R3, R4, R5, R6... simply follow the structure above
};