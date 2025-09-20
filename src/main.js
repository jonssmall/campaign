import './style.css'

// Mobile menu functionality
const mobileMenuButton = document.querySelector('#mobile-menu-button')
const mobileMenu = document.querySelector('#mobile-menu')

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a')
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}

// Desktop header scroll animation (mobile header is always solid blue)
const desktopHeaderBg = document.querySelector('#desktop-header-bg')
const scrollThreshold = 50

if (desktopHeaderBg) {
  const updateDesktopHeader = () => {
    const scrollY = window.scrollY
    
    if (scrollY > scrollThreshold) {
      // Scrolled down - apply darker background with more opacity
      desktopHeaderBg.className = 'bg-gradient-to-b from-black/90 via-black/80 to-black/60 backdrop-blur-md transition-all duration-500 ease-in-out shadow-lg'
    } else {
      // At top - transparent background to show hero image
      desktopHeaderBg.className = 'bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-sm transition-all duration-500 ease-in-out'
    }
  }

  // Listen for scroll events with throttling for performance
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateDesktopHeader()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', handleScroll)
  
  // Initial check in case page loads scrolled
  updateDesktopHeader()
}

// Learn About Anthony smooth scroll functionality
const learnAboutButton = document.querySelector('#learn-about-button')
if (learnAboutButton) {
  learnAboutButton.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about-section')
    if (aboutSection) {
      // CSS scroll-margin-top handles the header offset automatically
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
}

// Header "About Anthony" buttons smooth scroll functionality
const desktopAboutButton = document.querySelector('#desktop-about-button')
const mobileAboutButton = document.querySelector('#mobile-about-button')
const footerAboutButton = document.querySelector('#footer-about-button')

function handleAboutAnthonyClick() {
  const aboutSection = document.querySelector('#about-section')
  
  // Check if we're on the home page and the about section exists
  if (aboutSection) {
    // We're on the home page - smooth scroll to the section
    // CSS scroll-margin-top handles the header offset automatically
    aboutSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    // We're on a different page - navigate to home page with anchor fragment
    // Use Vite's BASE_URL to ensure correct path regardless of deployment depth
    window.location.href = `${import.meta.env.BASE_URL}#about-section`
  }
}

if (desktopAboutButton) {
  desktopAboutButton.addEventListener('click', handleAboutAnthonyClick)
}

if (mobileAboutButton) {
  mobileAboutButton.addEventListener('click', () => {
    // Close mobile menu first
    const mobileMenu = document.querySelector('#mobile-menu')
    if (mobileMenu) {
      mobileMenu.classList.add('hidden')
    }
    
    // Then handle the navigation/scrolling
    handleAboutAnthonyClick()
  })
}

if (footerAboutButton) {
  footerAboutButton.addEventListener('click', handleAboutAnthonyClick)
}

// Handle anchor fragment navigation when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Check if there's a hash in the URL when the page loads
  if (window.location.hash === '#about-section') {
    const aboutSection = document.querySelector('#about-section')
    if (aboutSection) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        // CSS scroll-margin-top handles the header offset automatically
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    }
  }
})

