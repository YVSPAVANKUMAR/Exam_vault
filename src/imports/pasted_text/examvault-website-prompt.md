# EXAMVAULT — COMPLETE WEBSITE DEVELOPMENT PROMPT

## 1. PROJECT OBJECTIVE

Build a professional, responsive, static educational resource website called **ExamVault** for competitive-exam aspirants.

The website will provide organized access to:

* YouTube video lectures
* Google Drive PDF notes
* Study materials
* Subject-wise resources
* Exam-wise resources
* Important preparation materials

The website is **frontend-only**.

There must be **NO backend, NO database, NO authentication, and NO admin panel**.

I will maintain all YouTube and Google Drive links manually in my local project files, commit the changes to GitHub, and deploy the website using Render.

The website must work perfectly after deployment on Render.

---

# 2. TECHNOLOGY STACK

Use:

* HTML5
* CSS3
* Vanilla JavaScript
* Bootstrap 5
* Bootstrap Icons
* Google Fonts
* Local JavaScript data files

Do NOT use:

* React
* Node.js
* Express
* Flask
* Django
* PHP
* MySQL
* MongoDB
* Firebase
* Any backend
* Any database

The final project must be a completely static website.

---

# 3. PROJECT NAME

Website name:

**ExamVault**

Suggested tagline:

**Your Complete Competitive Exam Resource Hub**

Short description:

> One place for organized YouTube lectures, PDF notes, study materials, and preparation resources for SSC, RRB and other competitive examinations.

---

# 4. TARGET EXAMS

Initially support:

### SSC

* SSC CGL
* SSC CHSL
* SSC MTS
* SSC GD
* SSC CPO
* SSC Selection Post

### RRB

* RRB NTPC
* RRB Group D
* RRB ALP
* RRB Technician
* RRB JE

The architecture must allow me to add more exams later without changing the main application logic.

---

# 5. SUBJECTS

Create support for:

* Mathematics
* Reasoning
* General Awareness
* General Science
* Physics
* Chemistry
* Biology
* History
* Geography
* Indian Polity
* Economics
* Current Affairs
* English
* Computer Awareness

The system must allow new subjects to be added easily.

---

# 6. WEBSITE STRUCTURE

Create the following pages:

```text
/
├── index.html
├── exams.html
├── subjects.html
├── resources.html
├── about.html
├── 404.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── resources.js
│   │   └── config.js
│   │
│   └── images/
│       └── logo.png
│
└── README.md
```

Keep the project simple and deployment-friendly.

---

# 7. IMPORTANT RESOURCE MANAGEMENT SYSTEM

The most important requirement is that resources must be managed from:

```text
assets/js/resources.js
```

I should NOT have to edit HTML whenever I add or remove a YouTube video or PDF.

For example:

```javascript
const resources = [
    {
        id: 1,
        title: "Indian Polity Complete Lecture",
        exam: "SSC CGL",
        subject: "Polity",
        type: "youtube",
        description: "Complete Indian Polity lecture for SSC aspirants.",
        url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        thumbnail: "",
        tags: ["polity", "ssc", "cgl"],
        featured: true
    },

    {
        id: 2,
        title: "Indian Polity Notes PDF",
        exam: "SSC CGL",
        subject: "Polity",
        type: "pdf",
        description: "Complete Indian Polity notes.",
        url: "https://drive.google.com/file/d/XXXXXXXX/view",
        thumbnail: "",
        tags: ["polity", "notes"],
        featured: false
    }
];
```

The application must automatically read this data and generate resource cards.

---

# 8. RESOURCE TYPES

Support at least these resource types:

```text
youtube
pdf
link
```

The UI should display different icons and badges.

YouTube:

```text
▶ YouTube
```

PDF:

```text
📄 PDF
```

External link:

```text
🔗 Resource
```

---

# 9. GOOGLE DRIVE LINKS

Google Drive links must open correctly.

Support common formats:

