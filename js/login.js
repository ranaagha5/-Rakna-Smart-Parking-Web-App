let errMsg = document.getElementById("error-msg");
// Check if supplier or admin is already logged in
if (localStorage.getItem("token")) {
  // Redirect to supplier or admin dashboard
  if (localStorage.getItem("Type") === "supplier") {
    window.location.href = "./u-dashboard.html";
  } else if (localStorage.getItem("Type") === "admin") {
    window.location.href = "./admin.html";
  }
}

// Login section
document.getElementById("btn-submit-login").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const supplierApi = "https://rakna.site/api/supplier/login"; // supplier login API endpoint
  const adminApi = "https://rakna.site/api/admin/login"; // Admin login API endpoint
  const loginValidation = () => {
    if (email == "" || email == null) {
      errMsg.innerHTML = "Please put your Email";
    } else if (password == "" || password == null) {
      errMsg.innerHTML = "please put your password";
    } else {
      fetch(supplierApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg.email) {
            errMsg.innerHTML = data.msg.email[0];
          } else if (data.msg.password) {
            errMsg.innerHTML = data.msg.password[0];
          } else {
            localStorage.setItem("token", data.supplier.token);
            localStorage.setItem("Type", "supplier");
            window.location.href = "./u-dashboard.html";
          }
        })
        .catch((err) => {
          // Try admin login if supplier login fails
          fetch(adminApi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.msg.email) {
                errMsg.innerHTML = data.msg.email[0];
              } else if (data.msg.password) {
                errMsg.innerHTML = data.msg.password[0];
              } else {
                errMsg.innerHTML = data.msg;
                localStorage.setItem("token", data.admin.base_token);
                localStorage.setItem("Type", "admin");
                window.location.href = "./admin.html";
              }
            })
            .catch((err) => {
              errMsg.innerHTML = "Failed to login. Please try again.";
            });
        });
    }
  };
  loginValidation();

  // supplier or admin not logged in, proceed with login
});

// Register

// Register form submit event handler

const regForm = document.getElementById("register");
regForm.addEventListener("click", (e) => {
  e.preventDefault();

  // Retrieve supplier input values
  const name = document.getElementById("full-name").value;
  const userName = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const conPass = document.getElementById("confirm-password").value;
  const phone = document.getElementById("phone-number").value;
  const age = document.getElementById("birth-date").value;
  const address = document.getElementById("parking-address").value;
  const gender = document.getElementById("gender").value;
  const job = document.getElementById("job").value;

  // Make a POST request to the registration API endpoint
  const regApi = "https://rakna.site/api/supplier/register";
  const regData = {
    name,
    email,
    password,
    phone,
    gender,
    job,
    address,
    age,
  };
  fetch(regApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(regData),
  })
    .then((regRes) => {
      return regRes.json();
    })
    .then((data) => {
      if (data.name) {
        document.querySelector("#err-msg").innerHTML = data.name[0];
      } else if (userName == "" || userName == null) {
        document.querySelector("#err-msg").innerHTML =
          "Username feild is required !";
      } else if (data.email) {
        document.querySelector("#err-msg").innerHTML = data.email[0];
      } else if (data.password) {
        document.querySelector("#err-msg").innerHTML = data.password[0];
      } else if (conPass != password) {
        document.querySelector("#err-msg").innerHTML =
          "Password doesn't match check on it again!";
      } else if (data.phone) {
        document.querySelector("#err-msg").innerHTML = data.phone[0];
      } else if (data.age) {
        document.querySelector("#err-msg").innerHTML = data.age[0];
        // check the age again
      } else if (data.job) {
        document.querySelector("#err-msg").innerHTML = data.job[0];
      } else if (data.address) {
        document.querySelector("#err-msg").innerHTML = data.address[0];
      } else {
        // Registration successful, display success message
        document.querySelector("#err-msg").innerHTML = "";
        document.getElementById("reg-res").innerHTML = `
        <div id="reg-res-successful">
          <div class="ok-box-reg">
            <p class="ok-box-btn x-ok-btn" id="x-ok-btn">X</p>
            <p>
              you have been <br />
              registered successfully
            </p>
            <div class="ok-box-links">
              <a class="ok-box-btn" href="./login.html">Go to login page</a>
              <a class="ok-box-btn" href="./index.html">Home page</a>
            </div>
          </div>
        </div>
        `;
        document.getElementById("x-ok-btn").addEventListener("click", () => {
          document.getElementById("reg-res").innerHTML = "";
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