// Newsletter signup form functionality
const newsletterForm = document.querySelector('#newsletter-signup')
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const emailInput = document.querySelector('#email')
    const zipcodeInput = document.querySelector('#zipcode')
    const submitButton = newsletterForm.querySelector('button[type="submit"]')
    
    // Basic validation
    const email = emailInput.value.trim()
    const zipcode = zipcodeInput.value.trim()
    
    if (!email || !zipcode) {
      alert('Please fill in both email and zip code.')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      emailInput.focus()
      return
    }
    
    // Zip code validation (5 digits)
    const zipRegex = /^\d{5}$/
    if (!zipRegex.test(zipcode)) {
      alert('Please enter a valid 5-digit zip code.')
      zipcodeInput.focus()
      return
    }
    
    // Show loading state
    const originalText = submitButton.textContent
    submitButton.textContent = 'Signing Up...'
    submitButton.disabled = true
    submitButton.classList.add('opacity-75', 'cursor-not-allowed')
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Success feedback
      submitButton.textContent = 'Success! ✓'
      submitButton.classList.remove('bg-blue-600', 'hover:bg-blue-500')
      submitButton.classList.add('bg-green-600', 'hover:bg-green-500')
      
      // Reset form
      emailInput.value = ''
      zipcodeInput.value = ''
      
      // Show success message
      alert(`Thank you! We've added ${email} to our mailing list.`)
      
      // Reset button after delay
      setTimeout(() => {
        submitButton.textContent = originalText
        submitButton.disabled = false
        submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-green-600', 'hover:bg-green-500')
        submitButton.classList.add('bg-blue-600', 'hover:bg-blue-500')
      }, 2000)
    }, 1500)
  })
}

// Image Carousel functionality
const initImageCarousel = () => {
  const img1 = document.getElementById('carousel-img-1')
  const img2 = document.getElementById('carousel-img-2')
  const img3 = document.getElementById('carousel-img-3')
  const indicator1 = document.getElementById('indicator-1')
  const indicator2 = document.getElementById('indicator-2')
  const indicator3 = document.getElementById('indicator-3')
  
  // Check if carousel elements exist (they might not be on every page)
  if (!img1 || !img2 || !img3) return
  
  let currentImage = 1
  const totalImages = 3
  
  const showImage = (imageNumber) => {
    // Reset all images to hidden
    img1.classList.remove('opacity-100')
    img1.classList.add('opacity-0')
    img2.classList.remove('opacity-100')
    img2.classList.add('opacity-0')
    img3.classList.remove('opacity-100')
    img3.classList.add('opacity-0')
    
    // Reset all indicators
    if (indicator1 && indicator2 && indicator3) {
      indicator1.classList.remove('bg-opacity-70')
      indicator1.classList.add('bg-opacity-30')
      indicator2.classList.remove('bg-opacity-70')
      indicator2.classList.add('bg-opacity-30')
      indicator3.classList.remove('bg-opacity-70')
      indicator3.classList.add('bg-opacity-30')
    }
    
    // Show the current image and activate its indicator
    if (imageNumber === 1) {
      img1.classList.remove('opacity-0')
      img1.classList.add('opacity-100')
      if (indicator1) {
        indicator1.classList.remove('bg-opacity-30')
        indicator1.classList.add('bg-opacity-70')
      }
    } else if (imageNumber === 2) {
      img2.classList.remove('opacity-0')
      img2.classList.add('opacity-100')
      if (indicator2) {
        indicator2.classList.remove('bg-opacity-30')
        indicator2.classList.add('bg-opacity-70')
      }
    } else if (imageNumber === 3) {
      img3.classList.remove('opacity-0')
      img3.classList.add('opacity-100')
      if (indicator3) {
        indicator3.classList.remove('bg-opacity-30')
        indicator3.classList.add('bg-opacity-70')
      }
    }
  }
  
  const nextImage = () => {
    currentImage = currentImage === totalImages ? 1 : currentImage + 1
    showImage(currentImage)
  }
  
  // Auto-advance carousel every 4 seconds
  let carouselInterval = setInterval(nextImage, 4000)
  
  // Function to start the carousel
  const startCarousel = () => {
    if (carouselInterval) clearInterval(carouselInterval)
    carouselInterval = setInterval(nextImage, 4000)
  }
  
  // Function to stop the carousel
  const stopCarousel = () => {
    if (carouselInterval) {
      clearInterval(carouselInterval)
      carouselInterval = null
    }
  }
  
  // Pause carousel on hover, resume on mouse leave
  const carouselContainer = img1.parentElement
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarousel)
    carouselContainer.addEventListener('mouseleave', startCarousel)
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initImageCarousel)
