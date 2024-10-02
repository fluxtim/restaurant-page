const homeContent = `
    <h2>Welcome to Some Restaurant</h2>
    <p>Discover the perfect blend of fresh ingredients, exquisite flavors, and a warm ambiance. At Some Restaurant, we pride ourselves on serving dishes that bring people together, crafted with care and inspired by global cuisine.</p>
    <img src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Delicious food at Some Restaurant">
    <p>Whether you're joining us for a casual lunch or a special dinner, our menu has something for everyone. From seasonal specials to classic favorites, each dish is designed to offer an unforgettable dining experience. Come in, relax, and let us serve you a meal to remember.</p>
`;

const menuContent = `
    <h2>Our Menu</h2>
    <p>Explore our carefully crafted menu, featuring a variety of dishes made with the finest ingredients. Whether you're in the mood for a light snack or a hearty meal, we have something to satisfy every craving.</p>

    <h3>Starters</h3>
    <ul>
        <li><strong>Garlic Bread</strong> – Crispy and buttery, served with a side of marinara sauce.</li>
        <li><strong>Bruschetta</strong> – Grilled bread topped with fresh tomatoes, basil, and olive oil.</li>
    </ul>

    <h3>Main Courses</h3>
    <ul>
        <li><strong>Grilled Salmon</strong> – Freshly grilled salmon fillet served with seasonal vegetables and mashed potatoes.</li>
        <li><strong>Pasta Primavera</strong> – A delightful mix of fresh vegetables and pasta tossed in a light garlic sauce.</li>
    </ul>

    <h3>Desserts</h3>
    <ul>
        <li><strong>Cheesecake</strong> – Rich and creamy cheesecake topped with fresh berries.</li>
        <li><strong>Chocolate Lava Cake</strong> – Warm, gooey chocolate cake with a molten center.</li>
    </ul>

    <p>Visit us to enjoy these dishes and more, all made to order with care and expertise.</p>
`

const aboutContent = `
    <h2>About Us</h2>
    <p>At [Your Restaurant Name], we believe in creating a dining experience that goes beyond just food. Our restaurant is built on the foundation of quality ingredients, skilled chefs, and a passion for hospitality.</p>

    <h3>Our Story</h3>
    <p>Founded in [Year], we started as a small family-owned establishment with a big dream: to bring people together through good food and great company. Over the years, we've grown into a beloved local spot where friends, families, and food enthusiasts gather to share meals and make memories.</p>

    <h3>Our Commitment</h3>
    <p>We are committed to using the freshest ingredients and creating dishes that reflect our dedication to quality and taste. Whether you're a regular guest or visiting us for the first time, we strive to make every dining experience unforgettable.</p>

    <h3>Meet the Team</h3>
    <p>Our talented team of chefs and staff are passionate about what they do. From the kitchen to your table, every member of our team works to ensure that you have the best possible experience at Some Restaurant.</p>
`

const contentPage = function(pageContent){
    let prevDiv = document.querySelector("#page-div");
    if (prevDiv != null) {
        prevDiv.remove();
    }

    const contentDiv = document.querySelector(".content");
    let pageDiv = document.createElement("div");
    pageDiv.id = "page-div";
    pageDiv.innerHTML = pageContent;
    contentDiv.appendChild(pageDiv);
};

export { contentPage, homeContent, menuContent, aboutContent };