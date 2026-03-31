function gvNormalizeUsername(input) {
  return input
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "");
}
            
function gvComputeUsername (first, last) {
  return gvNormalizeUsername(last).slice(0, 4) + gvNormalizeUsername(first).slice(0, 4) + "2";
}

const  firstNameInput = document.getElementById("firstName");
const  lastNameInput = document.getElementById("lastName");
const  usernameInput = document.getElementById("username");
            
const gvRegisterUpdateUsername = () => {
  usernameInput.value =gvComputeUsername(firstNameInput.value, lastNameInput.value);
  return true;
};

firstNameInput.addEventListener("input",gvRegisterUpdateUsername);
lastNameInput.addEventListener("input",gvRegisterUpdateUsername);