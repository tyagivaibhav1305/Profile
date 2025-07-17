/* Main JS for dynamic content, modals, and helpers */

// Portfolio data (embedded as JSON)
const portfolioData = {
  name: "Vaibhav Tyagi",
  headline: "Senior Data Scientist & Manager",
  location: "Ghaziabad, India",
  summary:
    "Experienced Data Scientist and Manager with over 7.5 years of expertise in Research & Development and Data Science within the US Healthcare and Pharmaceutical sectors. Proficient in developing and deploying AI solutions using cloud technologies (AWS, Azure) to drive insights and innovation. Demonstrated leadership skills with a strategic mindset, capable of inspiring teams and driving business growth. Skilled in project management, client engagement, and proposal development.",
  skills: [
    "Statistical Modeling & Machine Learning",
    "Natural Language Processing",
    "Generative AI",
    "Cloud Engineering (AWS, Azure)",
    "Stakeholder Management",
    "Project Management",
    "Data Analysis & Visualization",
    "Software Development",
  ],
  technical: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "SQL",
    "FastAPI",
    "Flask",
    "Azure Cognitive Services",
    "AWS SageMaker",
    "Databricks",
    "Spark",
    "BERT",
    "Llama-2",
    "GPT-4",
  ],
  projects: [
    {
      title: "Likelihood of Approval",
      description:
        "Developed an ensemble model leveraging clinical trial data to predict asset and trial success, optimizing decision-making processes.",
    },
    {
      title: "Scalable AI/ML Solutions",
      description:
        "Designed and implemented scalable AI/ML, NLP, and Generative AI algorithms integrated into software products such as chatbots, recommendation engines, and summarization modules.",
    },
    {
      title: "Medical Affairs API Platform",
      description:
        "Built robust APIs using FastAPI and Flask, integrating Azure OpenAI for feature generation, enabling seamless data ingestion and stakeholder insights.",
    },
    {
      title: "Systematic Literature Review Automation",
      description:
        "Leveraged Azure OpenAI and custom prompts to automate inclusion/exclusion screening of research papers based on PICOS criteria, reducing manual review effort.",
    },
    {
      title: "Line of Therapy Extraction",
      description:
        "Implemented BERT-based model to extract line of therapy from clinical trial inclusion criteria, streamlining patient eligibility assessment.",
    },
    {
      title: "Incident Resolution Recommendation",
      description:
        "Created a model analyzing historical incidents and comments to recommend correct assignment teams with 96% accuracy.",
    },
  ],
  experience: [
    {
      position: "Data Scientist Manager",
      company: "Inizio",
      period: "Jul 2022 – Present",
      details:
        "Leading ML PoC development, managing analytics and data storytelling, integrating 20+ pharma datasets, deploying and fine-tuning Llama family models on Azure.",
    },
    {
      position: "Interface Engineer II",
      company: "Oracle Cerner Corporation",
      period: "Aug 2021 – Jul 2022",
      details:
        "Extracted insights from textual data, designed frameworks reducing interface design time by 30%, and applied ML across healthcare domain.",
    },
    {
      position: "Interface Developer",
      company: "Providence India",
      period: "Sep 2020 – Aug 2021",
      details:
        "Led end-to-end project cycles, built incident routing model, created dashboards to monitor KPIs.",
    },
    {
      position: "Software Developer Senior Associate",
      company: "NTT DATA Services",
      period: "Oct 2017 – Sep 2020",
      details:
        "Designed data exchange interfaces, performed data trend analysis with Tableau and Python, and automated testing using Selenium.",
    },
  ],
  contact: {
    email: "tyagivaibhav1305@gmail.com",
    phone: "+91XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/vaibhav-tyagi-analyst",
  },
};

// Helper to create element with classes and innerHTML/text
function createEl(tag, classes = [], html = "") {
  const el = document.createElement(tag);
  if (classes.length) el.className = classes.join(" ");
  if (html) el.innerHTML = html;
  return el;
}

// Populate Hero Section
function populateHero() {
  document.getElementById("hero-name").textContent = portfolioData.name;
  document.getElementById("hero-headline").textContent = portfolioData.headline;
  document.getElementById("hero-location").innerHTML = `<i class="fa fa-location-dot me-2"></i>${portfolioData.location}`;
  // Buttons
  const linkedinBtn = document.getElementById("linkedin-btn");
  linkedinBtn.href = portfolioData.contact.linkedin;
  const emailBtn = document.getElementById("email-btn");
  emailBtn.href = `mailto:${portfolioData.contact.email}`;
}

