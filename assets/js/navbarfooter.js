// Function to fetch and insert navbar content
const loadNavbar = () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        // document.getElementById('navbarContainer').innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const navbarContent = doc.body.firstChild;
        document.getElementById('navbarContainer').appendChild(navbarContent);
      })
      .catch(error => console.error('Error fetching navbar:', error));
  }
  
  // Function to fetch and insert footer content
  const loadFooter = () => {
    // Fetch the content of footer.html using the fetch API
    fetch('footer.html')
    // Once the content is fetched, convert the response to text
      .then(response => response.text())
        // After converting to text, insert the content into the footer container
      .then(data => {
        // Create a new DOMParser instance
      const parser = new DOMParser();
      // Parse the fetched HTML string into a Document object
      const doc = parser.parseFromString(data, 'text/html');
      // Get the first child element of the body (which is the main content of the fetched HTML)
      const footerContent = doc.body.firstChild;
      // Find the element with the ID 'footerContainer' in the current document
      // and append the parsed footer content as its child
      document.getElementById('footerContainer').appendChild(footerContent);
      })
    //   Log an error message to the console if it is unable to get the footer 
      .catch(error => console.error('Error fetching footer:', error));
  }
  
  // Call functions to load navbar and footer when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
  });
  