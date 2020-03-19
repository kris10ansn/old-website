function smoothScroll() {
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
}

function loadImage() {
    const img = document.querySelector("img.jumbo");
    const startTime = Date.now();
    const anim = "--img-anim-delay";

    img.onload = () => {
        const styles = window.getComputedStyle(img);
        const animDelay =
            (parseFloat(styles.getPropertyValue(anim)) || 0) * 1000;
        const loadTime = Date.now() - startTime;

        const newAnimDelay = Math.max(0, animDelay - loadTime);
        img.style.setProperty(anim, `${newAnimDelay / 1000}s`);

        img.style.display = "block";
    };

    img.src = "assets/code.png";
}

function removeImageDrag() {
    const dont = () => false;
    document
        .querySelectorAll("img, svg")
        .forEach(img => (img.ondragstart = dont));
}

function mobileNav() {
    const hamburgerButton = document.querySelector("#hamburger-button");
    const mobileNav = document.querySelector("mobile-nav");

    hamburgerButton.addEventListener("click", () => {
        mobileNav.classList.add("open");
        mobileNav.classList.add("opened");
    });

    mobileNav.addEventListener("click", () =>
        mobileNav.classList.remove("open")
    );
}

loadImage();
smoothScroll();
removeImageDrag();
mobileNav();
