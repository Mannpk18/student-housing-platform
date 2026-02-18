const listings = [
  {
    url: "listing_details.html",
    rent: 600,
    distance: "6 mins",
    image: "https://www.mcmaster-housing.ca/235e/m01.jpg",
    alt_text: "Exterior of a house",
    address: "1234 Glenmount St",
    bedrooms: "7/7 Bedrooms Available",
    avail_rooms: 7,
    total_rooms: 7,
    bathrooms: 4,
    type: "house",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: true,
    services: ["cleaning", "grass-cut", "shovelling"],
    housemates: ["female", "male", "co-ed"],
    house_rules: ["non-smoke", "quiet-hours", "no-guests"]
  },
  {
    url: "listing_details.html",
    rent: 720,
    distance: "10 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-w-wqs511uXpCwnqhG94o9XVJvKrDZQOX4Q&s",
    alt_text: "Exterior of a house",
    address: "517 Dalewood Ave",
    bedrooms: "5/7 Bedrooms Available",
    avail_rooms: 5,
    total_rooms: 7,
    bathrooms: 3,
    type: "house",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: true,
    services: ["cleaning"],
    housemates: ["male"],
    house_rules: ["non-smoke"]
  },
  {
    url: "listing_details.html",
    rent: 740,
    distance: "11 mins",
    image: "https://cache14.housesigma.com/file/pix-itso/160807792/073a2_1.jpg?dbec68b1",
    alt_text: "Exterior of a house",
    address: "314 Emerson St",
    bedrooms: "3/4 Bedrooms Available",
    avail_rooms: 3,
    total_rooms: 4,
    bathrooms: 2,
    type: "house",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: true,
    services: ["cleaning", "grass-cut", "shovelling"],
    housemates: ["male"],
    house_rules: ["non-smoke", "quiet-hours", "no-guests"]
  },
  {
    url: "listing_details.html",
    rent: 800,
    distance: "15 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYLFwgtnsUtRwlKpDI9wTA51RprZugND0wA&s",
    alt_text: "Exterior of a house",
    address: "147 Broadway Ave",
    bedrooms: "7/7 Bedrooms Available",
    avail_rooms: 7,
    total_rooms: 7,
    bathrooms: 3,
    type: "house",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: false,
    services: ["cleaning", "grass-cut", "shovelling"],
    housemates: ["co-ed"],
    house_rules: ["quiet-hours"]
  },
  {
    url: "listing_details.html",
    rent: 620,
    distance: "18 mins",
    image: "https://www.valeryproperties.com/wp-content/uploads/2021/09/851-Lawrence-Road-Hamilton-ON.jpg",
    alt_text: "Exterior of a house",
    address: "64 Longwood Rd",
    bedrooms: "2/2 Bedrooms Available",
    avail_rooms: 2,
    total_rooms: 2,
    bathrooms: 1,
    type: "apartment",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: false,
    services: ["grass-cut"],
    housemates: ["female"],
    house_rules: ["non-smoke"]
  },
  {
    url: "listing_details.html",
    rent: 810,
    distance: "15 mins",
    image: "https://photos.zillowstatic.com/fp/5f8a829ab3f0e69ba4596ffb5e9ff859-cc_ft_960.jpg",
    alt_text: "Exterior of a house",
    address: "36 Main St East",
    bedrooms: "3/4 Bedrooms Available",
    avail_rooms: 3,
    total_rooms: 4,
    bathrooms: 2,
    type: "house",
    utils: ["wifi", "washer", "dryer", "air-cond", "heating", "dishwasher", "parking"],
    utils_included: true,
    services: ["grass-cut", "shovelling"],
    housemates: ["co-ed"],
    house_rules: []
  }
];
    
    
function createListingBox(listing, index) {
  return `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <a href="listing_details.html?id=${index}" class="text-decoration-none text-dark" style="display:block;">
        <div class="card shadow-sm hover-shadow" style="transition: transform 0.2s, box-shadow 0.2s;">
          <!-- Header (Rent and Distance) -->
          <div class="card-header d-flex justify-content-between">
            <span class="fw-bold">$${listing.rent}/month</span>
            <div class="d-flex align-items-center">
              <i class="bi bi-person-walking me-1"></i>
              <span>${listing.distance}</span>
            </div>
          </div>

          <!-- Listing image -->
          <img class="card-img-top" src="${listing.image}" alt="${listing.alt_text}">

          <!-- Listing description (address, bedrooms) -->
          <div class="card-body text-center">
            <h5 class="card-title">${listing.address}</h5>
            <p class="card-text">${listing.bedrooms}</p>
          </div>
        </div>
      </a>
    </div>
  `;
}
               
                    
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("listing-container");

  // function to display listings on the
  function displayListings(listings) {
    container.innerHTML = ""; // clear current listings on the screen
    listings.forEach((listing, index) => {
      container.innerHTML += createListingBox(listing, index);
    });
  }

  // show all listings when you first open the page
  displayListings(listings);

  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  // function runs when the search button is clicked
  searchButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    // retrieve input data and make it case-insensitive
    const query = searchInput.value.toLowerCase().trim();

    // get the listings that match the search input
    const filteredListings = listings.filter(listing => 
      listing.address.toLowerCase().includes(query)
    );

    displayListings(filteredListings);
  });

  // Button that user clicks to show all the listings again after searching/filtering
  const showAllButton = document.getElementById("show-all-button");

  showAllButton.addEventListener("click", () => {
  searchInput.value = ""; // Clear the search bar
  displayListings(listings); // Show all listings again
  });

  // Submit button for filters
  const filterButton = document.getElementById("filter-button");

  // function that runs when user click Submit button = retrieves all the filter input data from HTML
  filterButton.addEventListener("click", ()=> {
    const accomType = document.getElementById("accom-type").value;
    const minRent = parseInt(document.getElementById("min-rent").value) || 0;
    const maxRent = parseInt(document.getElementById("max-rent").value) || Infinity;
    const walkingValue = document.getElementById("walk-time").value;

    const getWalkRange = (value) => {
        switch (value) {
          case "5-less": return { min: 0, max: 5 };
          case "5-10": return { min: 5, max: 10 };
          case "11-20": return { min: 11, max: 20 };
          case "21-30": return { min: 21, max: 30 };
          case "30-plus": return { min: 30, max: Infinity };
          default: return { min: 0, max: Infinity };
        }
    };

    const { min, max } = getWalkRange(walkingValue);

    const numRooms = parseInt(document.getElementById("num-rooms").value);
    const allRooms = document.querySelector('input[name="agreement"]:checked')?.value || "";
    const numBath = parseInt(document.getElementById("num-bath").value);
    const selectedUtils = Array.from(document.querySelectorAll('input[name="utilities"]:checked')).map(el => el.value);
    const includeUtilsRent = document.querySelector('input[name="include-util"]:checked')?.value || "";
    const selectedServices = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value);
    const selectedHouseMates = Array.from(document.querySelectorAll('input[name="housemates"]:checked')).map(el => el.value);
    const selectedRules = Array.from(document.querySelectorAll('input[name="house-rules"]:checked')).map(el => el.value);


    // function that filters listings based on user input data
    const filtered = listings.filter(listing => {
      const typeMatch = accomType === "all" || accomType === "" || listing.type === accomType;
      const rentMatch = listing.rent >= minRent && listing.rent <= maxRent;
      const distance = parseInt(listing.distance);
      const walkMatch = distance <= max;
      const bathroomMatch = isNaN(numBath) || listing.bathrooms >= numBath;
      const utilsMatch = selectedUtils.length === 0 || selectedUtils.every(util => listing.utils.includes(util));
      const utilsInRent = !includeUtilsRent || (includeUtilsRent === "yes-util" && listing.utils_included) || (includeUtilsRent === "no-util" && (!listing.utils_included))
      const servicesMatch = selectedServices.length === 0 || selectedServices.every(service => listing.services.includes(service));
      const housematesMatch = selectedHouseMates.length === 0 || selectedHouseMates.every(housemate => listing.housemates.includes(housemate));
      const rulesMatch = selectedRules.length === 0 || selectedRules.every(rule => listing.house_rules.includes(rule));

 
      
      let roomsMatch = true;

      // user wants the whole house available regardless of number of rooms
      if (allRooms === "yes-all-rooms") {
        roomsMatch = listing.avail_rooms === listing.total_rooms && listing.total_rooms >= numRooms;
      }
      else if (!isNaN(numRooms)) {
        // user wants a specified number of rooms and the whole house available
        if (allRooms === "no-all-rooms") {
          roomsMatch = listing.avail_rooms >= numRooms;
        }
        // user just specifies number of rooms
        else {
          roomsMatch = listing.avail_rooms >= numRooms;
        }
      }

      return typeMatch && rentMatch && walkMatch && roomsMatch && bathroomMatch && utilsMatch && servicesMatch && housematesMatch && rulesMatch && utilsInRent;
    });

    displayListings(filtered);
  
  });

});
                    
