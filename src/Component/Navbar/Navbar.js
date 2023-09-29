import './Navbar.css';
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const checkbox = document.getElementById("checkbox_toggle");
      checkbox.checked = false;
    });
  });
});


const Navbar = () => {
  return (
      <div id="Navbar" className="Navbar-container">
            <div class="logo">
                <img src="li_logo_navbar.png" alt="logo"/>
            </div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li class="AboutUsMenu"><a href="#">About Us</a>
                      <ul class="dropdown">
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Our History</a></li>
                            <li><a href="#">Our Vision And Mission</a></li>
                            <li><a href="#">Lamsan Groups of Companies</a></li>
                      </ul>
                </li>
                <li class="ManufacturingMenu"><a href="#">Manufacturing</a>
                    <ul class="dropdown">
                      <li><a href="#">Product</a></li>
                      <li><a href="#">Corn Wet Milling Process</a></li>
                    </ul>
                </li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
                </div>
              </ul>
      </div>
  );
}
export default Navbar;