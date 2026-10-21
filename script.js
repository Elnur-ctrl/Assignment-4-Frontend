const userProfile = {
  name: "Student",
  birthYear: 2000,
  isDeveloper: true,
  hobbies: ["Reading", "Music"]
};

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const profileInfo = document.getElementById("profileInfo");
const hobbiesList = document.getElementById("hobbiesList");
const newHobbyInput = document.getElementById("newHobby");

function updateProfileInfo() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;

  profileInfo.textContent =
    `Name: ${userProfile.name} · Age: ${age} · Hobbies: ${userProfile.hobbies.length}`;

  console.log("Age:", age);
  console.log("Number of hobbies:", userProfile.hobbies.length);
}

function renderHobbies() {
  hobbiesList.innerHTML = "";

  userProfile.hobbies.forEach((hobby) => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
  });

  updateProfileInfo();
}

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  userProfile.name = usernameInput.value.trim();
  userProfile.birthYear = Number(birthYearInput.value);

  renderHobbies();
});

document.getElementById("addItemButton").addEventListener("click", () => {
  const hobby = newHobbyInput.value.trim();

  if (hobby !== "") {
    userProfile.hobbies.push(hobby);
    newHobbyInput.value = "";
    renderHobbies();
  }
});

document.getElementById("removeItemButton").addEventListener("click", () => {
  userProfile.hobbies.pop();
  renderHobbies();
});

renderHobbies();