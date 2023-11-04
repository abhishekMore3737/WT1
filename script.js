// Function to add responsive cards based on window size
function addCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Clear existing cards

    const windowWidth = window.innerWidth;

    let cardData = [
        { title: "Students", text: "Total Students: 2,000" },
        { title: "Courses", text: "Total Courses: 100" },
        { title: "Enrollments", text: "Active Enrollments: 1,500" }
    ];

    if (windowWidth < 768) {
        // For small screens, show cards stacked
        for (const data of cardData) {
            const card = document.createElement("div");
            card.className = "col-12 mb-4";
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        }
    } else {
        // For larger screens, show cards in columns
        for (const data of cardData) {
            const card = document.createElement("div");
            card.className = "col-lg-4 col-md-6";
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        }
    }
}

// Initial call to add responsive cards
addCards();

// Update the cards when the window is resized
window.addEventListener("resize", addCards);
