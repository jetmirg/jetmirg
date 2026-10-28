# Jetmir Grubi

Personal portfolio for Jetmir Grubi, senior software engineer. The site covers .NET full-stack work, payment and healthcare systems, experience, selected work, and contact.

Content lives in `src/react-app/data/portfolio.ts`. The contact form posts to FormSubmit and delivers the message to Jetmir. The first submission asks FormSubmit to send an activation email to `mirigrubi8@gmail.com`.

The portrait is `public/images/jetmir-portrait.jpg`. The downloadable resume is `public/resume/jetmir-grubi-resume.pdf`.

LinkedIn is the only public profile on the resume. Add other social URLs in `socialLinks` when they exist.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

Push the repository to GitHub, then enable Pages with **GitHub Actions** as the source. `.github/workflows/pages.yml` builds the static site and deploys it.

- A user site named `username.github.io` is published at the domain root.
- A project site is published under `/repository-name/`. The workflow sets that base path automatically.

Local preview uses `/`. To check a project-site path:

```bash
$env:VITE_BASE="/jetmirgrubi/"; npm run build; npm run preview
```
