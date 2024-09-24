### **CONTRIBUTING.md**

---

# Contributing to Civic Engagement and Governance Platform

We are excited that you are interested in contributing to this project! Whether you're fixing a bug, adding a new feature, or enhancing documentation, your contributions are highly valued. Below is a guide to help you get started and outline the best practices for contributing to this project.

## **Table of Contents**

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [License](#license)

---

## **Code of Conduct**

This project adheres to a **Code of Conduct**. By participating, you are expected to uphold this code. Please report any unacceptable behavior to the maintainers of the project.

---

## **Getting Started**

### **Fork the Repository**

1. Fork the repository by clicking on the "Fork" button on the top right of this page.
2. Clone the forked repository to your machine:

```bash
git clone https://github.com/Barazer-Improving-Citizen-Engagement/Bar0.0.0v.git
cd Bar0.0.0v
```

3. Set up the project locally (refer to the instructions in `README.md` for setup and installation).

---

## **How to Contribute**

There are several ways to contribute to this project:

- **Bug Reports**: If you find a bug, submit an issue and include steps to reproduce it.
- **Feature Requests**: If you have an idea for a feature, submit an issue explaining the use case.
- **Code Contributions**: You can contribute by fixing bugs, adding features, improving tests, or enhancing documentation.
- **Documentation**: Help improve the project documentation in `README.md`, `CONTRIBUTING.md`, and code comments.

---

## **Development Guidelines**

### **Branches**

- **`main` branch**: This is the production-ready code. All new features and bug fixes must be added to a feature branch, tested, and then merged into `main` via a pull request.
- **Feature Branches**: For each new feature or bug fix, create a new branch with a descriptive name:

```bash
git checkout -b feature/your-feature-name
```

### **Dependencies**

- Make sure to run `npm install` or `yarn install` after cloning the repo to get all required dependencies.
- If you add any new dependencies, update the `package.json` and lock files accordingly.

### **Testing**

- Ensure that you test any new functionality.
- Write unit tests for new components or functions and update existing tests if changes are made.
- Use the following command to run tests:

```bash
# For Expo (Mobile)
expo test

# For Next.js (Web)
npm run test
```

---

## **Pull Request Process**

1. **Create a Pull Request**: Once your work is ready, submit a pull request to the `main` branch.
   - Ensure that your pull request clearly describes the problem and solution.
   - Reference any relevant issues in your PR description.
   - If the changes affect UI, include before/after screenshots.
   
2. **Tests**: Ensure all existing tests pass, and write tests for your new feature.
   
3. **Code Review**: A project maintainer will review your pull request. You may be asked to make some changes based on feedback.
   
4. **Merge**: Once approved, your pull request will be merged. Ensure that your branch is up to date with `main` before merging.

---

## **Reporting Issues**

If you find a bug or have a feature request, please [open an issue](https://github.com/Barazer-Improving-Citizen-Engagement/Bar0.0.0v/issues).

**When creating an issue:**
- Provide clear steps to reproduce the bug or describe the problem.
- Include relevant screenshots, code snippets, or error logs.
- If it’s a feature request, explain the problem it solves and how it can benefit the project.

---

## **Style Guidelines**

### **Code Style**

- **JavaScript/TypeScript**: Follow the ES6+ standards for JavaScript and TypeScript.
- **React Components**: Use function components over class components.
- **Formatting**: Use [Prettier](https://prettier.io/) to format your code. The repository has a `.prettierrc` file with the preferred configurations.

### **File and Folder Structure**

- Use PascalCase for component files and camelCase for function/variable names.
- Organize components in the `components/` directory and page-specific logic in `pages/`.
  
### **CSS/Styling**

- Use **Tailwind CSS** for styling in the Next.js web app.
- Follow the existing style and utility classes to maintain consistency.
  
---

## **Commit Message Guidelines**

- **Format**: Use conventional commit messages to help in project management and changelog generation.
  
**Examples:**
- `feat: add user voting functionality to the platform`
- `fix: resolve crash on login screen`
- `docs: update contributing guidelines`

### **Commit Types:**
- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation updates.
- **style**: Code style updates (formatting, etc.).
- **refactor**: Code changes that neither fix a bug nor add a feature.
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks like updating dependencies.

---

## **License**

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Thank you for contributing to this project!