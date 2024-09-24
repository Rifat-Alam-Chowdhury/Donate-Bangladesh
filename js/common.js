function id(id) {
  const ids = parseFloat(document.getElementById(id).value);
  return ids;
}

function texts(id) {
  const ids = parseFloat(document.getElementById(id).innerText);
  return ids;
}

function hidden(id) {
  document.getElementById("drop-down").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("Donation-btn").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

document.getElementById("blog-id").addEventListener("click", function () {
  window.location.href = "blog.html";
});
