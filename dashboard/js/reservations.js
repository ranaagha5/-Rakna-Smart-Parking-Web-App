const tbody = document.getElementById("tbody");

const removeAllChilren = () => {
  if (tbody.hasChildNodes()) {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
};
const allReservations = () => {
  removeAllChilren();
  fetch("https://rakna.site/api/supplier/get-all-reservations", {
    method: "Get",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      resData.reservations.forEach((element) => {
        let id = element.id ?? 0;
        let userId = element.user_id ?? 0;
        let carId = element.car_id ?? 0;
        let startTime = element.start_time ?? "Not set yet";
        let endTime = element.end_time ?? "Not set yet";
        let parkingDuration = element.parking_duration ?? "Not set yet";
        let parkingId = element.parking_id ?? 0;
        let parkingSlotId = element.parking_slot_id ?? 0;
        let pricePerHour = element.price_per_hour ?? "Not set yet";
        let status = element.status ?? "Not set yet";

        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${userId}</td>
        <td>${carId}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${parkingDuration}</td>
        <td>${parkingId}</td>
        <td>${parkingSlotId}</td>
        <td>${pricePerHour}</td>
        <td>${status}</td>
      </tr>
        `;
      });
    });
};

const waitReservations = () => {
  removeAllChilren();
  fetch("https://rakna.site/api/supplier/get-wait-reservations", {
    method: "Get",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      resData.reservations.forEach((element) => {
        let id = element.id ?? 0;
        let userId = element.user_id ?? 0;
        let carId = element.car_id ?? 0;
        let startTime = element.start_time ?? "Not set yet";
        let endTime = element.end_time ?? "Not set yet";
        let parkingDuration = element.parking_duration ?? "Not set yet";
        let parkingId = element.parking_id ?? 0;
        let parkingSlotId = element.parking_slot_id ?? 0;
        let pricePerHour = element.price_per_hour ?? "Not set yet";
        let status = element.status ?? "Not set yet";

        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${userId}</td>
        <td>${carId}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${parkingDuration}</td>
        <td>${parkingId}</td>
        <td>${parkingSlotId}</td>
        <td>${pricePerHour}</td>
        <td>${status}</td>
      </tr>
        `;
      });
    });
};

const activeReservations = () => {
  removeAllChilren();
  fetch("https://rakna.site/api/supplier/get-active-reservations", {
    method: "Get",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      resData.reservations.forEach((element) => {
        let id = element.id ?? 0;
        let userId = element.user_id ?? 0;
        let carId = element.car_id ?? 0;
        let startTime = element.start_time ?? "Not set yet";
        let endTime = element.end_time ?? "Not set yet";
        let parkingDuration = element.parking_duration ?? "Not set yet";
        let parkingId = element.parking_id ?? 0;
        let parkingSlotId = element.parking_slot_id ?? 0;
        let pricePerHour = element.price_per_hour ?? "Not set yet";
        let status = element.status ?? "Not set yet";

        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${userId}</td>
        <td>${carId}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${parkingDuration}</td>
        <td>${parkingId}</td>
        <td>${parkingSlotId}</td>
        <td>${pricePerHour}</td>
        <td>${status}</td>
      </tr>
        `;
      });
    });
};
const doneReservations = () => {
  removeAllChilren();
  fetch("https://rakna.site/api/supplier/get-done-reservations", {
    method: "Get",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      resData.reservations.forEach((element) => {
        let id = element.id ?? 0;
        let userId = element.user_id ?? 0;
        let carId = element.car_id ?? 0;
        let startTime = element.start_time ?? "Not set yet";
        let endTime = element.end_time ?? "Not set yet";
        let parkingDuration = element.parking_duration ?? "Not set yet";
        let parkingId = element.parking_id ?? 0;
        let parkingSlotId = element.parking_slot_id ?? 0;
        let pricePerHour = element.price_per_hour ?? "Not set yet";
        let status = element.status ?? "Not set yet";

        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${userId}</td>
        <td>${carId}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${parkingDuration}</td>
        <td>${parkingId}</td>
        <td>${parkingSlotId}</td>
        <td>${pricePerHour}</td>
        <td>${status}</td>
      </tr>
        `;
      });
    });
};
const canceledReservations = () => {
  removeAllChilren();
  fetch("https://rakna.site/api/supplier/get-canceled-reservations", {
    method: "Get",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      resData.reservations.forEach((element) => {
        let id = element.id ?? 0;
        let userId = element.user_id ?? 0;
        let carId = element.car_id ?? 0;
        let startTime = element.start_time ?? "Not set yet";
        let endTime = element.end_time ?? "Not set yet";
        let parkingDuration = element.parking_duration ?? "Not set yet";
        let parkingId = element.parking_id ?? 0;
        let parkingSlotId = element.parking_slot_id ?? 0;
        let pricePerHour = element.price_per_hour ?? "Not set yet";
        let status = element.status ?? "Not set yet";

        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${userId}</td>
        <td>${carId}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${parkingDuration}</td>
        <td>${parkingId}</td>
        <td>${parkingSlotId}</td>
        <td>${pricePerHour}</td>
        <td>${status}</td>
      </tr>
        `;
      });
    });
};
// const reservationsScripts = () => {
//   //=============================================================== All reservarions=================>>>
//   //=============================================================== All reservarions=================>>>

//   //=============================================================== wait reservarions=================>>>
//   //=============================================================== wait reservarions=================>>>

//   //=============================================================== active reservarions=================>>>
//   //=============================================================== active reservarions=================>>>
//   fetch("https://rakna.site/api/supplier/get-active-reservations", {
//     method: "Get",
//     headers: {
//       Authorization: `bearer ${localStorage.getItem("token")}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((resData) => {
//       document.getElementById("active-total").innerHTML =
//         resData.reservations.length;
//       resData.reservations.forEach((element) => {
//         document.getElementById("active-content").innerHTML;
//       });
//     });
//   //=============================================================== done reservarions=================>>>
//   //=============================================================== done reservarions=================>>>
//   fetch("https://rakna.site/api/supplier/get-done-reservations", {
//     method: "Get",
//     headers: {
//       Authorization: `bearer ${localStorage.getItem("token")}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((resData) => {
//       document.getElementById("done-total").innerHTML =
//         resData.reservations.length;
//       resData.reservations.forEach((element) => {
//         document.getElementById("done-content").innerHTML;
//       });
//     });
//   //=============================================================== cancled reservarions=================>>>
//   //=============================================================== cancled reservarions=================>>>
//   fetch("https://rakna.site/api/supplier/get-canceled-reservations", {
//     method: "Get",
//     headers: {
//       Authorization: `bearer ${localStorage.getItem("token")}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((resData) => {
//       document.getElementById("canceled-total").innerHTML =
//         resData.reservations.length;
//       resData.reservations.forEach((element) => {
//         document.getElementById("canceled-content").innerHTML;
//       });
//     });
// };
// reservationsScripts();
