Simple Daily Routine Planner (Web Prototype)

Description

This is a basic web-based prototype application designed to help you plan and track your daily routine. It allows you to add tasks scheduled for specific times, mark them as complete, and delete them. The application uses HTML for structure, CSS for styling, and JavaScript for interactivity. Your routine for the *current day* is saved locally in your web browser's storage, so it persists even if you refresh the page.

Created: April 14, 2025

## Features

* **Add Routine Items:** Schedule activities with a specific time and description.
* **View Today's Plan:** Displays all added items for the current day, automatically sorted by time.
* **Mark as Complete/Incomplete:** Toggle the completion status of each item (visualized with a line-through).
* **Delete Items:** Remove unwanted items from the list.
* **Date Display:** Shows the current date.
* **Local Persistence:** Uses the browser's Local Storage to save the routine *for the current day only*. Data is remembered if you refresh the page or close and reopen the browser, but **only on the same computer and browser**.

## How to Run

1.  **Download Files:** Make sure you have the `index.html`, `style.css`, and `script.js` files saved in the same folder (e.g., a folder named `daily-routine-planner`).
2.  **Open in Browser:** Navigate to the folder where you saved the files using your computer's file explorer.
3.  **Launch:** Double-click the `index.html` file. It should open automatically in your default web browser (like Chrome, Firefox, Edge, Safari).
4.  **Use:** The routine planner interface will load, and you can begin adding your schedule items for the day.

## Technology Used

* HTML5
* CSS3
* JavaScript
* Browser Local Storage API

## Limitations

* **Prototype Only:** This is a basic demonstration and lacks many features of a full application.
* **Local Storage Only:** Data is *not* synced across different devices or different browsers. It's stored locally on the machine where it was entered.
* **Day-Specific:** It only manages the routine for the current calendar day based on your system clock. You cannot view past or plan future days with this interface.
* **No Cloud Backup:** Clearing your browser's cache or local storage data will permanently delete your saved routine items.
* **No Reminders:** Does not provide pop-up notifications or alarms.

## Potential Future Enhancements (Ideas)

* Ability to edit existing routine items.
* Adding notes or details to items.
* Viewing routines from past days.
* Adding priority levels or tags.
* Basic theming options.

---

This README provides a good overview for anyone (including yourself later) looking at the project files.
