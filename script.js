const mobileMenu = document.getElementById('mobile-menu');
            const navbarMenu = document.getElementById('navbar-menu');
            const overlay = document.getElementById('overlay');
            
            // Buat tombol close (X) secara dinamis
            const closeBtn = document.createElement('div');
            closeBtn.classList.add('close-btn');
            closeBtn.innerHTML = '<i class="fas fa-times"></i>';
            navbarMenu.appendChild(closeBtn);
            
            // Function to toggle menu, overlay, and close button
            const toggleMenu = () => {
                    navbarMenu.classList.toggle('active');
                    overlay.classList.toggle('active');
            };
            
            // Event listener for hamburger menu
            mobileMenu.addEventListener('click', toggleMenu);
            
            // Event listener for close button (X)
            closeBtn.addEventListener('click', toggleMenu);
            
            // Event listener for overlay to close menu
            overlay.addEventListener('click', toggleMenu);
            
           
document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const phoneNumber = '6285712816240'; // Ganti dengan nomor WhatsApp
    const message = `Halo, saya ingin berlangganan newsletter dengan email: ${email}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});

const viewCounter = {
            key: 'pageViews',
            count: 0,
            
            init() {
                this.loadCount();
                this.updateDisplay();
                this.incrementCount();
                this.addAnimation();
            },
            
            loadCount() {
                this.count = localStorage.getItem(this.key) || 0;
                this.count = parseInt(this.count);
            },
            
            incrementCount() {
                this.count++;
                localStorage.setItem(this.key, this.count);
            },
            
            updateDisplay() {
                document.querySelector('.view-count').textContent = this.count;
            },
            
            addAnimation() {
                const icon = document.querySelector('.view-icon');
                icon.classList.add('animated');
                setTimeout(() => {
                    icon.classList.remove('animated');
                }, 500);
            }
        }; 

        // Initialize ketika DOM siap
        document.addEventListener('DOMContentLoaded', () => {
            viewCounter.init();
            
            // Update real-time (simulasi)
            setInterval(() => {
                viewCounter.incrementCount();
                viewCounter.updateDisplay();
            }, 10000); // Update setiap 10 detik untuk simulasi
        });