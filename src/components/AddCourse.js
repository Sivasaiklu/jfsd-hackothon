import React, { useState } from "react";

const AddCourse = () => {
  // State variables for storing form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Image URL instead of file

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    const formData = {
      title,
      description,
      image: imageUrl, // Use the URL provided by the user
    };

    // Log the form data or send it to the server (for now, logging)
    console.log("Course Added:", formData);
    
    // Reset form fields
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Course</h1>
      <p>Use this page to add a new course to the system.</p>
      
      <form onSubmit={handleSubmit}>
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
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              minHeight: "100px",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="imageUrl">Course Image URL:</label>
          <input
            type="text"
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
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
