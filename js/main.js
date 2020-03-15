function distanceToTop(element) {
	return Math.floor(element.getBoundingClientRect().top);
}

function anchorLinkHandler(event) {
	event.preventDefault();
	const targetID = this.getAttribute("href");
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;

	const originalTop = distanceToTop(targetAnchor);

	window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
	location.hash = "";
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
