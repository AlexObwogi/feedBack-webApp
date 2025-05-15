import { CssBaseline, Container } from '@mui/material';
import { FeedbackForm } from './components/FeedbackForm';

function App() {
  return (
    <>
      <CssBaseline /> {/* Makes everything look nice and clean */}
      <Container maxWidth="md" sx={{ py: 4 }}> {/* Creates a cozy box */}
        <FeedbackForm /> {/* Puts our feedback form inside */}
      </Container>
    </>
  );
}

export default App;
