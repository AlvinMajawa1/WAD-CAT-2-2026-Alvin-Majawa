const services = [
	{
		name: "Vendor Profile Setup",
		price: "MWK 10,000"
	},
	{
		name: "Featured Listing Boost",
		price: "MWK 7,500"
	},
	{
		name: "Product Photo Guidance",
		price: "MWK 5,000"
	},
	{
		name: "Weekly Promo Placement",
		price: "MWK 8,000"
	}
];

const servicesContainer = document.getElementById("services-list");

if (servicesContainer) {
	services.forEach((service) => {
		const card = document.createElement("article");
		card.className = "card";

		card.innerHTML = `
			<h3>${service.name}</h3>
			<p><strong>Price:</strong> ${service.price}</p>
		`;

		servicesContainer.appendChild(card);
	});
}

const itemInput = document.getElementById("item");
const addItemButton = document.getElementById("add-item-btn");
const wishlist = document.getElementById("wishlist");

const addWishlistItem = () => {
	if (!itemInput || !wishlist) {
		return;
	}

	const itemName = itemInput.value.trim();
	if (!itemName) {
		return;
	}

	const listItem = document.createElement("li");
	listItem.className = "wishlist-item";

	const label = document.createElement("span");
	label.textContent = itemName;

	const removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.className = "remove-btn";
	removeButton.textContent = "Remove";

	removeButton.addEventListener("click", () => {
		listItem.remove();
	});

	listItem.appendChild(label);
	listItem.appendChild(removeButton);
	wishlist.appendChild(listItem);

	itemInput.value = "";
	itemInput.focus();
};

if (addItemButton) {
	addItemButton.addEventListener("click", addWishlistItem);
}

if (itemInput) {
	itemInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			addWishlistItem();
		}
	});
}

const contactForm = document.getElementById("contact-form");
const nameField = document.getElementById("contact-name");
const emailField = document.getElementById("contact-email");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && nameField && emailField && formFeedback) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const customerName = nameField.value.trim();
		const customerEmail = emailField.value.trim();
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!customerName) {
			formFeedback.textContent = "Please enter your name.";
			formFeedback.style.color = "#b91c1c";
			return;
		}

		if (!emailPattern.test(customerEmail)) {
			formFeedback.textContent = "Email is invalid.";
			formFeedback.style.color = "#b91c1c";
			return;
		}

		formFeedback.textContent = `Thank you ${customerName}. We'll contact you shortly.`;
		formFeedback.style.color = "#166534";
		contactForm.reset();
	});
}
