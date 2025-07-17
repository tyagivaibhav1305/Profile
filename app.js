// Portfolio Data
const portfolioData = {
  "personal": {
    "name": "Vaibhav Tyagi",
    "title": "Senior Data Scientist & Manager",
    "location": "Data Science Professional",
    "summary": "Experienced data scientist and manager with expertise in statistical modeling, GenAI, and machine learning. Skilled in Python, TensorFlow, Azure, and stakeholder management. Passionate about transforming data into actionable insights and leading high-performing analytics teams."
  },
  "skills": {
    "technical": [
      {"name": "Python", "level": 95},
      {"name": "TensorFlow", "level": 90},
      {"name": "Azure", "level": 85},
      {"name": "Statistical Modeling", "level": 92},
      {"name": "GenAI", "level": 88},
      {"name": "Machine Learning", "level": 94},
      {"name": "Data Analytics", "level": 91},
      {"name": "SQL", "level": 89},
      {"name": "R", "level": 82},
      {"name": "Tableau", "level": 86}
    ],
    "management": [
      {"name": "Stakeholder Management", "level": 93},
      {"name": "Team Leadership", "level": 90},
      {"name": "Project Management", "level": 88},
      {"name": "Strategic Planning", "level": 85}
    ]
  },
  "projects": [
    {
      "title": "AI-Powered Customer Segmentation",
      "description": "Developed a machine learning model using Python and TensorFlow to segment customers based on behavior patterns, improving marketing ROI by 35%.",
      "technologies": ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      "impact": "35% improvement in marketing ROI",
      "details": "Built an end-to-end customer segmentation pipeline using advanced clustering algorithms and deep learning techniques. The model processes over 1M customer records and provides real-time insights for marketing campaigns."
    },
    {
      "title": "Generative AI Content Platform",
      "description": "Led the development of a GenAI platform that generates personalized content recommendations, increasing user engagement by 45%.",
      "technologies": ["GPT-4", "LangChain", "Azure OpenAI", "Python"],
      "impact": "45% increase in user engagement",
      "details": "Architected a scalable GenAI solution that leverages large language models for personalized content generation. Implemented prompt engineering and fine-tuning strategies to improve content quality and relevance."
    },
    {
      "title": "Real-time Analytics Dashboard",
      "description": "Created an interactive dashboard using Tableau and Python that provides real-time insights into business metrics, enabling data-driven decision making.",
      "technologies": ["Tableau", "Python", "SQL", "Azure"],
      "impact": "50% faster decision making",
      "details": "Developed a comprehensive analytics dashboard that consolidates data from multiple sources and provides interactive visualizations. The dashboard serves over 200 users across different departments."
    },
    {
      "title": "Predictive Maintenance Model",
      "description": "Built a machine learning model to predict equipment failures, reducing downtime by 60% and maintenance costs by 40%.",
      "technologies": ["Python", "Time Series Analysis", "Azure ML", "IoT"],
      "impact": "60% reduction in downtime",
      "details": "Implemented a predictive maintenance solution using IoT sensor data and time series forecasting. The model analyzes equipment performance patterns and predicts failures before they occur."
    }
  ],
  "experience": [
    {
      "title": "Senior Data Scientist & Manager",
      "company": "Tech Innovation Corp",
      "period": "2022 - Present",
      "description": "Leading a team of 8 data scientists and ML engineers, overseeing the development of AI/ML solutions that drive business growth and operational efficiency.",
      "achievements": [
        "Managed $2M+ ML infrastructure budget",
        "Increased team productivity by 40% through process optimization",
        "Delivered 15+ production ML models"
      ]
    },
    {
      "title": "Data Science Lead",
      "company": "Analytics Solutions Ltd",
      "period": "2020 - 2022",
      "description": "Developed and deployed machine learning models for customer analytics and business intelligence, focusing on revenue optimization and cost reduction.",
      "achievements": [
        "Built ML models generating $5M+ additional revenue",
        "Reduced customer churn by 25% through predictive analytics",
        "Implemented automated ML pipeline reducing deployment time by 70%"
      ]
    },
    {
      "title": "Senior Data Scientist",
      "company": "Data Insights Inc",
      "period": "2018 - 2020",
      "description": "Specialized in statistical modeling and advanced analytics, delivering insights that informed strategic business decisions across multiple departments.",
      "achievements": [
        "Developed predictive models improving forecast accuracy by 30%",
        "Conducted A/B testing resulting in 20% conversion improvement",
        "Mentored 5 junior data scientists"
      ]
    }
  ],
  "contact": {
    "email": "vaibhav.tyagi@example.com",
    "phone": "+91 9876543210",
    "linkedin": "linkedin.com/in/vaibhav-tyagi-ds",
    "github": "github.com/vaibhav-tyagi",
    "location": "India"
  }
};

// DOM Elements
let isAnimating = false;

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Loading Screen Animation
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  
  // Hide loading screen after 3 seconds
  setTimeout(() => {
    gsap.to(loadingScreen, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        loadingScreen.style.display = 'none';
        initAnimations();
      }
    });
  }, 3000);
}

// Particle System
function createParticles() {
  const container = document.getElementById('particles-container');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(particle);
  }
}

// Typing Animation
function startTypingAnimation() {
  const textElement = document.querySelector('.typing-text');
  const text = portfolioData.personal.name;
  
  gsap.to(textElement, {
    duration: 2,
    text: {
      value: text,
      delimiter: ""
    },
    ease: "none"
  });
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    gsap.to(counter, {
      textContent: target,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2
    });
  });
}

