import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const courses = [
  { id: 1, name: 'Operating Systems', description: 'Software managing computer hardware, resources, and providing services for applications and user interaction.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtIXYkNI5Kms_z0Po7E4FUXyWZQSzlZiijg&s' },
  { id: 2, name: 'DBMS', description: 'Software for creating, managing, and manipulating databases, ensuring efficient data storage and retrieval.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtVT5JBtyqCpePadztNLv7bbBaFbIvevTEw&s' },
  { id: 3, name: 'Computer Networks', description: 'Systems connecting multiple devices for data exchange, enabling communication, and resource sharing across locations.', image: 'https://miro.medium.com/v2/resize:fit:1024/0*yDZ4O2EsLoVJSdDC.jpeg' },
  { id: 4, name: 'JFSD', description: 'End-to-end Java development framework combining frontend, backend, database, and deployment for dynamic web applications.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzv9t7-h-kRfFGO61f46MPk0HqYcH_1yPMg&s' },
  { id: 5, name: 'Data Structures', description: 'Organizing and storing data for efficient access and modification using various structures like arrays, lists.', image: 'https://files.realpython.com/media/How-to-Use-Stacks-in-Python_Watermarked.d22262707558.jpg' },
  { id: 6, name: 'Algorithms', description: 'Step-by-step procedure for solving problems, including sorting, searching, and optimization techniques.', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190529171221/Learning-Data-Structures-and-Algorithms-is-Important1.png' },
  { id: 7, name: 'Artificial Intelligence', description: 'Development of machines capable of performing tasks that require human intelligence, such as learning and reasoning.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdD8rOpGiaVeP02GQl6RNtsftR9hcAEUqGRcxlJPNst-kajTOm9hU95BGAHDS2wk2Qy9o&usqp=CAU' },
  { id: 8, name: 'Machine Learning', description: 'A subset of AI focused on developing algorithms that allow computers to learn from and make predictions on data.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrV5bjNnKJf3rK81Iw8WEXlHnkMUCPu_cEg&s' },
  { id: 9, name: 'Cloud Computing', description: 'Delivery of computing services like servers, storage, and databases over the internet for flexible resources.', image: 'https://blp.ieee.org/wp-content/uploads/2023/12/Best-Way-To-Learn-Cloud-Computing-5-6.jpg' },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // Added dialog state

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (!rating || !feedback) {
      return; // Optionally show an error if fields are empty
    }

    // Display success message after feedback submission
    setOpenSnackbar(true);
    setOpenDialog(true); // Open dialog after feedback submission
    setRating('');
    setFeedback('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    setSelectedCourse(null); // Optionally reset the selected course
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Course Feedback
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia component="img" height="140" image={course.image} alt={course.name} />
              <CardContent>
                <Typography variant="h6">{course.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
                <Button onClick={() => handleCourseClick(course)} fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                  Provide Feedback
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Feedback Form Modal */}
      {selectedCourse && (
        <Modal open={!!selectedCourse} onClose={() => setSelectedCourse(null)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Feedback for {selectedCourse.name}
            </Typography>
            <FormLabel>Course Rating</FormLabel>
            <RadioGroup value={rating} onChange={handleRatingChange}>
              <FormControlLabel value="1" control={<Radio />} label="1 - Poor" />
              <FormControlLabel value="2" control={<Radio />} label="2 - Fair" />
              <FormControlLabel value="3" control={<Radio />} label="3 - Good" />
              <FormControlLabel value="4" control={<Radio />} label="4 - Very Good" />
              <FormControlLabel value="5" control={<Radio />} label="5 - Excellent" />
            </RadioGroup>

            <TextField
              label="Your Feedback"
              fullWidth
              multiline
              rows={4}
              value={feedback}
              onChange={handleFeedbackChange}
              sx={{ mt: 2 }}
            />

            <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit Feedback
            </Button>
          </Box>
        </Modal>
      )}

      {/* Thank You Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Thank you for your feedback! We appreciate your input.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      {/* <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thank you for your feedback!
        </Alert>
      </Snackbar> */}
    </Container>
  );
}
