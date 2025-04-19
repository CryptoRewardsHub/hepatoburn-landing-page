// Conversion tracking script
document.addEventListener('DOMContentLoaded', function() {
    // Track all CTA button clicks
    const ctaButtons = document.querySelectorAll('.cta-button, .order-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get button text and location on page
            const buttonText = this.innerText.trim();
            const sectionId = this.closest('section').id || 'unknown-section';
            
            // Send tracking event (this would connect to your analytics platform)
            trackEvent('button_click', {
                button_text: buttonText,
                section: sectionId,
                page: 'hepatoburn-landing'
            });
            
            // For affiliate links, add tracking parameters
            if (this.href && this.href.includes('hepatoburn.com')) {
                // Add affiliate tracking parameters if not already present
                if (!this.href.includes('hop=')) {
                    if (this.href.includes('?')) {
                        this.href += '&hop=zzzzz&tracking=landing_page';
                    } else {
                        this.href += '?hop=zzzzz&tracking=landing_page';
                    }
                }
                
                // Track which package was selected (for order buttons)
                if (this.classList.contains('order-button')) {
                    const packageHeading = this.closest('.package').querySelector('h3').innerText;
                    trackEvent('package_selected', {
                        package: packageHeading,
                        page: 'hepatoburn-landing'
                    });
                }
            }
        });
    });
    
    // Track scroll depth
    let scrollMarkers = [25, 50, 75, 90];
    let markersSeen = {};
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        scrollMarkers.forEach(marker => {
            if (scrollPercent >= marker && !markersSeen[marker]) {
                markersSeen[marker] = true;
                trackEvent('scroll_depth', {
                    depth_percentage: marker,
                    page: 'hepatoburn-landing'
                });
            }
        });
    });
    
    // Track time spent on page
    let timeMarkers = [30, 60, 120, 300]; // seconds
    let timeMarkersSeen = {};
    let startTime = new Date().getTime();
    
    setInterval(function() {
        const timeSpent = Math.floor((new Date().getTime() - startTime) / 1000);
        
        timeMarkers.forEach(marker => {
            if (timeSpent >= marker && !timeMarkersSeen[marker]) {
                timeMarkersSeen[marker] = true;
                trackEvent('time_spent', {
                    seconds: marker,
                    page: 'hepatoburn-landing'
                });
            }
        });
    }, 1000);
    
    // Placeholder function for tracking events
    // In a real implementation, this would send data to your analytics platform
    function trackEvent(eventName, eventData) {
        console.log('TRACKING:', eventName, eventData);
        
        // This is where you would integrate with your actual tracking system
        // For example, with Google Analytics:
        /*
        if (typeof gtag === 'function') {
            gtag('event', eventName, eventData);
        }
        */
    }
});

// Add schema markup for rich snippets
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HepatoBurn",
    "description": "A natural supplement designed to support liver health and promote weight loss by addressing the root cause of stubborn weight gain.",
    "image": "images/hepatoburn-bottle.png",
    "brand": {
        "@type": "Brand",
        "name": "HepatoBurn"
    },
    "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "49",
        "highPrice": "79",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "234000"
    }
});
document.head.appendChild(schemaScript);

// Lazy loading for images to improve page speed
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    if (image.dataset.src) {
                        image.src = image.dataset.src;
                        image.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(image => {
            if (image.src) {
                image.dataset.src = image.src;
                image.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                imageObserver.observe(image);
            }
        });
    }
});

// Exit intent popup for conversion optimization
document.addEventListener('DOMContentLoaded', function() {
    let exitPopupShown = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitPopupShown) {
            exitPopupShown = true;
            showExitPopup();
        }
    });
    
    function showExitPopup() {
        // Create popup elements
        const overlay = document.createElement('div');
        overlay.className = 'exit-popup-overlay';
        
        const popup = document.createElement('div');
        popup.className = 'exit-popup';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'exit-popup-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        const content = document.createElement('div');
        content.className = 'exit-popup-content';
        content.innerHTML = `
            <h3>WAIT! Don't Miss This Special Offer</h3>
            <p>Before you go, take advantage of our limited-time discount on HepatoBurn!</p>
            <a href="https://www.hepatoburn.com/welcome-h?hop=zzzzz" class="cta-button">GET SPECIAL DISCOUNT NOW</a>
        `;
        
        // Assemble and add to DOM
        popup.appendChild(closeBtn);
        popup.appendChild(content);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        // Track popup display
        trackEvent('exit_popup_shown', {
            page: 'hepatoburn-landing'
        });
        
        // Placeholder tracking function
        function trackEvent(eventName, eventData) {
            console.log('TRACKING:', eventName, eventData);
        }
    }
    
    // Add CSS for exit popup
    const style = document.createElement('style');
    style.textContent = `
        .exit-popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .exit-popup {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            position: relative;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .exit-popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #8b0000;
        }
        
        .exit-popup-content {
            text-align: center;
        }
        
        .exit-popup-content h3 {
            color: #8b0000;
            margin-bottom: 15px;
        }
        
        .exit-popup-content p {
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);
});
