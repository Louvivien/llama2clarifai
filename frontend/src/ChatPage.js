import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function ChatPage() {
  const [details, setDetails] = useState('');
  const [dataId, setDataId] = useState('12');
  const [api, setApi] = useState('');
  const [option, setOption] = useState('1');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        details: details,
        data_id: dataId,
        api: api,
        option: option
      };
      
      const response = await axios.post('/api/chat', requestBody);
      setResponse(response.data.answer || response.data.error || 'An error occurred.');
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred.');
    }
  };

  return (
    <Box sx={{ mt: 3, mx: 'auto', width: '80%' }}>
      <Typography variant="h4" align="center">Chat Page</Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Details" 
            variant="outlined" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            sx={{ mb: 2 }}
          />
          <TextField 
            fullWidth 
            label="Data ID" 
            variant="outlined" 
            value={dataId} 
            onChange={(e) => setDataId(e.target.value)} 
            sx={{ mb: 2 }}
          />
          <TextField 
            fullWidth 
            label="Clarifai API Key" 
            variant="outlined" 
            value={api} 
            onChange={(e) => setApi(e.target.value)} 
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel>Option</InputLabel>
            <Select
              label="Option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <MenuItem value="1">Generate Short Ebook Content</MenuItem>
              <MenuItem value="2">Generate Blog Post</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">Generate</Button>
        </form>
      </Paper>
      <Paper elevation={1} sx={{ mt: 3, p: 2 }}>
        <Typography variant="body1">{response}</Typography>
      </Paper>
    </Box>
  );
}

export default ChatPage;

