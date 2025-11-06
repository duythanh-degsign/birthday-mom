const giftBtn = document.getElementById("gift-btn");
const popup = document.getElementById("popup");
const fireBtn = document.getElementById("firework-btn");
const canvas = document.getElementById("fireworkCanvas");
const ctx = canvas.getContext("2d");

giftBtn.onclick = () => {
    popup.classList.remove("hidden");
};

fireBtn.onclick = () => {
    popup.classList.add("hidden");
    canvas.classList.remove("hidden");
    startFireworks();
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
    setInterval(() => {
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height / 2,
                speedX: (Math.random() - 0.5) * 6,
                speedY: (Math.random() - 0.5) * 6,
                size: Math.random() * 5 + 2
            });
        }
    }, 300);

    animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        ctx.fillStyle = "white";
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.x += p.speedX;
        p.y += p.speedY;
        p.size -= 0.05;

        if (p.size <= 0) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
}
