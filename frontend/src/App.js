import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ChatPage from './ChatPage';
import GenerateImageCaptionPage from './GenerateImageCaptionPage';
import TrainPDFPage from './TrainPDFPage';
import TrainTubePage from './TrainTubePage';
import DeleteDataPage from './DeleteDataPage';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Llama2 App
            </Typography>
            <Button color="inherit" component={Link} to="/chat">Chat</Button>
            <Button color="inherit" component={Link} to="/generate-image-caption">Image Caption</Button>
            <Button color="inherit" component={Link} to="/trainpdf">Train PDF</Button>
            <Button color="inherit" component={Link} to="/traintube">Train Tube</Button>
            <Button color="inherit" component={Link} to="/delete-data">Delete Data</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/generate-image-caption" element={<GenerateImageCaptionPage />} />
            <Route path="/trainpdf" element={<TrainPDFPage />} />
            <Route path="/traintube" element={<TrainTubePage />} />
            <Route path="/delete-data" element={<DeleteDataPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

