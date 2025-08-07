    const animatedElements = document.querySelectorAll('.animate-left, .animate-right');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate-show');
    observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));