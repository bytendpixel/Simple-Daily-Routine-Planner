document.addEventListener('DOMContentLoaded', () => {
    const timeInput = document.getElementById('routine-time');
    const activityInput = document.getElementById('routine-activity');
    const addButton = document.getElementById('add-button');
    const routineList = document.getElementById('routine-list');
    const dateDisplay = document.getElementById('current-date');

    // --- Date Handling ---
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-IN', options); // Use 'en-IN' for India locale if needed, otherwise 'en-US' is common
    const storageKey = `routine_${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`; // Key for localStorage based on date
    dateDisplay.textContent = dateString;

    // --- Load Routine from Local Storage ---
    let routineItems = JSON.parse(localStorage.getItem(storageKey)) || [];

    // --- Render Routine List ---
    const renderRoutine = () => {
        routineList.innerHTML = ''; // Clear existing list
        // Sort items by time
        routineItems.sort((a, b) => a.time.localeCompare(b.time));

        if (routineItems.length === 0) {
            routineList.innerHTML = '<p style="text-align:center; color: #888;">No routine items added for today yet.</p>';
            return;
        }

        routineItems.forEach(item => {
            const li = document.createElement('li');
            li.dataset.id = item.id; // Store id in dataset for easy access
            if (item.completed) {
                li.classList.add('completed');
            }

            li.innerHTML = `
                <span>${formatTime(item.time)}</span>
                <span class="activity-text">${item.activity}</span>
                <div class="actions">
                    <button class="complete-btn">${item.completed ? 'Undo' : 'Done'}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            routineList.appendChild(li);

            // Add event listeners for buttons within this item
            li.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(item.id));
            li.querySelector('.delete-btn').addEventListener('click', () => deleteItem(item.id));
        });
    };

    // --- Add Item ---
    const addItem = () => {
        const time = timeInput.value;
        const activity = activityInput.value.trim(); // Remove leading/trailing spaces

        if (!time || !activity) {
            alert('Please enter both time and activity.');
            return;
        }

        const newItem = {
            id: Date.now(), // Simple unique ID using timestamp
            time: time,
            activity: activity,
            completed: false
        };

        routineItems.push(newItem);
        saveAndRender();

        // Clear inputs
        timeInput.value = '';
        activityInput.value = '';
        activityInput.focus(); // Focus back on activity for next entry
    };

    // --- Toggle Complete Status ---
    const toggleComplete = (id) => {
        routineItems = routineItems.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        saveAndRender();
    };

    // --- Delete Item ---
    const deleteItem = (id) => {
        if (confirm('Are you sure you want to delete this item?')) {
            routineItems = routineItems.filter(item => item.id !== id);
            saveAndRender();
        }
    };

    // --- Save to Local Storage and Re-render ---
    const saveAndRender = () => {
        localStorage.setItem(storageKey, JSON.stringify(routineItems));
        renderRoutine();
    };

    // --- Helper to Format Time (Optional but nice) ---
    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hourString, minute] = timeString.split(':');
        const hour = parseInt(hourString, 10);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12; // Convert hour 0 to 12
        return `${formattedHour}:${minute} ${ampm}`;
    };


    // --- Event Listeners ---
    addButton.addEventListener('click', addItem);
    // Optional: Allow adding by pressing Enter in the activity field
    activityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    // --- Initial Render ---
    renderRoutine();
});