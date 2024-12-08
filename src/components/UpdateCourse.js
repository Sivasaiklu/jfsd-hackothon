import React, { useState } from "react";

const UpdateCourse = () => {
  // State variables for course details
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Handle form submission for updating the course
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate updating the course with the provided details
    if (courseId && title && description && imageUrl) {
      // Log or call an API to update the course
      console.log("Updated Course:", { courseId, title, description, imageUrl });
      
      // Reset form after submission
      setCourseId("");
      setTitle("");
      setDescription("");
      setImageUrl("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Update Course</h1>
      <p>Use this page to update an existing course's details.</p>

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

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Course Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter course title"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Course Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter course description"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            rows="4"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="imageUrl">Course Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            placeholder="Enter image URL"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
