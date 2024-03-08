import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import HomeFrame from '../Components/HomeFrame';
import '../CSS/Layout.css';
import '../CSS/Home.css';
import { GlobalContext } from '../utils/GlobalContext';

export default function Student() {
  const { user } = useContext(GlobalContext);

  // Sample data, specific to Blackfoot language learning
  const [currentCourses, setCurrentCourses] = useState([
    { id: 1, title: 'Blackfoot Basics', description: 'Introduction to Blackfoot language and grammar' },
    { id: 2, title: 'Blackfoot Conversational Practice', description: 'Practical conversation skills in Blackfoot' },
  ]);

  const [completedCourses, setCompletedCourses] = useState([
    { id: 1, title: 'Blackfoot Culture and Language', description: 'Understanding the culture behind the language' },
  ]);

  const [favoriteCourses, setFavoriteCourses] = useState([
    { id: 1, title: 'Advanced Blackfoot', description: 'Deep dive into advanced Blackfoot linguistic structures' },
  ]);

  // useEffect hook for loading data
  useEffect(() => {
    // Load data here (e.g., from a backend service)
  }, []);

  const renderCourses = (courses, title) => (
    <>
      <Typography variant="h5" sx={{ margin: '20px 0' }}>{title}</Typography>
      <Grid container spacing={2}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {course.description}
                </Typography>
                <Button variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <>
      <HomeFrame currentPageName="Student View" />
      <Box className="main-content">
        <Typography variant="h4" sx={{ margin: '20px 0' }}>Welcome, {user.name}</Typography>

        {renderCourses(currentCourses, 'Current Blackfoot Courses')}
        {renderCourses(completedCourses, 'Completed Blackfoot Courses')}
        {renderCourses(favoriteCourses, 'Favorite Blackfoot Courses')}
      </Box>
    </>
  );
}
