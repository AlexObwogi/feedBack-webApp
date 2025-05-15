import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Snackbar, 
  Alert,
  Rating 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Our feedback form's memory (what it remembers)
interface FeedbackData {
  name: string;     // Your name
  email: string;    // Your email
  rating: number;   // Your star rating
  message: string;  // Your message
}

export const FeedbackForm = () => {
  // These are the form's memory boxes
  const [feedback, setFeedback] = useState<FeedbackData>({
    name: '',
    email: '',
    rating: 0,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // "Thank you" flag
  const [error, setError] = useState(''); // "Oops!" message

  // When you type in boxes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  // When you click SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if you forgot something
    if (!feedback.name || !feedback.email || !feedback.message) {
      setError('Please fill all the boxes!');
      return;
    }

    // Pretend to send to server (like mailing a letter)
    console.log('Feedback sent:', feedback);
    setSubmitted(true);
    setFeedback({ name: '', email: '', rating: 0, message: '' }); // Clear boxes
  };

  // Close the "Thank you" or "Oops" message
  const handleCloseSnackbar = () => {
    setSubmitted(false);
    setError('');
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}> {/* Nice white box */}
      <Typography variant="h4" gutterBottom> {/* Big title */}
        Feedback Form
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Name Box */}
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={feedback.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        
        {/* Email Box */}
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          type="email"
          value={feedback.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        
        {/* Star Rating */}
        <Box sx={{ my: 2 }}>
          <Typography>How happy are you?</Typography>
          <Rating
            name="rating"
            value={feedback.rating}
            onChange={(_, newValue) => {
              setFeedback(prev => ({ ...prev, rating: newValue || 0 }));
            }}
          />
        </Box>
        
        {/* Message Box */}
        <TextField
          fullWidth
          label="Your Feedback"
          name="message"
          multiline
          rows={4}
          value={feedback.message}
          onChange={handleChange}
          required
          margin="normal"
        />
        
        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ mt: 2 }}
        >
          Send Feedback
        </Button>
      </form>
      
      {/* "Thank you" Popup */}
      <Snackbar open={submitted} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert severity="success">Thanks for your feedback! 🎉</Alert>
      </Snackbar>
      
      {/* "Oops" Popup */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert severity="error">{error} 😢</Alert>
      </Snackbar>
    </Box>
  );
};
