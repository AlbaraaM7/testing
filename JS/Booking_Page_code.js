// Get first name and last name separately
// Combine them for the alert using concatenation

document.getElementById("Book_btn_submit").onclick = function () {

    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;

    let username = firstName + " " + lastName;
    window.alert("Thank you for booking " + username + ", we hope you have safe travel with us and enjoy to your fullest");
};

// Get the dropdown element with and add a 'change' event listener
// Create a function and get the selected option's value (price) from the dropdown
// Update the text content of the element with ID 'total_Price' to display the price


document.getElementById("package").addEventListener("change", function () {
    const selectedPrice = this.value;

    document.getElementById("total_Price").textContent = "AED " + selectedPrice;
});