```text
https://drive.google.com/file/d/FILE_ID/view
```

and:

```text
https://drive.google.com/open?id=FILE_ID
```

Do NOT assume every Google Drive link is a direct PDF URL.

The website should simply open the provided Drive link in a new tab.

Use:

```html
target="_blank"
rel="noopener noreferrer"
```

for external resources.

---

# 10. YOUTUBE LINKS

Support:

```text
https://www.youtube.com/watch?v=VIDEO_ID
```

and:

```text
https://youtu.be/VIDEO_ID
```

The website should correctly generate a thumbnail when possible.

YouTube thumbnail format:

```text
https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
```

If no thumbnail is available, display a professional default resource image.

---

# 11. HOME PAGE

Create a premium landing page.

Sections:

### Header

Logo:

**ExamVault**

Navigation:

* Home
* Exams
* Subjects
* Resources
* About

Right side:

**Explore Resources**

button.

Header should be sticky.

---

# 12. HERO SECTION

Hero heading:

**Prepare Smarter. Study Better. Crack Your Exam.**

Subheading:

> Organized YouTube lectures, PDF notes and preparation resources for SSC, RRB and other competitive examinations.

Buttons:

```text
Explore Resources
Browse Exams
```

Add a modern educational illustration/abstract background.

Do not make the page visually overloaded.

---

# 13. STATISTICS SECTION

Display dynamic statistics based on resources.js:

```text
100+
Study Resources

10+
Competitive Exams

15+
Subjects

24/7
Free Access
```

The first three values should be calculated dynamically from the resource data where possible.

---

# 14. EXAM SECTION

Create cards for:

* SSC CGL
* SSC CHSL
* SSC MTS
* SSC GD
* RRB NTPC
* RRB Group D
* RRB ALP
* RRB JE

Each card should contain:

* Exam name
* Short description
* Resource count
* Explore button

Resource count must be calculated dynamically.

---

# 15. SUBJECT SECTION

Display subject cards.

Example:

```text
Mathematics
Reasoning
General Awareness
General Science
History
Geography
Polity
Economics
English
Current Affairs
```

Each card should show:

* Icon
* Subject name
* Number of resources
* View Resources button

---

# 16. RESOURCE PAGE

Create a professional resource browser.

At the top:

```text
Search resources...
```

Filters:

```text
Exam
Subject
Resource Type
```

Sort options:

```text
Newest
Oldest
A-Z
Featured
```

Cards should update dynamically using JavaScript.

---

# 17. SEARCH FUNCTION

Implement client-side search.

Search through:

* title
* description
* exam
* subject
* tags

Example:

If user searches:

```text
polity
```

show all resources containing polity.

Search must be instant without page reload.

---

# 18. FILTER SYSTEM

Implement:

### Exam filter

```text
All Exams
SSC CGL
SSC CHSL
SSC MTS
RRB NTPC
RRB Group D
...
```

### Subject filter

```text
All Subjects
Mathematics
Reasoning
History
Geography
Polity
...
```

### Type filter

```text
All Types
YouTube
PDF
Resource
```

Filters must work together.

Example:

```text
SSC CGL + Polity + PDF
```

should show only matching resources.

---

# 19. RESOURCE CARD DESIGN

Each resource card should contain:

* Thumbnail/icon
* Resource type badge
* Title
* Exam badge
* Subject badge
* Description
* Tags
* Open Resource button
* Optional Featured badge

Example:

```text
┌──────────────────────────────┐
│                              │
│        THUMBNAIL             │
│                              │
├──────────────────────────────┤
│ ▶ YouTube                    │
│                              │
│ Indian Polity Complete       │
│ Lecture                      │
│                              │
│ SSC CGL • Polity             │
│                              │
│ Complete lecture covering    │
│ important polity concepts.   │
│                              │
│ [Open Resource ↗]            │
└──────────────────────────────┘
```

---

# 20. FAVORITES

Implement favorites using browser localStorage.

Users should be able to click:

```text
♡
```

to save a resource.

Saved resources should remain available after page refresh.

Create a:

```text
Favorites
```

filter/view.

No backend is required.

---

# 21. RECENTLY VIEWED

Use localStorage to maintain recently opened resources.

Store:

* resource ID
* timestamp

Display the latest few resources in:

```text
Recently Viewed
```

Do not store sensitive information.

---

# 22. DARK MODE

Implement:

```text
Light Mode
Dark Mode
```

Use localStorage to remember the user's preference.

Add a theme toggle in the navigation bar.

The design must look professional in both modes.

---

# 23. RESPONSIVE DESIGN

The website must work perfectly on:

### Mobile

320px+

### Tablet

768px+

### Desktop

1200px+

### Large desktop

1440px+

Use Bootstrap responsive classes and CSS media queries.

No horizontal scrolling.

Cards must automatically adjust.

Navigation must collapse into a mobile menu.

---

# 24. DESIGN STYLE

Use a modern:

**Premium + Minimal + Futuristic + Educational**

design.

Use:

* Glassmorphism cards where appropriate
* Soft shadows
* Rounded corners
* Subtle gradients
* Smooth hover effects
* Clean typography
* Plenty of whitespace
* Professional icons
* Small animations

Avoid:

* Excessive animations
* Huge gradients everywhere
* Too many colors
* Cluttered layouts
* Flashy effects

---

# 25. COLOR SYSTEM

Use a professional color system.

Primary:

```text
#2563EB
```

Secondary:

```text
#7C3AED
```

Success:

```text
#16A34A
```

Background:

```text
#F8FAFC
```

Dark background:

```text
#0F172A
```

Text:

```text
#0F172A
```

Muted:

```text
#64748B
```

Keep colors centralized using CSS variables.

---

# 26. ANIMATIONS

Add subtle animations:

* Fade-in
* Slide-up
* Card hover
* Button hover
* Navbar transition
* Modal animation
* Filter transition

Use CSS animations where possible.

Do not use heavy animation libraries.

---

# 27. LOADING STATE

When resources are being rendered, display a lightweight loading animation.

If resources are empty, display:

```text
No resources found.

Try changing your search or filters.
```

---

# 28. ERROR HANDLING

If a resource URL is empty or invalid:

Do not crash the website.

Display a safe error state.

JavaScript must validate:

```javascript
resource.url
```

before creating the resource button.

---

# 29. RESOURCE COUNT

Calculate dynamically:

```text
Total Resources
YouTube Resources
PDF Resources
Exam Count
Subject Count
```

Never hard-code these values.

---

# 30. PAGINATION

If there are more than 12 resources, implement pagination or "Load More".

Default:

```text
12 resources per page
```

Add:

```text
Load More
```

button.

---

# 31. ABOUT PAGE

Create an About page explaining:

**What is ExamVault?**

> ExamVault is a centralized study-resource platform created to help competitive-exam aspirants discover organized lectures, notes and preparation materials without wasting time searching across multiple platforms.

Sections:

* Our Purpose
* What You Can Find
* Supported Exams
* How Resources Are Organized
* Disclaimer

---

# 32. DISCLAIMER

Clearly state:

> ExamVault does not host or own third-party YouTube videos or Google Drive files. Resources are linked from external platforms. Copyright belongs to the respective content creators and owners.

Add:

> If you are the owner of any linked content and believe it has been shared improperly, please contact the website administrator for review.

Do not claim ownership of third-party materials.

---

# 33. 404 PAGE

Create a professional 404 page.

Display:

```text
404

Page Not Found

The resource you're looking for doesn't exist or may have been moved.

[Back to Home]
```

---

# 34. FOOTER

Footer should contain:

```text
ExamVault

Prepare Smarter. Study Better.

Quick Links
Home
Exams
Subjects
Resources
About

Supported Exams
SSC
RRB

© 2026 ExamVault. All rights reserved.
```

