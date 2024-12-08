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
} from '@mui/material';

const institutionalServices = [
  {
    name: 'Library Services',
    description: 'Access a vast collection of books, journals, and digital resources to support your academic and research needs.',
    image: 'https://www.crownrms.com/wp-content/uploads/2020/04/2d.Library-services_option-2_800x540px-1.jpg',
  },
  {
    name: 'Counseling Services',
    description: 'Professional counseling to help students with academic, personal, and career challenges.',
    image: 'https://soul-glad.com/wp-content/uploads/2019/12/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash-scaled.jpg',
  },
  {
    name: 'Sports Facilities',
    description: 'Modern sports facilities and coaching for students to excel in physical fitness and team activities.',
    image: 'https://superblog.supercdn.cloud/site_cuid_clr6oh1no0006rmr89yhkxgu8/images/various-sport-equipments-generative-ai-1706958639790-compressed.jpg',
  },
  {
    name: 'Transport Services',
    description: 'Safe and reliable transportation services to and from the campus for students and staff.',
    image: 'https://ik.imagekit.io/wx5dqb8qkk/blogs/blog-1687318252046.jpg?tr=h-500',
  },
  {
    name: 'Health Center',
    description: 'On-campus medical facilities and first aid services to ensure students’ health and well-being.',
    image: 'https://www.biospectrumindia.com/uploads/articles/585a7633ac880_reforma_zdravoohraneniya_2016_1200-10032.jpg',
  },
  {
    name: 'Hostel Accommodation',
    description: 'Comfortable and secure residential facilities with amenities for a great living experience.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarKn-lTfyCiRs4ziGB_LluqqIGbVny9aXJg&s',
  },
  {
    name: 'Cafeteria Services',
    description: 'Hygienic and affordable dining options offering a variety of cuisines to suit everyone’s taste.',
    image: 'https://hmhub.in/wp-content/uploads/2019/08/diners-at-a-buffet.jpg',
  },
  {
    name: 'Placement Cell',
    description: 'Dedicated support for internships, job placements, and career counseling to prepare students for the professional world.',
    image: 'https://www.cgc.edu.in//public/uploads/blogs/d03ccd92ee26844faac2e8fc41f071eb.jpg',
  },
  {
    name: 'Workshops & Seminars',
    description: 'Regular workshops, seminars, and guest lectures to enhance skills and knowledge in diverse fields.',
    image: 'https://3.imimg.com/data3/CS/JI/MY-11444062/wp-content-uploads-2014-02-workshop1-500x500.jpg',
  },
];

export default function InstitutionalServices() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
    recommendation: '',
  });

  const handleOpen = (serviceName) => {
    setSelectedService(serviceName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService('');
    setFeedbackData({
      name: '',
      email: '',
      feedback: '',
      rating: '',
      recommendation: '',
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation logic
    if (
      feedbackData.name &&
      feedbackData.email &&
      feedbackData.feedback &&
      feedbackData.rating &&
      feedbackData.recommendation
    ) {
      // Check if the email is valid
      if (!emailRegex.test(feedbackData.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // If validations pass
      setSnackbarOpen(true);
      handleClose();
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Our Institutional Services
        </Typography>
        <Typography variant="h6" paragraph>
          Explore the wide range of services we offer to enhance your academic and campus experience.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {institutionalServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                alt={service.name}
                height="140"
                image={service.image}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(service.name)}
                >
                  Feedback
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Feedback Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="feedback-modal-title"
        aria-describedby="feedback-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="feedback-modal-title" variant="h6" component="h2" gutterBottom>
            Feedback for {selectedService}
          </Typography>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={feedbackData.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            value={feedbackData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Feedback"
            name="feedback"
            value={feedbackData.feedback}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={3}
            margin="normal"
          />
          <Box sx={{ mt: 3 }}>
            <FormLabel component="legend">How would you rate this service?</FormLabel>
            <RadioGroup
              name="rating"
              value={feedbackData.rating}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
              <FormControlLabel value="Good" control={<Radio />} label="Good" />
              <FormControlLabel value="Average" control={<Radio />} label="Average" />
              <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
            </RadioGroup>
          </Box>
          <Box sx={{ mt: 3 }}>
            <FormLabel component="legend">Would you recommend this service to others?</FormLabel>
            <RadioGroup
              name="recommendation"
              value={feedbackData.recommendation}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          <Box sx={{ textAlign: 'right', mt: 3 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
