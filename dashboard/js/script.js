// API links
const dayProfits = "https://rakna.site/api/supplier/day-profits";
const apiProfile = "https://rakna.site/api/supplier/profile";
const parkingsNames = "https://rakna.site/api/supplier/parking";
const supplierAllReservations =
  "https://rakna.site/api/supplier/get-all-reservations";

const supplierTotalProfits = "https://rakna.site/api/supplier/total-profits";
const supplierTotalPayments = "https://rakna.site/api/supplier/total-payments";

// U-Dashboard scripts
const checkToken = () => {
  if (!localStorage.getItem("token")) {
    const fileNameWithExtension = location.href.substring(
      location.href.lastIndexOf("/") + 1
    );
    if (fileNameWithExtension == "u-dashboard.html") {
      location.href = "./login.html";
    } else {
      location.href = "../login.html";
    }

    // if (location.href == "./u-dashboard.html") {
    // } else {
    // }
  }
};
window.onload = checkToken();

async function getIntervalProfits() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const lastMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;
  const firstDate = `${lastMonthYear}-${lastMonth}-01`;
  const lastDate = `${currentYear}-${currentMonth}-${new Date(
    currentYear,
    currentMonth,
    0
  ).getDate()}`;
  const url = `https://rakna.site/api/supplier/interval-profits?first_date=${firstDate}&second_date=${lastDate}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  document.querySelector("#monthly-profits").innerHTML = data.profits;
}

getIntervalProfits();

const beforeEnterThePage = () => {
  if (localStorage.getItem("Type") === "supplier") {
    // check if there is an token or not
    // Class active side bar
    const sidebarBtns = document.querySelectorAll(".sidebar-btns");
    sidebarBtns.forEach((element) => {
      element.addEventListener("click", () => {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
          sidebarBtns.forEach((e) => {
            if (e !== element) {
              e.classList.remove("active");
            }
          });
        }
      });
    });

    // import data from the api to the supplier dashboard
    // get profile data
    const importDataApiUserName = () => {
      const userName = document.getElementById("name-user-profile");
      fetch(apiProfile, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`, // Fix the syntax here
        },
      })
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("name-user-profile-mob").innerHTML =
            data.supplier.name;
          userName.innerHTML = data.supplier.name;
        });
    };
    importDataApiUserName();

    const importDataApi = () => {
      // get supplierAllReservations to the dashboard
      fetch(supplierAllReservations, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`, // Fix the syntax here
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // =========================================
          document.querySelector(".reser-number1 span").innerHTML =
            data.reservations[data.reservations.length - 3].id;

          document.querySelector(".garage-id1 span").innerHTML =
            data.reservations[data.reservations.length - 3].parking_id;

          document.querySelector(".garage-state1 span").innerHTML =
            data.reservations[data.reservations.length - 3].status;
          // =========================================
          document.querySelector(".reser-number2 span").innerHTML =
            data.reservations[data.reservations.length - 2].id;

          document.querySelector(".garage-id2 span").innerHTML =
            data.reservations[data.reservations.length - 2].parking_id;

          document.querySelector(".garage-state2 span").innerHTML =
            data.reservations[data.reservations.length - 2].status;

          // =========================================
          document.querySelector(".reser-number3 span").innerHTML =
            data.reservations[data.reservations.length - 1].id;

          document.querySelector(".garage-id3 span").innerHTML =
            data.reservations[data.reservations.length - 1].parking_id;

          document.querySelector(".garage-state3 span").innerHTML =
            data.reservations[data.reservations.length - 1].status;

          // =========================================
        });
      // Get main dashboard
      fetch(dayProfits, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((dayProfits) => {
          document.querySelector("#daily").innerHTML = dayProfits.profits;
        });
      // get supplierTotalProfits to the dashboard

      fetch(supplierTotalProfits, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("profits").innerHTML = data.profits;
        });
      // get supplierTotalProfits to the dashboard
      fetch(supplierTotalPayments, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("payments").innerHTML =
            data.payments[data.payments.length - 1].cost;
        });
    };
    importDataApi();
    // logout btn logic ==========================

    document.getElementById("logout").addEventListener("click", () => {
      localStorage.clear();

      // location.href = "/login.html";
      fetch("https://rakna.site/api/supplier/logout", {
        method: "POST",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`, // Fix the syntax here
        },
      }).then((res) => res.json());
      checkToken();
    });
  } else if (localStorage.getItem("userType") === "admin") {
    // do something
  }
};
window.onload = beforeEnterThePage();

// logout btn logic =======================

//import profile data to profile page

// trying things ==========================

// trying things ==========================

// menu btn logic in responsive

const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
  document.getElementById("navbar-mobile-after-btn").style.display = "flex";
  document.getElementById("navbar-mobile-after-btn").style.height = "300px";
});
document.getElementById("x-btn").addEventListener("click", () => {
  document.getElementById("navbar-mobile-after-btn").style.display = "none";
});
// trying things ==========================
// parking section ==============================================

// parking section ==============================================
// trying things ==========================
// trying things ==========================
// trying things ==========================
