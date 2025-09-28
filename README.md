# React Formik Learning Project

This is a small web application built to learn, practice, and demonstrate key concepts of the powerful `Formik` library for form management in React. The main goal is to implement forms in a clean, maintainable, and efficient way.

This project was developed as part of my personal learning path to master modern tools within the React ecosystem.

---

## 🖼️ Project Preview

Here is a screenshot of the form implemented in this application:

<img alt="App Screenshot" height="500" src="E:\Projects\React\formik-learn\src\assets\img.png" title="screenshot of form" width="500"/>

*(Note: To add a real image, take a screenshot of your running application, add it to your project repository, and replace the placeholder link above with the path to your image.)*

---

## ✨ Key Features & Concepts Implemented

This project explores and utilizes the following `Formik` concepts:

-   **Basic Form Structure:** Using the core components: `<Formik>`, `<Form>`, `<Field>`, and `<ErrorMessage>`.
-   **Form State Management:** Handling `initialValues` and user input.
-   **Validation:**
    -   Implementing manual validation using the `validate` function.
    -   **(In Progress):** Refactoring to schema-based validation with the **Yup** library.
-   **Submission Handling:** Managing the `onSubmit` event to access final form data.
-   **User Feedback:** Dynamically displaying validation error messages for each field.
-   **Submission State:** Using the `isSubmitting` prop to provide visual feedback to the user during form submission (e.g., disabling the submit button).

---

## 🛠️ Tech Stack

-   [**React**](https://reactjs.org/)
-   [**Formik**](https://formik.org/)
-   [**Yup**](https://github.com/jquense/yup) (for validation)
-   **CSS** (for styling)

---

## 🚀 Getting Started

To run this project locally, follow the steps below.

**Prerequisites:**
-   [Node.js](https://nodejs.org/) installed (v16 or higher is recommended)
-   `npm` or `yarn` package manager

**Installation and Setup:**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/amirazadehranjbar/formik-learn.git](https://github.com/amirazadehranjbar/formik-learn.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd formik-learn
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # Or if you use yarn:
    # yarn install
    ```

4.  **Run the project:**
    ```bash
    npm start
    # Or:
    # yarn start
    ```

The application will open automatically in your browser at `http://localhost:3000`.

---

## 🎯 Learning Goals & Future Improvements

This project is a living document and will be continuously updated to incorporate new concepts. The roadmap for future improvements includes:

-   [ ] **Complete Yup Integration:** Fully refactor the validation logic using `Yup` for better readability and maintainability.
-   [ ] **Create Reusable Input Components:** Build custom, reusable components (e.g., `MyTextInput`) with the `useField` hook to reduce code duplication (DRY principle).
-   [ ] **Implement `<FieldArray>`:** Add a dynamic form where users can add or remove fields (e.g., a list of skills or friends).
-   [ ] **Explore the `useFormik` Hook:** Refactor a form using the `useFormik` hook to understand its use cases and benefits.
-   [ ] **Enhance UI/UX:** Improve the overall styling and user experience of the application.