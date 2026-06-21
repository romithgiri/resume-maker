# ResumeBuilder Pro 📄✨

ResumeBuilder Pro is a modern, responsive, and dynamic web application built using **React** and **Vite**. It empowers users to create, customize, and preview professional resumes in real-time, and export them directly to print-ready PDF formats.

---

## 🌟 Key Features

*   **Real-time Live Preview:** See resume layout and content update dynamically as you type.
*   **Multiple Templates:** Switch between six professionally crafted layouts instantly:
    *   *Default*: Balanced, classic design for all industries.
    *   *Modern*: Stylish layout with sidebars and color accents.
    *   *Executive*: Tailored for leadership and high-experience profiles.
    *   *Minimal*: Clean, spacious typography-focused look.
    *   *Compact*: Optimized to fit maximum content on a single page.
    *   *Academic*: Structured for detailed educational, research, and publications history.
*   **Print & PDF Export:** Integrated style sheets optimized for printing to export high-fidelity, pixel-perfect PDFs.
*   **Pre-filled Sample Profiles:** Complete with industry-standard resume data to let users see templates in action immediately.
*   **Responsive UI:** Seamless experience on mobile, tablet, and desktop environments.

---

## 🚀 Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Build System:** [Vite](https://vitejs.dev/)
*   **Styling:** Modern Vanilla CSS (fully custom, print-optimized media queries, CSS variables for theme and layout control)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🛠️ Local Development

Follow these steps to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
*   npm (pre-packaged with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/romithgiri/resume-maker.git
    cd resume-maker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:5173/` in your browser.

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with hot-reloading at `http://localhost:5173/`. |
| `npm run build` | Builds the production-ready bundle into the `dist/` folder. |
| `npm run lint` | Runs ESLint to check code quality and syntax standards. |
| `npm run preview` | Previews the locally built production bundle using Vite's server. |

---

## 🔒 Security & Best Practices

Security and stability are prioritized throughout this project's configuration:

*   **Credential Protection:** Environment variables and local configuration secrets are strictly ignored from source control via `.gitignore`.
*   **Dependency Management:** Regularly audited using `npm audit` to identify and patch security vulnerabilities in dependencies.
*   **Linter Compliance:** Static code analysis configured via ESLint to prevent bugs and enforce code standards.
*   **No Runtime Secrets:** All dynamic properties are passed via secure environment bindings or client configurations.

---

## 🌐 Deployment to GitHub Pages

To host this project on GitHub Pages:

### Step 1: Configure `vite.config.js`
Make sure you specify the `base` path corresponding to your GitHub repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/resume-maker/',
})
```

### Step 2: Build & Publish
You can use the `gh-pages` utility or build the static assets and deploy them directly:
1. Build the production assets:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` directory to your hosting provider or the designated `gh-pages` branch.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
