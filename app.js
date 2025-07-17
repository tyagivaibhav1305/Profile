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
      {"name": "AWS", "level": 82},
      {"name": "PowerBI", "level": 86}
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
    "title": "Likelihood of Approval Model for Clinical Trials",
    "description": "Developed a predictive model evaluating the likelihood of approval for assets and clinical trials using ensemble machine learning techniques. Leveraged diverse clinical trial data to enable strategic decisions in the pharmaceutical sector.",
    "technologies": ["Python", "SQL", "Azure", "Tableau"],
    "impact": "Optimized decision-making processes for clinical trial success, reducing investment risk and improving resource allocation.",
    "details": "Implemented an ensemble of probabilities analyzing relationships between trial and asset attributes and success/failure. Integrated multiple pharma datasets to build a comprehensive final dataset, enabling faster and more accurate clinical trial approvals."
  },
  {
    "title": "Scalable AI/ML, NLP, and Generative AI Algorithm Integration",
    "description": "Designed and implemented scalable AI/ML, NLP, and Generative AI algorithms integrated into software products, enhancing functionalities such as chatbots, recommendation engines, and text summarization modules.",
    "technologies": ["Python", "TensorFlow", "Keras", "SpaCy", "GPT-3.5", "Llama-2", "Phi-2", "Azure", "AWS SageMaker", "Databricks"],
    "impact": "Enabled advanced AI features in products, driving innovation and improving user engagement and product value.",
    "details": "Developed transformer-based deep learning models, deployed on cloud platforms with APIs for seamless integration, continuously improving through stakeholder feedback and iterative development."
  },
  {
    "title": "Automated Systematic Literature Review for Pharma",
    "description": "Built an automated product using Azure OpenAI and custom prompt libraries to streamline the inclusion and exclusion of research papers and white papers related to drug and medical device safety and efficacy.",
    "technologies": ["Azure OpenAI", "Custom Prompt Engineering", "API Development", "NLP"],
    "impact": "Significantly reduced manual review effort by automating evidence review processes, enhancing regulatory compliance and assessment accuracy.",
    "details": "System automated paper selection based on PICOS criteria tailored to client-specific requirements, eliminating the need for two dedicated human reviewers."
  },
  {
    "title": "BERT-based Line of Therapy Extraction for Clinical Trials",
    "description": "Developed and deployed a BERT-based NLP model to extract 'line of therapy' information from clinical trial inclusion criteria, streamlining patient eligibility assessment.",
    "technologies": ["Python", "Transformers (BERT)", "HuggingFace", "Azure", "AWS"],
    "impact": "Improved clinical trial efficiency and targeted therapy development by automating eligibility determination and reducing manual review time.",
    "details": "Built models that parsed unstructured clinical trial criteria and extracted key therapeutic line information, enabling faster and more precise patient-trial matching."
  },
  {
    "title": "Python-based Incident Resolution Recommendation System",
    "description": "Created a machine learning recommendation system predicting optimal team assignment for IT incident resolution, reducing misrouted incidents and improving operational efficiency.",
    "technologies": ["Python", "scikit-learn", "RNN", "SQL", "Tableau"],
    "impact": "Achieved 96% accuracy in recommendations, decreasing resolution time and enhancing support team performance.",
    "details": "Leveraged historical incident and resolution data with RNN enhancements to improve incident routing, reducing errors and improving first-time resolution rates."
  },
  {
    "title": "Medical Affairs API & Azure Cloud Integration",
    "description": "Engineered robust APIs and data pipelines for medical affairs data integration, utilizing Azure OpenAI and cloud services to improve technical scalability and stakeholder communication.",
    "technologies": ["FastAPI", "Flask", "Azure Cognitive Services", "Azure Cloud"],
    "impact": "Reduced manual PDF review efforts by 50% through automated extraction and interpretation of pharma documents, enhancing data accessibility and product robustness.",
    "details": "Built and maintained scalable ETL pipelines integrating pharma datasets and implemented APIs enabling stakeholders to efficiently extract insights from complex document formats."
  }

  ],
  "experience": [
  {
    "title": "Data Scientist Manager",
    "company": "Inizio",
    "period": "July 2022 - Present",
    "description": "Leading development of NLP, machine learning, and large language model POCs to streamline workflows in the pharmaceutical sector. Managing analytics, data storytelling, and data integration pipelines that consolidate over 20 Pharma datasets.",
    "achievements": [
      "Scaled team from 2 to 10 members in 18 months, fostering collaboration and productivity",
      "Implemented process improvements resulting in 70% reduction in process time and 50% efficiency boost",
      "Deployed and fine-tuned Llama-3, Llama-2, and phi-3 models on Azure cloud enhancing clinical trial insights",
      "Enabled stakeholders to reduce PDF review efforts by 50% through AI-driven interpretation of pharma documents"
    ]
  },
  {
    "title": "Interface Engineer II",
    "company": "Oracle",
    "period": "August 2021 - July 2022",
    "description": "Led ML model POC development using NLP, scikit-learn, TensorFlow, and PyTorch. Designed and improved project frameworks to enhance interface development and reduce configuration time. Focused on predictive modeling within healthcare and pharmaceutical domains.",
    "achievements": [
      "Reduced interface design and development time by 30%, and application-specific configuration by 45%",
      "Extracted insights from textual data reducing consultant efforts by 80%",
      "Spearheaded analytics and optimization efforts to improve product performance"
    ]
  },
  {
    "title": "Interface Developer",
    "company": "Providence India",
    "period": "September 2020 - August 2021",
    "description": "Developed and deployed ML models for predictive analytics and classification tasks. Collaborated with data scientists and engineers to define project objectives. Worked on Cerner proprietary software and customized SQL queries for data import and analysis.",
    "achievements": [
      "Conducted exploratory data analysis to inform feature engineering and modeling",
      "Implemented dashboards and reports that boosted team performance using ServiceNow APIs, PowerBI, and Excel",
      "Supported production environments and handled integration engine issues"
    ]
  },
  {
    "title": "Software Developer Senior Associate",
    "company": "NTT DATA Services",
    "period": "October 2017 - September 2020",
    "description": "Owned complete project cycles including requirement analysis, design, coding, testing, and deployment. Built models to improve IT incident routing accuracy and developed visualization dashboards using Tableau and Python.",
    "achievements": [
      "Developed incident resolution model with 96% recommendation accuracy, currently enhancing with RNN",
      "Delivered SLA dashboards and KPI breach reports supporting organizational accountability",
      "Designed and tested interfaces enabling application data exchange, adopting Agile methodologies"
    ]
  }
]
,
  "contact": {
    "email": "vaibhav.tyagi@example.com",
    "phone": "+91 xxxxxxxxxx",
    "linkedin": "linkedin.com/in/vaibhav-tyagi-analyst",
    "github": "github.com/tyagivaibhav1305",
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
