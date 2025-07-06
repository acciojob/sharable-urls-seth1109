// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Construct the URL with query parameters
    let updatedUrl = 'https://localhost:8080/';
    if (name) {
        updatedUrl += '?name=' + encodeURIComponent(name);
    }
    if (year) {
        updatedUrl += (name ? '&' : '?') + 'year=' + encodeURIComponent(year);
    }

    // Update the h3 element with the new URL
    document.getElementById('url').innerText = updatedUrl;
});
