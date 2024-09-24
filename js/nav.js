const time = new Date();

document.getElementById("Submit-btn").addEventListener("click", function () {
  const userInput = id("cash-in-field");

  const currentMainBalance = texts("main-balance");

  if (isNaN(userInput)) {
    alert("Please input number");
    my_modal_1.showModal();
    return;
  }

  //   history

  const history = document.createElement("div");
  history.className =
    "card-body bg-gradient-to-t from-gray-300/50 to-red-400/90 border-4 my-1 w-80 shadow-xl  mx-auto  border-red-600 rounded-xl";
  history.innerHTML = `<h2 class="card-title">Cash In</h2>
            <p class=""><span class="text-red-600 font font-extrabold">${userInput}</span> BDT has been cashed in at ${time}</p>`;
  document.getElementById("history-section").append(history);
  //   history ends

  document.getElementById("main-balance").innerText =
    currentMainBalance + userInput;

  document.getElementById("drop-down").classList.add("hidden");
});

document.getElementById("cash-outer").addEventListener("click", function () {
  document.getElementById("drop-down").classList.remove("hidden");
});

document.getElementById("History-btn").addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("cards-section").classList.add("hidden");
  document.getElementById("footer-id").classList.add("hidden");
  document.getElementById("History-btn").classList.add("bg-yellow-200");
  document.getElementById("Donation-btn").classList.remove("bg-cyan-300");
});

document.getElementById("Donation-btn").addEventListener("click", function () {
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("cards-section").classList.remove("hidden");
  document.getElementById("footer-id").classList.remove("hidden");
  document.getElementById("History-btn").classList.remove("bg-yellow-200");
  document.getElementById("Donation-btn").classList.add("bg-cyan-300");
  document.getElementById("History-btn").classList.remove("bg-yellow-200");
});

// card 1
document.getElementById("donate-btn").addEventListener("click", function () {
  const userInput = id("donation-user-field");
  const currentMainBalance = texts("main-balance");
  const donationBox = texts("donation-box");

  if (isNaN(userInput) || isNaN(donationBox)) {
    alert("ONLY NUMBERS");
    my_modal_2.showModal();
    return;
  }

  if (userInput > currentMainBalance) {
    my_modal_3.showModal();
    return;
  }

  //   history for donation
  const history = document.createElement("div");
  history.className =
    "card-body bg-gradient-to-t from-gray-300/50 to-red-400/90 border-4 my-1 w-80 shadow-xl  mx-auto  border-red-600 rounded-xl";
  history.innerHTML = `<h2 class="card-title">Donated in Noakhali</h2>
            <p class=""><span class="text-red-600 font font-extrabold">${userInput}</span> BDT has been donated in Noakhali at ${time}</p>`;
  document.getElementById("history-section").append(history);
  //   history for donation ends

  document.getElementById("donation-box").innerText = donationBox + userInput;
  document.getElementById("main-balance").innerText =
    currentMainBalance - userInput;
  my_modal_4.showModal();
});

// card 1 ends

// card 2

document.getElementById("donate-btn2").addEventListener("click", function () {
  const userInput = id("donation-user-field2");
  const currentMainBalance = texts("main-balance");
  const donationBox = texts("donation-box2");

  if (isNaN(userInput) || isNaN(donationBox)) {
    alert("ONLY NUMBERS");
    my_modal_2.showModal();
    return;
  }

  if (userInput > currentMainBalance) {
    my_modal_3.showModal();
    return;
  }

  //   history for donation
  const history = document.createElement("div");
  history.className =
    "card-body bg-gradient-to-t from-gray-300/50 to-red-400/90 border-4 my-1 w-80 shadow-xl  mx-auto  border-red-600 rounded-xl";
  history.innerHTML = `<h2 class="card-title">Donated in FENI</h2>
              <p class=""><span class="text-red-600 font font-extrabold">${userInput}</span> BDT has been donated in FENI at ${time}</p>`;
  document.getElementById("history-section").append(history);
  //   history for donation ends

  document.getElementById("donation-box2").innerText = donationBox + userInput;
  document.getElementById("main-balance").innerText =
    currentMainBalance - userInput;

  my_modal_4.showModal();
});
// card 2 ends

// card 3
document.getElementById("donate-btn3").addEventListener("click", function () {
  const userInput = id("donation-user-field3");
  const currentMainBalance = texts("main-balance");
  const donationBox = texts("donation-box3");

  if (isNaN(userInput) || isNaN(donationBox)) {
    alert("ONLY NUMBERS");
    my_modal_2.showModal();
    return;
  }
  if (userInput > currentMainBalance) {
    my_modal_3.showModal();
    return;
  }

  //   history for donation
  const history = document.createElement("div");
  history.className =
    "card-body bg-gradient-to-t from-gray-300/50 to-red-400/90 border-4 my-1 w-80 shadow-xl  mx-auto  border-red-600 rounded-xl";
  history.innerHTML = `<h2 class="card-title">Donated in Aid for Injured in the Quota Movement</h2>
                <p class=""><span class="text-red-600 font font-extrabold">${userInput}</span> BDT has been donated in Quota at ${time}</p>`;
  document.getElementById("history-section").append(history);
  //   history for donation ends

  document.getElementById("donation-box3").innerText = donationBox + userInput;
  document.getElementById("main-balance").innerText =
    currentMainBalance - userInput;

  my_modal_4.showModal();
});
// card 3 ends