// Populate About Section
function populateAbout() {
  document.getElementById("about-summary").textContent = portfolioData.summary;
}

// Populate Skills
function populateSkills() {
  const coreContainer = document.getElementById("core-skills");
  const techContainer = document.getElementById("technical-skills");

  portfolioData.skills.forEach((skill) => {
    const badge = createEl("span", ["badge-skill"], skill);
    coreContainer.appendChild(badge);
  });

  portfolioData.technical.forEach((tech) => {
    const badge = createEl("span", ["badge-skill"], tech);
    techContainer.appendChild(badge);
  });
}

// Populate Projects & Modals
function populateProjects() {
  const projectsContainer = document.getElementById("projects-container");
  const modalsRoot = document.getElementById("modals-root");

  portfolioData.projects.forEach((project, idx) => {
    // Card column
    const col = createEl("div", ["col-12", "col-md-6"]);

    // Card element
    const card = createEl("div", ["card", "h-100", "shadow-sm", "project-card"]);
    const cardBody = createEl("div", ["card-body"]);
    const cardTitle = createEl("h5", ["card-title"], project.title);
    const cardText = createEl("p", ["card-text"], project.description.substring(0, 100) + (project.description.length > 100 ? "..." : ""));

    // Card button opens modal
    const btn = createEl(
      "button",
      ["btn", "btn-outline-primary"],
      `<i class="fa fa-arrow-up-right-from-square me-2"></i>Read More`
    );
    const modalId = `projectModal${idx}`;
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", `#${modalId}`);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    col.appendChild(card);
    projectsContainer.appendChild(col);

    // Create Modal
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = modalId;
    modal.tabIndex = -1;
    modal.setAttribute("aria-labelledby", `${modalId}Label`);
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${modalId}Label">${project.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${project.description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`;
    modalsRoot.appendChild(modal);
  });
}

// Populate Experience
function populateExperience() {
  const expContainer = document.getElementById("experience-container");

  portfolioData.experience.forEach((job) => {
    const item = createEl("div", ["timeline-item"]);

    const title = createEl(
      "h5",
      ["mb-1"],
      `${job.position} — <span class="text-primary">${job.company}</span>`
    );
    const period = createEl("small", ["text-muted", "d-block", "mb-2"], job.period);
    const details = createEl("p", ["mb-0"], job.details);

    item.appendChild(title);
    item.appendChild(period);
    item.appendChild(details);

    expContainer.appendChild(item);
  });
}

// Populate Contact
function populateContact() {
  const emailAnchor = document.getElementById("contact-email");
  emailAnchor.textContent = portfolioData.contact.email;
  emailAnchor.href = `mailto:${portfolioData.contact.email}`;

  const phoneSpan = document.getElementById("contact-phone");
  phoneSpan.textContent = portfolioData.contact.phone;

  const linkedinAnchor = document.getElementById("contact-linkedin");
  linkedinAnchor.href = portfolioData.contact.linkedin;
}

// Handle contact form submission
function handleContactForm() {
  const form = document.getElementById("contact-form");
  const formAlert = document.getElementById("form-alert");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    // Show success message
    if (formAlert) {
      formAlert.remove();
    }
    
    const successAlert = document.createElement("div");
    successAlert.id = "form-alert";
    successAlert.className = "alert alert-success alert-dismissible fade show mt-3";
    successAlert.innerHTML = `
      <strong>Thank you ${name}!</strong> Your message has been received. I'll get back to you soon.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    form.appendChild(successAlert);
    
    // Clear form
    form.reset();
    
    // Auto-hide alert after 5 seconds
    setTimeout(() => {
      if (successAlert) {
        successAlert.remove();
      }
    }, 5000);
  });
}

// Update year in footer
function updateYear() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}

// Collapse navbar after clicking link (mobile)
function enableAutoCollapseNavbar() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const isVisible = window.getComputedStyle(navbarToggler).display !== "none";
      if (isVisible && navbarToggler.getAttribute("aria-expanded") === "true") {
        navbarToggler.click();
      }
    });
  });
}

// Bootstrap ScrollSpy initialization
function initScrollSpy() {
  new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
    offset: 80,
  });
}

// Initialize all functions
window.addEventListener("DOMContentLoaded", () => {
  populateHero();
  populateAbout();
  populateSkills();
  populateProjects();
  populateExperience();
  populateContact();
  handleContactForm();
  updateYear();
  enableAutoCollapseNavbar();
  initScrollSpy();
});
