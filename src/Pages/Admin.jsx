import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell, // Import TextField here
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";

import { BarChart } from '@mui/x-charts/BarChart';
import moment from "moment";
import React, { useContext, useMemo, useState } from "react";

import HomeFrame from "../Components/HomeFrame";

import "../CSS/Admin.css";
import "../CSS/Layout.css";
import { GlobalContext } from "../utils/GlobalContext";




export default function Admin() {
  const { user, setGlobalMessage } = useContext(GlobalContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ type: '', id: null });
  const [reason, setReason] = useState('');

  // Function to remove "Approve" line
  const handleApprove = (id, type) => {
    if (type === 'teacher') {
      setPendingTeacher(prev => prev.filter(item => item.teacherId !== id));
    } else if (type === 'content') {
      setPendingContent(prev => prev.filter(item => item.contentId !== id));
    } else if (type === 'course') {
      setPendingCourse(prev => prev.filter(item => item.courseID !== id));
    }
  };

  // Function to display the "Not Approved" dialog box
  const handleOpenDialog = (id, type) => {
    setDialogContent({ type, id });
    setOpenDialog(true);
  };

  // Function to close dialog box
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setReason('');
  };

  // Function to submit rejection reasons
  const handleSubmitReason = () => {
    const { type, id } = dialogContent;
    if (type === 'teacher') {
      // Remove corresponding teacher data
      setPendingTeacher(prev => prev.filter(teacher => teacher.teacherId !== id));
    } else if (type === 'content') {
      // Remove corresponding content data
      setPendingContent(prev => prev.filter(content => content.contentId !== id));
    } else if (type === 'course') {
      // Remove corresponding course data
      setPendingCourse(prev => prev.filter(course => course.courseID !== id));
    }

    // Log the reason for rejection and close the dialog box
    console.log(`Type: ${type}, ID: ${id}, Reason: ${reason}`);
    handleCloseDialog();

    // Clear reason and dialog content
    setReason('');
    setDialogContent({ type: '', id: null });
  };




  // const [pendingTeacher, setPendingTeacher] = useState();
  // const [pendingContent, setPendingContent] = useState();
  // const [twoWeekVisit, setTwoWeekVisit] = useState();

  // for testing. data stuctrue is：{id: teacherObj}
  // const navigate = useNavigate();
  // const handleRowClick = (teacherId) => {
  //   navigate(`/NextPage/${teacherId}`);
  // };

  const [pendingTeacher, setPendingTeacher] = useState([
    {
      teacherId: 1,
      name: "Alice Blackwater",
      introduction: "Expert in Blackfoot language and culture with over 15 years of experience in teaching and preserving indigenous languages. Deeply committed to the revitalization of Niitsipowahsin.",
      certification: "Ph.D. in Indigenous Languages, Certified in Blackfoot Language Teaching",
      date: "2022-03-15",
    },
    {
      teacherId: 2,
      name: "Michael Running Wolf",
      introduction: "Dedicated Blackfoot language educator and cultural ambassador with extensive knowledge in traditional storytelling and history. Actively involved in community language workshops.",
      certification: "Bachelor's in Indigenous Studies, Certified Blackfoot Language Instructor",
      date: "2022-04-10",
    },
    {
      teacherId: 3,
      name: "Sarah Little Bear",
      introduction: "Passionate about integrating modern technology with traditional Blackfoot language teaching. Experienced in creating interactive language learning apps and multimedia resources.",
      certification: "Master's in Linguistics, Specialization in Technology-Assisted Language Learning",
      date: "2022-05-21",
    },
    {
      teacherId: 4,
      name: "David Lone Elk",
      introduction: "Renowned linguist and advocate for indigenous language preservation, focusing on the revitalization of Blackfoot through educational programs and community engagement.",
      certification: "Ph.D. in Linguistics, Expert in Algonquian Languages",
      date: "2022-06-15",
    },
    {
      teacherId: 5,
      name: "Emma White Eagle",
      introduction: "Skilled in teaching Blackfoot to learners of all ages, with a special emphasis on immersive learning experiences and cultural immersion trips to Blackfoot-speaking regions.",
      certification: "M.Ed. in Language Education, Certified Cultural Immersion Facilitator",
      date: "2022-07-30",
    }
  ]);

  const [pendingContent, setPendingContent] = useState([
    {
      contentId: 1,
      name: "Foundations of Siksiká: An Introduction",
      category: "Video Course - Covering the basics of Blackfoot language, its dialects, and phonology.",
      link: "https://example.com/foundations-of-siksika",
      date: "2023-01-01",
    },
    {
      contentId: 2,
      name: "Blackfoot Legacy: Language and Culture",
      category: "Text Material - Explores the cultural and historical context of the Blackfoot people.",
      link: "https://example.com/blackfoot-legacy",
      date: "2023-02-15",
    },
    {
      contentId: 3,
      name: "Structural Insights into Blackfoot",
      category: "Interactive Practice - Diving deep into the polysynthetic nature and morphological complexity of the Blackfoot language.",
      link: "https://example.com/structural-insights-blackfoot",
      date: "2023-03-10",
    },
    {
      contentId: 4,
      name: "Blackfoot Phoneme and Pitch Exploration",
      category: "Audio Material - An in-depth study of the Blackfoot phoneme inventory and pitch accent.",
      link: "https://example.com/blackfoot-phoneme-pitch",
      date: "2023-04-20",
    },
    {
      contentId: 5,
      name: "Reviving Niitsipowahsin: The Journey",
      category: "Documentary - Showcasing efforts in preserving and revitalizing the Blackfoot language.",
      link: "https://example.com/reviving-niitsipowahsin",
      date: "2023-05-05",
    },
    {
      contentId: 6,
      name: "Siksiká Starter Pack: Learning Resources",
      category: "Worksheet and Manual - Printable learning materials for beginners in the Blackfoot language.",
      link: "https://example.com/siksika-starter-pack",
      date: "2023-06-12",
    },
    {
      contentId: 7,
      name: "Modern Blackfoot: Evolving Language Use",
      category: "Forum/Discussion Area - Discussions on the use of Blackfoot in contemporary settings.",
      link: "https://example.com/modern-blackfoot",
      date: "2023-07-18",
    },
    {
      contentId: 8,
      name: "Strategies in Blackfoot Language Preservation",
      category: "Language Learning Tips - Tips and strategies for the preservation and learning of Blackfoot.",
      link: "https://example.com/preservation-strategies",
      date: "2023-08-23",
    }

  ]);

  const [pendingCourse, setPendingCourse] = useState([
    {
      courseID: 1,
      name: "Intro to Siksiká: Language and Legacy",
      description: "An introductory course exploring the basics of the Blackfoot language, its unique dialects, and the cultural heritage of the Blackfoot people.",
      date: "2023-01-10",
    },
    {
      courseID: 2,
      name: "Blackfoot Traditions and History",
      description: "Dive into the rich cultural traditions, historical significance, and the modern-day relevance of the Blackfoot community.",
      date: "2023-02-20",
    },
    {
      courseID: 3,
      name: "Blackfoot Language Structure",
      description: "An advanced course focusing on the linguistic features of Blackfoot, including its phonology, syntax, and morphological complexity.",
      date: "2023-03-15",
    },
    {
      courseID: 4,
      name: "Modern Blackfoot: Language in Transition",
      description: "Examine the use of the Blackfoot language in today's world, exploring both the challenges and successes in language preservation.",
      date: "2023-04-05",
    },
    {
      courseID: 5,
      name: "Blackfoot Basics for Beginners",
      description: "A beginner-friendly course designed to teach the fundamentals of Blackfoot language, suitable for new learners.",
      date: "2023-05-22",
    },
    {
      courseID: 6,
      name: "Revitalizing Blackfoot: A Journey",
      description: "Learn about the efforts and strategies in revitalizing the Blackfoot language, and how you can contribute to this important cause.",
      date: "2023-06-30",
    }

  ]);
  const [twoWeekVisit, setTwoWeekVisit] = useState([
    111, 217, 161, 119, 118, 122, 219, 288, 240, 269, 334, 49, 102, 23
  ]);

  const PendingTeacherTable = useMemo(() => {
    if (!pendingTeacher) return <></>;

    return (
      <div>
        {/* Adding titel: "Teacher Verification" */}
        {/* <Typography variant="h5" component="h5" style={{ marginBottom: '30px' }}>
          Teacher Verification Table
        </Typography> */}

        <TableContainer component={Paper} className="verification-table">
          <Table>
            <TableHead>
              <TableRow className="verification-table-header">
                <TableCell>Teacher Name</TableCell>
                <TableCell>Introduction</TableCell>
                <TableCell>Certification & Experience</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Verification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pendingTeacher.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className="verification-table-row"
                //onClick={() => handleRowClick(row.id)} 
                >

                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell>{row.introduction}</TableCell>
                  <TableCell>{row.certification}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="third" sx={{ width: "112px" }} className="button-spacing" onClick={() => handleApprove(row.teacherId, 'teacher')}>Approve</Button>
                    <Button variant="contained" color="third" sx={{ width: "112px" }} onClick={() => handleOpenDialog(row.teacherId, 'teacher')}>Not Approved</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </div>
    );
  }, [pendingTeacher]);


  const PendingContentTable = useMemo(() => {
    if (!pendingContent) return <></>;
    return <TableContainer component={Paper} className="verification-table">
      <Table>
        <TableHead>
          <TableRow className="verification-table-header">
            <TableCell>Content Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Video URL & Sources</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Verification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingContent.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="verification-table-row"
            //onClick={() => handleRowClick(row.id)} 
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.link}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Button variant="contained" color="third" sx={{ width: "112px" }} onClick={() => handleApprove(row.contentId, 'content')}>Approve</Button>
                <Button variant="contained" color="third" sx={{ width: "112px" }} onClick={() => handleOpenDialog(row.contentId, 'content')}>Not Approved</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }, [pendingContent]);

  const PendingCourseTable = useMemo(() => {
    if (!pendingCourse) return <></>;
    return (
      <TableContainer component={Paper} className="verification-table">
        <Table>
          <TableHead>
            <TableRow className="verification-table-header">
              <TableCell>Course Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Verification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingCourse.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="verification-table-row"
              //onClick={() => handleRowClick(row.id)} 
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Button variant="contained" color="third" sx={{ width: "112px" }} onClick={() => handleApprove(row.courseID, 'course')}>Approve</Button>
                  <Button variant="contained" color="third" sx={{ width: "112px" }} onClick={() => handleOpenDialog(row.courseID, 'course')}>Not Approved</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }, [pendingCourse]);


  const TwoWeekVisitBar = useMemo(() => {
    if (!twoWeekVisit) return;
    let xLabel = [];

    for (let i = twoWeekVisit.length; i > 0; i--) {
      xLabel.push(moment().subtract(i, "days").format("MM/DD"));
    }
    return <BarChart
      xAxis={[
        {
          id: 'date',
          data: xLabel,
          scaleType: 'band',
        },
      ]}
      yAxis={[{
        id: 'peoplevisit',
        label: "People Visit"
      }]}
      series={[
        {
          data: twoWeekVisit,
          color: '#463F3A',
        },
      ]}
      margin={{ left: 0, right: 0, top: 10, bottom: 25 }}
      width={800}
      height={300}
    />;

  }, [twoWeekVisit]);

  return (
    <>
      <HomeFrame currentPageName="Admin" />
      <Box className="main-content">
        <Box className="row-between">
          <Typography variant="h3">Welcome, {user.name}!</Typography>
          {TwoWeekVisitBar}
        </Box>
        {PendingTeacherTable}
        {PendingContentTable}
        {PendingCourseTable}

        {/* "Not Approved" Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true} maxWidth="sm">
          <DialogTitle>{"Not Approved"}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
             Please enter the reason for "Not Approved"
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="reason"
              label="Please enter the reason"
              type="text"
              fullWidth
              variant="standard"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancle</Button>
            <Button onClick={handleSubmitReason}>Enter</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
