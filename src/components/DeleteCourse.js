import React, { useState } from "react";

const DeleteCourse = () => {
  // State variable for storing the course ID
  const [courseId, setCourseId] = useState("");

  // Handle form submission for deleting the course
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate deletion action
    if (courseId) {
      // Log or call an API to delete the course by ID
      console.log("Course Deleted:", courseId);
      
      // Reset course ID field after deletion
      setCourseId("");
    } else {
      alert("Please enter a valid course ID.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delete Course</h1>
      <p>Use this page to delete an existing course from the system by entering the course ID.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
            placeholder="Enter course ID"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer" }}>
            Delete Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCourse;