function createDetailsPanel(listing) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const displayMap = {
    "air-cond": "AC",
    "grass-cut": "Lawnmowing",
    "non-smoke": "No Smoking",
    "quiet-hours": "Quiet Hours",
    "female": "Female Only",
    "male": "Male Only",
    "no-guests": "No Guests"
  };

  const createBulletList = (items) => {
    if (!items || items.length === 0) return "";
    return items.map(item => `<li>${displayMap[item] || capitalize(item)}</li>`).join("");
  };

  const utilsHeader = `<h3>${listing.utils_included ? "Utilities Included" : "Utilities (Not Included)"}:</h3>`;
  const utilsList = `<ul class="two-columns">${createBulletList(listing.utils)}</ul>`;

  const servicesSection = listing.services?.length > 0 
      ? `<h3>Services:</h3><ul class="two-columns">${createBulletList(listing.services)}</ul>` 
      : "";
  const housematesSection = listing.housemates?.length > 0
      ? `<h3>Housemates:</h3><ul class="two-columns">${createBulletList(listing.housemates)}</ul>` 
      : "";
  const houseRulesSection = listing.house_rules?.length > 0
      ? `<h3>House Rules:</h3><ul class="two-columns">${createBulletList(listing.house_rules)}</ul>` 
      : "";

  return `
    <div class="details-box">
      <h1 class="address">${listing.address}</h1>
      <ul class="house-info">
        <li><i class="bi bi-door-closed me-1"></i>${listing.avail_rooms}/${listing.total_rooms} Bedrooms Available</li>
        <li><i class="bi bi-badge-wc me-1"></i>${listing.bathrooms} Bath${listing.bathrooms !== 1 ? "s" : ""}</li>
        <li><i class="bi bi-person-walking me-1"></i>${listing.distance}</li>
        <li><i class="bi bi-currency-dollar me-1"></i>${listing.rent}/month</li>
      </ul>

      ${utilsHeader}
      ${utilsList}

      ${servicesSection}
      ${housematesSection}
      ${houseRulesSection}
    </div>
  `;
}



  



