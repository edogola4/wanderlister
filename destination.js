fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // Populate welcome section
        document.getElementById("welcome-title").textContent = data.welcome.title;
        document.getElementById("welcome-intro").textContent = data.welcome.intro;

        // Variables to manage slides
        const slidesContainer = document.getElementById("slides");
        const totalSlides = data.slides.length;
        const initialSlidesCount = 5;
        
        // Function to create slide elements
        function createSlide(slide) {
            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide");
            slideDiv.style.backgroundImage = `url(${slide.image})`;

            const slideInfo = document.createElement("div");
            slideInfo.classList.add("slide-info");

            const title = document.createElement("h3");
            title.textContent = slide.title;

            const description = document.createElement("p");
            description.textContent = slide.description;

            const link = document.createElement("a");
            link.href = slide.link;
            link.textContent = "Learn more";
            link.classList.add("slide-link");

            slideInfo.appendChild(title);
            slideInfo.appendChild(description);
            slideInfo.appendChild(link);
            slideDiv.appendChild(slideInfo);
            return slideDiv;
        }

        // Display initial slides
        data.slides.slice(0, initialSlidesCount).forEach(slide => {
            slidesContainer.appendChild(createSlide(slide));
        });

        // Create and add the "Explore More" button
        const exploreMoreButton = document.createElement("button");
        exploreMoreButton.textContent = "Explore More";
        exploreMoreButton.classList.add("explore-more-btn");
        slidesContainer.appendChild(exploreMoreButton);

        // Event listener to show remaining slides
        exploreMoreButton.addEventListener("click", () => {
            data.slides.slice(initialSlidesCount).forEach(slide => {
                slidesContainer.appendChild(createSlide(slide));
            });
            // Hide the button after loading all slides
            exploreMoreButton.style.display = "none";
        });
    })
    .catch(error => console.error("Error loading data:", error));