Also include:

```text
External resources belong to their respective owners.
```

---

# 35. JAVASCRIPT ARCHITECTURE

Keep JavaScript modular.

### resources.js

Only resource data.

### config.js

Website configuration.

Example:

```javascript
const SITE_CONFIG = {
    name: "ExamVault",
    tagline: "Your Complete Competitive Exam Resource Hub",
    resourcesPerPage: 12
};
```

### app.js

Application logic:

* render resources
* search
* filters
* sorting
* favorites
* recently viewed
* theme
* statistics
* navigation
* pagination
* URL handling

Do not put resource data inside app.js.

---

# 36. RESOURCES.JS FORMAT

Use this exact structure:

```javascript
const resources = [
    {
        id: 1,
        title: "Indian Polity Complete Lecture",
        exam: "SSC CGL",
        subject: "Polity",
        type: "youtube",
        description: "Complete Indian Polity lecture for SSC CGL preparation.",
        url: "https://www.youtube.com/watch?v=VIDEO_ID",
        thumbnail: "",
        tags: ["polity", "ssc", "cgl"],
        featured: true,
        addedAt: "2026-08-19"
    },

    {
        id: 2,
        title: "Indian Polity Complete Notes",
        exam: "SSC CGL",
        subject: "Polity",
        type: "pdf",
        description: "Important Indian Polity notes for competitive examinations.",
        url: "https://drive.google.com/file/d/FILE_ID/view",
        thumbnail: "",
        tags: ["polity", "notes", "pdf"],
        featured: false,
        addedAt: "2026-08-19"
    }
];
```

When I want to add a resource, I should only add another object.

---

# 37. IMPORTANT: DO NOT BREAK WHEN EDITING LINKS

The main reason for this website architecture is easy resource management.

If I change:

```javascript
url: "OLD_URL"
```

to:

```javascript
url: "NEW_URL"
```

the website must automatically use the new URL.

I should NOT need to modify:

* HTML
* CSS
* app.js
* any other file

for a normal resource-link update.

---

# 38. LOCAL DEVELOPMENT

The website must work using a simple local HTTP server.

Do NOT require:

```text
npm install
```

Do NOT require:

```text
npm start
```

Provide two options.

### Option 1 — VS Code Live Server

Open:

```text
index.html
```

using Live Server.

### Option 2 — Python

From the project folder:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Do not use:

```powershell
cd path\to\examvault
```

because that is only a placeholder.

The actual command must use the user's real project folder.

Example:

```powershell
cd "C:\Users\yvspa\OneDrive\Desktop\examvault-complete\examvault"
```

---

# 39. GITHUB DEPLOYMENT

Create a professional README explaining:

```text
1. Open project folder
2. Edit resources.js
3. Test locally
4. Commit changes
5. Push to GitHub
6. Render automatically deploys the latest version
```

Git commands:

```powershell
git status
git add .
git commit -m "Update study resources"
git push origin main
```

Do not expose secrets because this is a static website.

---

# 40. RENDER DEPLOYMENT

The project must be deployable as a static site.

Render configuration:

```text
Service Type:
Static Site
```

Build Command:

```text
None
```

Publish Directory:

```text
.
```

If Render requires a publish directory, use:

```text
.
```

The website must load:

```text
index.html
```

as the homepage.

---

# 41. GITHUB → RENDER WORKFLOW

Expected workflow:

```text
Local Computer
      ↓
Edit resources.js
      ↓
Test locally
      ↓
git add .
      ↓
git commit
      ↓
git push
      ↓
GitHub
      ↓
Render automatic deployment
      ↓
Live ExamVault website
```

---

# 42. SEO

Add:

```html
<title>ExamVault | SSC & RRB Study Resources</title>

<meta
    name="description"
    content="ExamVault provides organized YouTube lectures, PDF notes and study resources for SSC, RRB and competitive exam preparation."
>

<meta
    name="keywords"
    content="SSC preparation, RRB preparation, SSC CGL, RRB NTPC, study materials, PDF notes, competitive exams"
>
```

