const seeMore = document.getElementById("see-more-section");

// if token or not
const checkToken = () => {
  if (!localStorage.getItem("token")) {
    location.href = "./login.html";
  }
};
window.onload = checkToken();

// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// add logout logic to admin dashboard

const logout = () => {
  document.getElementById("log-out").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "./login.html";
  });
};
logout();

// get data from apis to admin dashboard
const headerData = () => {
  fetch("https://rakna.site/api/admin/total-profits", {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((earnData) => {
      document.getElementById("earning-data").innerHTML = earnData.profits;
    });

  fetch("https://rakna.site/api/admin/users", {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((userNumber) => {
      document.getElementById("users").innerHTML = userNumber.users.length;
    });
  fetch("https://rakna.site/api/admin/suppliers", {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((userNumber) => {
      document.getElementById("suppliers").innerHTML = userNumber.users.length;
    });
  fetch("https://rakna.site/api/admin/day-profits", {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((dayEarnData) => {
      document.getElementById("day-earning-data").innerHTML =
        dayEarnData.profits;
    });

  fetch("https://rakna.site/api/admin/suppliers-parkings", {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((suppliers) => {
      suppliers.data.forEach((e) => {
        let totalPayments = e.total_payments;
        let supplierId = e.supplier_id;

        if (totalPayments == null || totalPayments == "") {
          totalPayments = 0;
        }
        document.getElementById("suppliers-container").innerHTML += `
        <div class="supplier supplier-header" data-supplier-id="${supplierId}">
          <p>${supplierId}</p>
          <p>${e.parking_id}</p>
          <p>${e.supplier_name}</p>
          <p>${e.payments_today}</p>
          <p id="payments-total">${totalPayments}</p>
          <button class="return" onclick="openSeeMore(); addDataToSeeMore(${supplierId}); getParkingsId();">
          See More
          </button>
          </div>
          `;
        // geting the parking data to display in the taps when choosing a number
        const parkingsIdNumbers = () => {};
      });
    });
};
headerData();
const addDataToSeeMore = (id) => {
  seeMore.setAttribute("data-supplier-id", id);
};
const openSeeMore = () => {
  seeMore.style.display = "flex";
};
// See more section

const closeSeeMore = () => {
  seeMore.style.display = "none";
};

const profits = () => {
  document.querySelector(".body-content").innerHTML = `
  <div class="profits-cards">
  <div class="profit-card">
    <h3>$ <span id="daily-profits"></span></h3>
    <p>Daily Profits for the parking</p>
  </div>
  <div class="profit-card">
    <h3>$ <span id="total-profits"></span></h3>
    <p>Total Profits for the parking</p>
  </div>
</div>
  `;
};
const payments = () => {
  document.querySelector(".body-content").innerHTML = `
  <div class="reservation" id="day-payments">
    <h2>Day Payments</h2>
  </div>
  <div class="reservation" id="total-payments">
    <h2>Total Payments</h2>
  </div>
  `;
};
let chooseParkingId = document.getElementById("choose-parking-id");
const getParkingsId = () => {
  let supplierIdFromData = seeMore.getAttribute("data-supplier-id");
  if (chooseParkingId.hasChildNodes()) {
    while (chooseParkingId.firstChild) {
      chooseParkingId.removeChild(chooseParkingId.firstChild);
    }
  }
  fetch(
    `https://rakna.site/api/admin/parking?supplier_id=${supplierIdFromData}`,
    {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      data.parking.forEach((e) => {
        chooseParkingId.innerHTML += `
        <option value="${e.id}">${e.id}</option>
        `;
      });

      document.getElementById("reservation-btn").onclick = reservation;
      const reservation = () => {
        fetch("https://rakna.site/api/admin/reservations-parking/${}");
        document.querySelector(".body-content").innerHTML = `
        <div class="reservation-card">
        <p>Reservation ID : 2</p>
        <p>Start Time : 1</p>
        <p>End Time : 1</p>
        <p>Prking Duration : 1</p>
        <p>Prking Duration : 1</p>
        <p>Discount : 1</p>
        <p>Status : 1</p>
        <p>Price Per Hour : 1</p>
        <p>User ID : 1</p>
        <p>Car ID : 1</p>
        <p>Parking ID : 1</p>
        <p>Parking Slot ID : 1</p>
      </div>
      
        `;
      };
    });
};
const getParkingData = () => {
  // chooseParkingId.value
};
// See more section

// get data from apis to admin dashboard
