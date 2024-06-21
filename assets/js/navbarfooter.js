// Function to fetch and insert navbar content
const loadNavbar = () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbarContainer').innerHTML = data;
      })
      .catch(error => console.error('Error fetching navbar:', error));
  }
  
  // Function to fetch and insert footer content
  const loadFooter = () => {
    // Fetch the content of footer.html using the fetch API
    fetch('footer.html')
    // Once the content is fetched, convert the response to text
      .then(response => response.text())
        // After converting to text, insert the content into the navbar container
      .then(data => {
        document.getElementById('footerContainer').innerHTML = data;
      })
    //   Log an error message to the console if it is unable to get the footer 
      .catch(error => console.error('Error fetching footer:', error));
  }
  
  // Call functions to load navbar and footer when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
  });
  