document.addEventListener("DOMContentLoaded", function() {
    const activitiesList = document.getElementById("activities-list");

    // Mock data
    const activities = [
        { id: 1, title: "活動1" },
        { id: 2, title: "活動2" },
        // Add more activities as needed
    ];

    // Render activities
    activities.forEach(activity => {
        const activityDiv = document.createElement("div");
        activityDiv.classList.add("activity");
        activityDiv.innerHTML = `
            <span>${activity.title}</span>
            <span class="favorite-btn" data-id="${activity.id}" onclick="toggleFavorite(${activity.id})">❤</span>
        `;
        activitiesList.appendChild(activityDiv);
    });

    // Function to toggle favorite status
    window.toggleFavorite = function(activityId) {
        const favoriteBtn = document.querySelector(`[data-id="${activityId}"]`);
        const isFavorite = favoriteBtn.classList.toggle("favorite");

        // Save the favorite status in a cookie
        document.cookie = `activity_${activityId}_favorite=${isFavorite ? "1" : "0"}`;
    };
});