// Navigation
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active link highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Skills Animation
function initSkillsAnimation() {
  const technicalSkills = document.getElementById('technical-skills');
  const managementSkills = document.getElementById('management-skills');
  
  // Clear existing content
  technicalSkills.innerHTML = '';
  managementSkills.innerHTML = '';
  
  // Populate technical skills
  portfolioData.skills.technical.forEach(skill => {
    const skillItem = createSkillItem(skill);
    technicalSkills.appendChild(skillItem);
  });
  
  // Populate management skills
  portfolioData.skills.management.forEach(skill => {
    const skillItem = createSkillItem(skill);
    managementSkills.appendChild(skillItem);
  });
  
  // Animate skill bars on scroll
  ScrollTrigger.create({
    trigger: '.skills',
    start: 'top 80%',
    onEnter: () => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar, index) => {
        const percentage = bar.getAttribute('data-percentage');
        gsap.to(bar, {
          width: percentage + '%',
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out"
        });
      });
    }
  });
}

function createSkillItem(skill) {
  const skillItem = document.createElement('div');
  skillItem.className = 'skill-item';
  skillItem.innerHTML = `
    <div class="skill-header">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-percentage">${skill.level}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-progress" data-percentage="${skill.level}"></div>
    </div>
  `;
  return skillItem;
}

// Projects - Fixed implementation
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
  // Create project cards
  portfolioData.projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    projectsGrid.appendChild(projectCard);
  });
  
  console.log('Projects initialized:', portfolioData.projects.length);
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-technologies">
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <div class="project-impact">${project.impact}</div>
  `;
  
  // Add click event to open modal
  card.addEventListener('click', () => {
    openProjectModal(project);
  });
  
  return card;
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalTechnologies = document.getElementById('modal-technologies');
  const modalImpact = document.getElementById('modal-impact');
  const modalDetails = document.getElementById('modal-details');
  
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTechnologies.innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
  modalImpact.innerHTML = `<strong>Impact:</strong> ${project.impact}`;
  modalDetails.textContent = project.details;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  gsap.fromTo(modal.querySelector('.modal-content'), {
    scale: 0.8,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out"
  });
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  document.body.style.overflow = 'auto';
  
  gsap.to(modal.querySelector('.modal-content'), {
    scale: 0.8,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      modal.style.display = 'none';
    }
  });
}

// Experience Timeline
function initExperience() {
  const timeline = document.getElementById('timeline');
  
  // Clear existing content
  timeline.innerHTML = '';
  
  portfolioData.experience.forEach((job, index) => {
    const timelineItem = createTimelineItem(job, index);
    timeline.appendChild(timelineItem);
  });
}

function createTimelineItem(job, index) {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <div class="timeline-content">
      <h3 class="timeline-title">${job.title}</h3>
      <h4 class="timeline-company">${job.company}</h4>
      <p class="timeline-period">${job.period}</p>
      <p class="timeline-description">${job.description}</p>
      <ul class="timeline-achievements">
        ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    </div>
  `;
  
  return item;
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitButton.style.background = 'var(--color-success)';
      
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
        form.reset();
        
        // Reset form labels
        const labels = form.querySelectorAll('label');
        labels.forEach(label => {
          label.style.top = '15px';
          label.style.fontSize = '16px';
          label.style.color = 'var(--color-text-secondary)';
        });
        
        showNotification('Message sent successfully!', 'success');
      }, 2000);
    }, 2000);
  });
  
  // Handle form field focus effects
  const formInputs = form.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      const label = input.nextElementSibling;
      if (label) {
        label.style.top = '-10px';
        label.style.fontSize = '12px';
        label.style.color = 'var(--color-primary)';
      }
    });
    
    input.addEventListener('blur', () => {
      const label = input.nextElementSibling;
      if (label && !input.value) {
        label.style.top = '15px';
        label.style.fontSize = '16px';
        label.style.color = 'var(--color-text-secondary)';
      }
    });
  });
}

// GSAP Animations
function initAnimations() {
  // Hero animations
  gsap.timeline()
    .from('.hero-content > *', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    })
    .from('.hero-stats .stat-item', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5");
  
  // Start typing animation
  setTimeout(() => {
    startTypingAnimation();
    setTimeout(() => {
      animateCounters();
    }, 2000);
  }, 1000);
  
  // Section animations
  gsap.utils.toArray('section').forEach((section, index) => {
    if (section.id === 'home') return;
    
    const header = section.querySelector('.section-header');
    if (header) {
      gsap.from(header, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  });
  
  // About section animations
  gsap.from('.about-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    }
  });
  
  // Project cards animation
  ScrollTrigger.create({
    trigger: '.projects-grid',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  });
  
  // Timeline animations
  ScrollTrigger.create({
    trigger: '.timeline',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.timeline-item', {
        x: (index) => index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });
    }
  });
  
  // Contact section animations
  gsap.from('.contact-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%'
    }
  });
  
  // Scroll indicator animation
  gsap.to('.scroll-indicator', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero',
      start: 'bottom 80%',
      end: 'bottom 20%',
      scrub: true
    }
  });
}

// Utility Functions
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
    color: var(--color-btn-primary-text);
    padding: 15px 20px;
    border-radius: var(--radius-base);
    z-index: 10000;
    box-shadow: var(--shadow-lg);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');
  
  // Initialize all components
  initLoadingScreen();
  createParticles();
  initNavigation();
  initSkillsAnimation();
  initProjects();
  initExperience();
  initContactForm();
  
  // Modal close functionality
  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('project-modal');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }
  
  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeProjectModal();
    }
  });
});

// Performance optimizations
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Parallax effect for hero section
window.addEventListener('scroll', throttle(() => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, 16));

// Intersection Observer for performance
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});