// Example: show details of the first listing
document.getElementById("details-panel").innerHTML = createDetailsPanel(listings[0]);
 



const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

if (!isNaN(id) && listings[id]) {
    const listing = listings[id];

    // Populate details panel
    const detailsPanel = document.getElementById("details-panel");
    detailsPanel.innerHTML = createDetailsPanel(listing);

    // Carousel container elements
    const carouselInner = document.querySelector("#carouselExampleIndicators .carousel-inner");
    const carouselIndicators = document.querySelector("#carouselExampleIndicators .carousel-indicators");

    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    // Extra images (same for all listings)
    const extraImages = [
        "images/listing_picture_4.jpg.webp",
        "images/listing_picture_4.png",
        "images/lisiting_picture_5.jpg"

    ];

    // Build images array: first image from listing, then extras without duplicates
    const images = [listing.image, ...extraImages.filter(img => img !== listing.image)];

    images.forEach((imgSrc, index) => {
        // Carousel slide
        const item = document.createElement("div");
        item.className = "carousel-item" + (index === 0 ? " active" : "");
        item.innerHTML = `<img src="${imgSrc}" class="d-block w-100" alt="${listing.address}">`;
        carouselInner.appendChild(item);

        // Carousel indicator
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#carouselExampleIndicators");
        button.setAttribute("data-bs-slide-to", index);
        if (index === 0) {
            button.className = "active";
            button.setAttribute("aria-current", "true");
        }
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        carouselIndicators.appendChild(button);
    });
} else {
    console.error("Invalid listing ID");
}