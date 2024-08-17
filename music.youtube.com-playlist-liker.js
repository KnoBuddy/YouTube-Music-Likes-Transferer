// script originally made by https://github.com/TheOnlyWayUp, if it helped, drop a follow!
// source: https://gist.github.com/TheOnlyWayUp/4452b0a5c151740417c16f3518fb701e
// added features by https://github.com/KnoBuddy
// new source: https://gist.github.com/KnoBuddy/9498ec7fd6cf9a32f8bc530ef43cfb57
// Added features by KnoBuddy:
// 1. likeNext Function: This function is responsible for processing each song one by one.
// 2. Conditionally Engage Wait: If a song is already liked (aria-pressed="true"), it skips the wait period and moves to the next song immediately.
// 3. Wait Only for Unliked Songs: The wait period is only applied when a song is actually liked.
// 4. Timer Initialization: The script initializes a startTime at the beginning of the script using Date.now().
// 5. Elapsed Time Calculation: After each action (whether a song is liked or skipped), the script calculates the elapsed time by subtracting startTime from the current time and then converts it to seconds with two decimal precision.
// 6. Output with Timer: The elapsed time is appended to each log output, providing a real-time view of how long the script has been running after each action.
// 7. Updated Remaining Count for Skipped Songs: When a song is already liked, the script now subtracts one from the left count, updating the remaining number of songs.
// 8. Log Message Update: The log message now reflects the updated number of songs left, regardless of whether the song was liked or skipped.
// 9. Singular/Plural Form Handling: ex: Hours, minutes, and seconds are now correctly displayed in singular form if the elapsed time is 1 for any unit.
// For example, 1 hour, 1 minute, 1 second and 2 hours, 3 minutes, 5 seconds are displayed as expected.

let total = 0;
let left = 0;
const interval = 10;  // static wait time in seconds
const startTime = Date.now();

const ytmLog = msg => {
    const elapsedTime = Date.now() - startTime;
    const elapsedHours = Math.floor(elapsedTime / 3600000); // convert milliseconds to hours
    const elapsedMinutes = Math.floor((elapsedTime % 3600000) / 60000); // convert remainder to minutes
    const elapsedSeconds = Math.floor((elapsedTime % 60000) / 1000); // convert remainder to seconds

    let formattedTime = '';
    if (elapsedHours > 0) {
        formattedTime += `${elapsedHours} hour${elapsedHours > 1 ? 's' : ''}, `;
    }
    if (elapsedMinutes > 0 || elapsedHours > 0) {
        formattedTime += `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''}, `;
    }
    formattedTime += `${elapsedSeconds} second${elapsedSeconds > 1 ? 's' : ''}`;

    console.log(`[YTM Liker] ${msg} (Elapsed Time: ${formattedTime})`);
};

function likeAll() {
    let els = document.getElementById("contents").querySelectorAll(
        "button[aria-pressed='false'][aria-label='Like']"
    );

    total = els.length; 
    left = els.length;
    ytmLog(`Total Queue: ${total}`);

    function likeNext(index) {
        if (index >= els.length) {
            ytmLog('All songs processed.');
            return;
        }

        let el = els[index];

        // Check if the song is unliked
        if (el.getAttribute("aria-pressed") === "false") {
            el.click();
            left--;
            ytmLog(`Liked a song. ${left} songs left out of ${total}.`);

            // Wait a static 10 seconds before liking the next unliked song
            ytmLog(`Waiting ${interval} second${interval > 1 ? 's' : ''} before next action.`);
            setTimeout(() => likeNext(index + 1), interval * 1000);
        } else {
            left--;  // Subtract the skipped song from the remaining count
            ytmLog(`Song already liked. Skipping. ${left} songs left out of ${total}.`);
            likeNext(index + 1);  // No wait, move to the next song
        }
    }

    likeNext(0);
}

likeAll();
