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
