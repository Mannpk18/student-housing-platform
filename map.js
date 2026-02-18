let map;

  const modal = document.getElementById('mapModal');
  modal.addEventListener('shown.bs.modal', function () {
    // Initialize map only once
    if (!map) {
      map = L.map('map').setView([43.26269, -79.91936], 15); // Default location is McMaster Area

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Add marker on click
      map.on('click', function(e) {
        L.marker(e.latlng).addTo(map);
        console.log("Selected location:", e.latlng);
      });
    } else {
      // Fix map size issue when modal opens
      map.invalidateSize();
    }
  });