Add Open Graph metadata.

Use semantic HTML.

Add proper:

```text
h1
h2
h3
```

hierarchy.

---

# 43. ACCESSIBILITY

Implement:

* keyboard navigation
* visible focus states
* alt text
* ARIA labels where necessary
* sufficient contrast
* accessible buttons
* accessible mobile navigation

Do not rely only on icons.

---

# 44. PERFORMANCE

Optimize for:

* fast loading
* minimal JavaScript
* no unnecessary libraries
* lazy-loaded images
* efficient DOM rendering
* no memory leaks
* no unnecessary API calls

Because this is a static website, it should load very quickly.

---

# 45. SECURITY

External links must use:

```html
target="_blank"
rel="noopener noreferrer"
```

Do not use:

```javascript
eval()
```

Do not inject unsanitized HTML.

Use safe DOM APIs wherever possible.

---

# 46. IMPORTANT BUG PREVENTION

Before completing the project, verify:

### Navigation

* Home works
* Exams works
* Subjects works
* Resources works
* About works

### Resources

* YouTube links open
* Google Drive links open
* External links open
* Invalid links don't crash the site

### Search

* Search works
* Case-insensitive search works
* Empty search resets results

### Filters

* Exam filter works
* Subject filter works
* Type filter works
* Combined filters work

### Favorites

* Add favorite works
* Remove favorite works
* Refresh preserves favorite

### Theme

* Dark mode works
* Light mode works
* Refresh preserves theme

### Mobile

* Navbar works
* Cards are responsive
* Buttons remain accessible
* No horizontal overflow

---

# 47. CONSOLE ERROR REQUIREMENT

The final website must have:

```text
0 JavaScript errors
0 broken imports
0 missing files
0 broken internal navigation links
```

Test the browser console before declaring the project complete.

---

# 48. IMPORTANT FILE PATH RULE

Never use placeholder commands such as:

```powershell
cd path\to\examvault
```

Instead, explain that this must be replaced with the actual project path.

For this project, if the folder is:

```text
C:\Users\yvspa\OneDrive\Desktop\examvault-complete\examvault
```

the correct command is:

```powershell
cd "C:\Users\yvspa\OneDrive\Desktop\examvault-complete\examvault"
```

Always use Windows-compatible PowerShell commands.

---

# 49. FINAL DELIVERABLE

Generate the complete working project with:

```text
examvault/
│
├── index.html
├── exams.html
├── subjects.html
├── resources.html
├── about.html
├── 404.html
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   ├── app.js
    │   ├── resources.js
    │   └── config.js
    │
    └── images/
        └── logo.png
```

Provide the COMPLETE contents of every file.

Do not provide incomplete snippets.

Do not use placeholders for application logic.

Use sample resource entries so I can immediately test the website.

---

# 50. FINAL INSTRUCTION TO THE AI

Act as a senior frontend engineer and UI/UX designer.

Build ExamVault as a production-quality static educational resource platform.

Prioritize:

1. Clean architecture
2. Easy resource management
3. Professional UI
4. Responsive design
5. Fast performance
6. Accessibility
7. Maintainability
8. GitHub compatibility
9. Render compatibility
10. Zero JavaScript console errors

Most importantly:

**I should be able to update YouTube and Google Drive URLs by editing only `assets/js/resources.js`, then run:**

```powershell
git add .
git commit -m "Update study resources"
git push origin main
```

and Render should automatically deploy the updated website.

Do not introduce a backend or database.

After generating the project, provide:

1. Complete folder structure
2. Complete code for every file
3. Windows PowerShell setup commands
4. Local testing instructions
5. GitHub setup
6. Render deployment setup
7. Instructions for adding YouTube links
8. Instructions for adding Google Drive PDF links
9. Troubleshooting for common `cd`, path, JavaScript, and link errors
10. Final production checklist
