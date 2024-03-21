// API links
const dayProfits = "https://rakna.site/api/admin/day-profits";
const apiProfile = "https://rakna.site/api/admin/profile";
const parkingsNames = "https://rakna.site/api/admin/parking";
const adminAllReservations =
  "https://rakna.site/api/admin/get-all-reservations";

const adminTotalProfits = "https://rakna.site/api/admin/total-profits";
const adminTotalPayments = "https://rakna.site/api/admin/total-payments";

// Admin-Dashboard scripts
const checkToken = () => {
  if (!localStorage.getItem("token")) {
    const fileNameWithExtension = location.href.substring(
      location.href.lastIndexOf("/") + 1
    );
    if (fileNameWithExtension == "Admin-dashboardr.html") {
      location.href = "./login.html";
    } else {
      location.href = "../login.html";
    }

    // if (location.href == "./Admin-dashboardr.html") {
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
  const url = `https://rakna.site/api/admin/interval-profits?first_date=${firstDate}&second_date=${lastDate}`;
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
  if (localStorage.getItem("Type") === "admin") {
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

    // import data from the api to the admin dashboard
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
            data.admin.name;
          userName.innerHTML = data.admin.name;
        });
    };
    importDataApiUserName();

    const importDataApi = () => {
      // get adminAllReservations to the dashboard
      fetch(adminAllReservations, {
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
      // get adminTotalProfits to the dashboard

      fetch(adminTotalProfits, {
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("profits").innerHTML = data.profits;
        });
      // get adminTotalProfits to the dashboard
      fetch(adminTotalPayments, {
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
      fetch("https://rakna.site/api/admin/logout", {
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
