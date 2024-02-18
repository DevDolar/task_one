document.addEventListener("DOMContentLoaded", function () {
    const seatContainer = document.getElementById("seatContainer");
    const totalPriceElement = document.getElementById("totalPrice");
    const seatPrice = 550;
    let selectedSeats = [];
  
    // Function to create seats dynamically
    function createSeats() {
      const totalSeats = 20; // You can adjust the number of seats as needed
  
      for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;
  
        seat.addEventListener("click", function () {
          toggleSeatSelection(seat);
        });
  
        seatContainer.appendChild(seat);
      }
    }
  
    // Function to toggle seat selection
    function toggleSeatSelection(seat) {
      const seatNumber = parseInt(seat.textContent);
  
      if (selectedSeats.includes(seatNumber)) {
        // Deselect the seat
        selectedSeats = selectedSeats.filter(num => num !== seatNumber);
        seat.classList.remove("selected");
      } else {
        // Select the seat
        if (selectedSeats.length < 4) {
          selectedSeats.push(seatNumber);
          seat.classList.add("selected");
        } else {
          alert("You can only select up to 4 seats.");
        }
      }
  
      updateTotalPrice();
    }
  
    // Function to update total price based on selected seats
    function updateTotalPrice() {
      const total = selectedSeats.length * seatPrice;
      totalPriceElement.textContent = total;
    }
  
    // Initialize the seats
    createSeats();
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const seatContainer = document.getElementById("seatContainer");
    const totalPriceElement = document.getElementById("totalPrice");
    const nextButton = document.getElementById("nextButton");
    const seatPrice = 550;
    let selectedSeats = [];
  
    // Function to create seats dynamically
    function createSeats() {
      const totalSeats = 20; // You can adjust the number of seats as needed
  
      for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;
  
        seat.addEventListener("click", function () {
          toggleSeatSelection(seat);
        });
  
        seatContainer.appendChild(seat);
      }
    }
  
    // Function to toggle seat selection
    function toggleSeatSelection(seat) {
      const seatNumber = parseInt(seat.textContent);
  
      if (selectedSeats.includes(seatNumber)) {
        // Deselect the seat
        selectedSeats = selectedSeats.filter(num => num !== seatNumber);
        seat.classList.remove("selected");
      } else {
        // Select the seat
        if (selectedSeats.length < 4) {
          selectedSeats.push(seatNumber);
          seat.classList.add("selected");
        } else {
          alert("You can only select up to 4 seats.");
        }
      }
  
      updateTotalPrice();
    }
  
    // Function to update total price based on selected seats
    function updateTotalPrice() {
      const total = selectedSeats.length * seatPrice;
      totalPriceElement.textContent = total;
    }
  
    // Function to show successful popup
    function showSuccessPopup() {
      alert("Booking successful! Your selected seats: " + selectedSeats.join(', '));
      // You can customize this popup or use a more sophisticated modal dialog
    }
  
    // Event listener for the Next button
    nextButton.addEventListener("click", function () {
      if (selectedSeats.length > 0) {
        showSuccessPopup();
      } else {
        alert("Please select at least one seat.");
      }
    });
  
    // Initialize the seats
    createSeats();
  });
  