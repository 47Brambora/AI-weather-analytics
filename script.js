document.getElementById("submit").addEventListener("click", () => {
  const address = document.getElementById("address").value;

  if (!address) {
    alert("Please enter your address.");
    return;
  }

  // Create the loading box
  const messageBox = document.createElement("div");
  messageBox.id = "message-box";
  messageBox.innerHTML = `
    <div class="spinner"></div>
    <p>Loading...</p>
  `;
  document.body.appendChild(messageBox);

  // Loading messages
  const messages = [
    "Observing clouds...",
    "Analyzing wind patterns...",
    "Measuring temperature...",
    "Scanning for precipitation...",
    "Checking humidity levels...",
    "Tracking atmospheric pressure...",
    "Monitoring sunlight intensity...",
    "Evaluating weather trends...",
    "Gathering satellite data...",
    "Predicting weather changes...",
  ];

  // Randomize total loading time between 8 and 15 seconds
  const totalLoadingTime = Math.floor(Math.random() * (15 - 8 + 1) + 8) * 1000;

  // Rotate messages every 2 seconds
  let step = 0;
  const interval = setInterval(() => {
    if (step < messages.length) {
      messageBox.querySelector("p").textContent = messages[step];
      step++;
    }
  }, 2000);

  // Stop loading after the randomized time
  setTimeout(() => {
    clearInterval(interval);

    // Replace spinner with a green checkmark
    const spinner = messageBox.querySelector(".spinner");
    spinner.classList.remove("spinner");
    spinner.classList.add("checkmark");
    spinner.innerHTML = "✔";

    // Update the final message
    messageBox.querySelector("p").textContent =
      "Please look out of the window to check the weather.";
  }, totalLoadingTime);
});
