# 📝 React Notes Management App

A clean, component-based React application for managing personal notes. This project demonstrates modern React fundamentals, including "lifting state up," controlled components, and thoughtful user experience handling without external state libraries.

## 🚀 How to Run the Project

1.  **Prerequisites**: Ensure you have Node.js installed (v14 or higher recommended).
2.  **Clone/Download**: Download this repository to your local machine.
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Start the Server**:
    ```bash
    npm run dev
    ```
5.  **View**: Open the link provided in the terminal (usually `http://localhost:5173`) in your browser.

---

## 🏗️ Architecture & Component Breakdown

The application follows a **clean architecture** where `App.jsx` serves as the single source of truth, and child components are purely presentational or interactive delegates.

| Component | Role |
| :--- | :--- |
| **`<App />`** | The "Brain." Manages the global `notes` state and `isLoading` status. Contains the logic for adding and deleting notes. |
| **`<Container />`** | (Visual) Handles the centralized layout and responsive styling. |
| **`<NoteForm />`** | A **controlled component** that handles user input. Includes local validation state to prevent empty submissions. |
| **`<NoteList />`** | Renders the list of notes. Features a scrollable area to handle large lists gracefully. |
| **`<NoteItem />`** | Displays individual note data. Uses a unique key for efficient re-rendering. |
| **`<Loader />`** | Visual feedback shown during the initial data fetch simulation. |
| **`<EmptyState />`** | Friendly UI shown when the note list is empty. |

---

## 🧠 State Management Strategy

Per the assessment requirements, no external libraries (Redux, Context API) were used.

1.  **Lifting State Up**: The `notes` array lives in `<App />`. Child components like `<NoteForm />` receive function props (`onAddNote`) to communicate changes back up to the parent.
2.  **Unidirectional Data Flow**: Data flows strictly **down** (Parent → Child), and events flow **up**.
3.  **Simulated API**: `useEffect` is used to simulate a 2-second network delay on initial load, toggling the `isLoading` state.

---

## 🛡️ Assumptions & Limitations

* **Data Persistence**: As no backend was required, data is stored in local React state. **Refreshing the page will reset the notes.**
* **IDs**: Simple `Date.now()` timestamps are used for unique IDs. In a production app with a backend, we would use database-generated UUIDs.
* **Validation**: Validation is currently client-side only, focusing on the "Title" field as a required input.

---

## 🎥 Demo Video

[Insert your Google Drive Link Here]
## React Compiler

