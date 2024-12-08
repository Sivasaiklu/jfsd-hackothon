import * as React from 'react';
import { Container, TextField, Button, Typography, Box, Rating, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper } from '@mui/material';

export default function FeedbackForm() {
  const [feedback, setFeedback] = React.useState('');
  const [courseRating, setCourseRating] = React.useState(0);
  const [courseContentRating, setCourseContentRating] = React.useState(0);
  const [instructorRating, setInstructorRating] = React.useState(0);
  const [clarityRating, setClarityRating] = React.useState(0);
  const [timeManagementRating, setTimeManagementRating] = React.useState(0);
  const [usefulnessRating, setUsefulnessRating] = React.useState(0);
  const [suggestions, setSuggestions] = React.useState('');
  const [errorMessages, setErrorMessages] = React.useState({
    feedback: '',
    courseRating: '',
    courseContentRating: '',
    instructorRating: '',
    clarityRating: '',
    timeManagementRating: '',
    usefulnessRating: '',
    suggestions: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event, newValue, setter) => {
    setter(newValue);
  };

  const handleSuggestionsChange = (event) => {
    setSuggestions(event.target.value);
  };

  const handleSubmit = () => {
    const errors = {};

    if (feedback.trim() === '') errors.feedback = 'Feedback cannot be empty';
    if (courseRating === 0) errors.courseRating = 'Please rate the course';
    if (courseContentRating === 0) errors.courseContentRating = 'Please rate the course content';
    if (instructorRating === 0) errors.instructorRating = 'Please rate the instructor';
    if (clarityRating === 0) errors.clarityRating = 'Please rate the clarity of the course';
    if (timeManagementRating === 0) errors.timeManagementRating = 'Please rate the time management';
    if (usefulnessRating === 0) errors.usefulnessRating = 'Please rate the usefulness of the course';
    if (suggestions.trim() === '') errors.suggestions = 'Please provide suggestions or feedback';
    
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    console.log('Feedback submitted:', {
      feedback,
      courseRating,
      courseContentRating,
      instructorRating,
      clarityRating,
      timeManagementRating,
      usefulnessRating,
      suggestions,
    });

    setFeedback('');
    setCourseRating(0);
    setCourseContentRating(0);
    setInstructorRating(0);
    setClarityRating(0);
    setTimeManagementRating(0);
    setUsefulnessRating(0);
    setSuggestions('');
    setErrorMessages({});
    setSubmitted(true);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            Course Feedback Form
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please provide your valuable feedback to help us improve the course!
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Question 1: Course Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>1. How would you rate the overall course?</Typography>
            <Rating
              value={courseRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setCourseRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.courseRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.courseRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 2: Course Content Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>2. How would you rate the course content?</Typography>
            <Rating
              value={courseContentRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setCourseContentRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.courseContentRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.courseContentRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 3: Instructor Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>3. How would you rate the instructor's performance?</Typography>
            <Rating
              value={instructorRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setInstructorRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.instructorRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.instructorRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 4: Clarity Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>4. How would you rate the clarity of the course?</Typography>
            <Rating
              value={clarityRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setClarityRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.clarityRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.clarityRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 5: Time Management Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>5. How would you rate the time management of the course?</Typography>
            <Rating
              value={timeManagementRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setTimeManagementRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.timeManagementRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.timeManagementRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 6: Usefulness Rating */}
            <Typography variant="h6" sx={{ mb: 2 }}>6. How useful was this course to your learning?</Typography>
            <Rating
              value={usefulnessRating}
              onChange={(event, newValue) => handleRatingChange(event, newValue, setUsefulnessRating)}
              precision={1}
              sx={{ mb: 2 }}
            />
            {errorMessages.usefulnessRating && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.usefulnessRating}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 7: Suggestions */}
            <Typography variant="h6" sx={{ mb: 2 }}>7. What suggestions do you have for improving the course?</Typography>
            <TextField
              label="Your Suggestions"
              multiline
              rows={4}
              fullWidth
              value={suggestions}
              onChange={handleSuggestionsChange}
              sx={{ mb: 2 }}
              placeholder="Write your suggestions here..."
              variant="outlined"
            />
            {errorMessages.suggestions && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.suggestions}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {/* Question 8: General Feedback */}
            <Typography variant="h6" sx={{ mb: 2 }}>8. Any general feedback or comments?</Typography>
            <TextField
              label="Your Feedback"
              multiline
              rows={4}
              fullWidth
              value={feedback}
              onChange={handleFeedbackChange}
              sx={{ mb: 2 }}
              placeholder="Write your feedback here..."
              variant="outlined"
            />
            {errorMessages.feedback && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errorMessages.feedback}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ width: '100%' }}
            >
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Success Dialog */}
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
    </Container>
  );
}
