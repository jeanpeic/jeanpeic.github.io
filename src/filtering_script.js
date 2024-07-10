document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('.portfolio-nav ul li a');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    console.log("ACTION")
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            filterLinks.forEach(link => link.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Get filter value
            const filter = link.getAttribute('data-filter');

            // Show/Hide portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    console.log(item)
                    console.log('block')
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});