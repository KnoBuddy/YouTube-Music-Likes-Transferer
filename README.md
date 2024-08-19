# YouTube Music Likes Transferer

This script likes all the songs in a Youtube Music Playlist at once, this allows the use to move likes from one Google account to another. This is especially helpful if you would like to delete an account or migrate to another personal non workspace account. This way YouTube Music still knows what kind of music you like. Adding a playlist with those tracks doesn't tell the algorithm nearly as much.

# Use at own risk!
- There has been at least one user that complained that their account was suspended because "YouTube thought I was doing "Fake Engagement" by automating likes."
- I have successfully transferred well over 1,000 song likes between accounts with this method, and have hundreds more to go. Will definitely update if I am suspended or have negative consequences.
- It may be advisable to use the music.youtube.com-playlist-liker-random-intervals.js file instead of the one with a set interval. It is very easy to change the few numbers from 10 and 100 to whatever you feel comfortable with. One user way brave and went from 0 and 5 seconds. YMMV!!!

# Instructions:

If you navigate to the Liked playlist from the homepage of the Android app (I assume iOS has a similar functionality), you can long-press the liked playlist and select Save to playlist. Name the playlist and make sure public or unlisted is selected. (You have to create a channel for the public or unlisted option to appear; it will prompt you if you don't already have one created).

Head over to your Library and click the three dots icon next to the playlist you just created of your likes, and share the link/copy it, however you can, to get to a Chrome browser. (I used the Google QuickShare app on Windows, but this should work the same on iOS assuming the app allows for creating playlists from liked music). You could simply email your new Google account the link as well.

Head over to music.youtube.com on your computer and make sure you are signed into the account you want to copy the playlist to. Enter the public or unlisted playlist link you copied earlier, then click the three dots and save the playlist to your new Google account. (URL looks like: `https://music.youtube.com/playlist?list=...`)

# How to use the script

- If you have an extremely large playlist, you will need to use the scrollbar several times to get it to load as many songs as possible into the webpage. I've noticed a limit of about ~1000 tracks and if your playlist is larger you will have to run this script multiple times and follow the steps over and over until all songs are liked.
- Press `ctrl` + `shift` + `j`. This opens the Developer Console.
- Copy the script you'd prefer to use. Choose `music.youtube.com-playlist-liker.js`, or if you prefer a possibly safer and longer method you can try the `music.youtube.com-playlist-liker-random-intervals.js` script as well.
- I suggest clicking the raw button at the top right, using CTRL + A to select all then copy.
- Paste the code into the Developer Console you just opened on the music.youtube.com Tab, hit enter.
- Great, now wait until the script runs. 
- If large numbers of songs are in the playlist expect to wait 10 seconds multiplied by the total of the songs in the playlist. This means hundreds or thousands of songs are going to take hours.
- There is also a cap on the number of songs that can be displayed (~1000) in the window in music.youtube.com, so be prepared to repeat the process after doing lots of scrolling and then running the script and refreshing the window and scrolling and trying again if your playlist is longer than 1000 songs.

### Changes I've Made From Original Gist:
0. Added detailed instructions on how to move playlists.
1. likeNext Function: This function is responsible for processing each song one by one.
2. Conditionally Engage Wait: If a song is already liked (aria-pressed="true"), it skips the wait period and moves to the next song immediately.
3. Wait Only for Unliked Songs: The wait period is only applied when a song is actually liked.
4. Timer Initialization: The script initializes a startTime at the beginning of the script using Date.now().
5. Elapsed Time Calculation: After each action (whether a song is liked or skipped), the script calculates the elapsed time by subtracting startTime from the current time and then converts it to seconds with two decimal precision.
6. Output with Timer: The elapsed time is appended to each log output, providing a real-time view of how long the script has been running after each action.
7. Updated Remaining Count for Skipped Songs: When a song is already liked, the script now subtracts one from the left count, updating the remaining number of songs.
8. Log Message Update: The log message now reflects the updated number of songs left, regardless of whether the song was liked or skipped.
9. Singular/Plural Form Handling: ex: Hours, minutes, and seconds are now correctly displayed in singular form if the elapsed time is 1 for any unit. For example, 1 hour, 1 minute, 1 second and 2 hours, 3 minutes, 5 seconds are displayed as expected.

### For randomized timing script:

10. Random Interval Generator: The getRandomInterval function generates a random time interval between 10 and 100 seconds.
11. Randomized Wait Period: The script now waits for a randomly generated time (between 10 and 100 seconds) before moving to the next song.



⭐ If you found this repository helpful, please consider giving it a star. I also appreciate follows on my GitHub profile!

[![Follow Badge](https://img.shields.io/badge/-%40KnoBuddy-blue?style=for-the-badge&logo=github&logoColor=green&label=Follow&link=https%3A%2F%2Fgithub.com%2FKnoBuddy)](https://github.com/KnoBuddy)


Original Creator: (Make sure and give him a follow as well)

[![Follow Badge](https://img.shields.io/badge/-%40TheOnlyWayUp-blue?style=for-the-badge&logo=github&logoColor=green&label=Follow&link=https%3A%2F%2Fgithub.com%2FTheOnlyWayUp)](https://github.com/TheOnlyWayUp)
