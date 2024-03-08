import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  LinearProgress,
} from '@mui/material';
import HomeFrame from '../Components/HomeFrame';
import '../CSS/Layout.css';
import '../CSS/Home.css';
import { GlobalContext } from '../utils/GlobalContext';

export default function Teacher() {
  const { user } = useContext(GlobalContext);

  // Example data for Blackfoot language courses
  const [courses, setCourses] = useState([
    { id: 1, title: 'Intro to Blackfoot', description: 'Beginner course for Blackfoot language', progress: 75 },
    { id: 2, title: 'Blackfoot Culture', description: 'Understanding the cultural background of the Blackfoot language', progress: 50 },
    // Add more courses as needed
  ]);

  // Example data for student progress
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', course: 'Intro to Blackfoot', progress: 80 },
    { id: 2, name: 'Jane Smith', course: 'Blackfoot Culture', progress: 65 },
    // Add more students as needed
  ]);

  // UseEffect for loading data
  useEffect(() => {
    // Fetch courses and student data from a backend service
  }, []);

  return (
    <>
      <HomeFrame currentPageName="Teacher View" />
      <Box className="main-content">
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>Welcome, Teacher {user.name}</Typography>
        <Typography variant="h5">Your Courses:</Typography>
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          {courses.map(course => (
            <Grid item xs={12} sm={6} key={course.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body1" color="text.secondary">{course.description}</Typography>
                  <LinearProgress variant="determinate" value={course.progress} />
                </CardContent>
                <CardActions>
                  <Button size="small">Manage Course</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5">Student Progress:</Typography>
        <Grid container spacing={2}>
          {students.map(student => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{student.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Course: {student.course}</Typography>
                  <LinearProgress variant="determinate" value={student.progress} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
