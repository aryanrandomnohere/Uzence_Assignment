# React Component Development Assignment

This project demonstrates the development of two React components: `InputField` and `DataTable`, built with TypeScript, styled using TailwindCSS, and documented with Storybook.

## Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **TailwindCSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Storybook:** A tool for developing UI components in isolation.

## Folder Structure

The project follows a standard React application structure:

```
component/
├───.storybook/             # Storybook configuration
├───node_modules/           # Project dependencies
├───public/                 # Static assets
├───src/
│   ├───assets/             # Static assets for components
│   ├───components/         # Reusable UI components (InputField, DataTable)
│   ├───stories/            # Storybook stories for components
│   ├───App.css
│   ├───App.jsx
│   ├───index.css
│   └───main.jsx
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.js
└───vite.config.js
```

## Setup Instructions

### Prerequisites

*   Node.js (v18 or higher)
*   npm (v8 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd component
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the React application in development mode:

```bash
npm run dev
```

This will start the Vite development server, usually at `http://localhost:5173`.

### Running Storybook

To view and interact with the components in Storybook:

```bash
npm run storybook
```

This will open Storybook in your browser, usually at `http://localhost:6006`.

### Building the Project

To build the project for production:

```bash
npm run build
```

This will create a `dist` directory with the production-ready build.

## Component Descriptions

### `InputField`

A flexible text input component with various states and variants.

**Features:**
*   Label, placeholder, helper text, error message support
*   States: `disabled`, `invalid`, `loading`
*   Variants: `filled`, `outlined`, `ghost`
*   Sizes: `small`, `medium`, `large`

### `DataTable`

A data table component with basic functionality for displaying tabular data.

**Features:**
*   Display tabular data
*   Column sorting
*   Row selection (single/multiple)
*   Loading state
*   Empty state

## Approach

My approach to developing these components focused on:

1.  **Modularity and Reusability:** Designing components to be self-contained and easily reusable across different parts of an application.
2.  **TypeScript for Type Safety:** Utilizing TypeScript to ensure strong typing, which helps in catching errors early and improving code maintainability.
3.  **TailwindCSS for Styling:** Employing TailwindCSS for a utility-first approach to styling, allowing for rapid UI development and consistent design.
4.  **Storybook for Documentation and Development:** Using Storybook to develop components in isolation, document their various states, and provide an interactive playground for testing and demonstration.
5.  **Accessibility (A11y):** Incorporating basic accessibility attributes (e.g., `aria-label`, `aria-sort`) to ensure the components are usable by a wider audience.
6.  **State Management:** Implementing local state management within components for features like sorting and row selection.
7.  **Clear Props Definition:** Defining clear and intuitive props interfaces for each component to ensure ease of use and understanding.

During the development process, I iteratively built the components, adding features step-by-step and verifying their functionality through Storybook. I also paid attention to responsive design principles to ensure the components adapt well to different screen sizes.