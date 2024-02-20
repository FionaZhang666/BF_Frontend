import { Typography, Box, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import React, { useContext, useMemo, useState } from "react";

import HomeFrame from "../Components/HomeFrame";

import "../CSS/Layout.css";
import "../CSS/Admin.css";
import { GlobalContext } from "../utils/GlobalContext";

import { backendCall } from "../utils/Network";

export default function Admin() {
  const { user, setGlobalMessage } = useContext(GlobalContext);

  // const [pendingTeacher, setPendingTeacher] = useState();
  // const [pendingContent, setPendingContent] = useState();
  // const [twoWeekVisit, setTwoWeekVisit] = useState();

  // for testing. data stuctrue is：{id: teacherObj}
  const [pendingTeacher, setPendingTeacher] = useState([
    {
      id: 1,
      name: "teacher 1",
      description: "description 1",
    },
    {
      id: 2,
      name: "teacher 2",
      description: "description 2",
    },
  ]);
  const [pendingContent, setPendingContent] = useState([
    {
      id: 1,
      name: "content 1",
      reason: "reason 1",
      video: "video url 1",
    },
    {
      id: 2,
      name: "content 2",
      reason: "reason 2",
      video: "video url 2",
    },
    {
      id: 3,
      name: "content 3",
      reason: "reason 3",
      video: "video url 3",
    }
  ]);
  const [twoWeekVisit, setTwoWeekVisit] = useState([
    111, 217, 161, 119, 118, 122, 219, 288, 240, 269, 334, 49, 102, 23
  ]);

  const PendingTeacherTable = useMemo(() => {
    if (!pendingTeacher) return <></>;
    return <TableContainer component={Paper} className="verification-table">
      <Table>
        <TableHead>
          <TableRow className="verification-table-header">
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingTeacher.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                {/* TODO 需要自定义approve按钮的行为 */}
                <Button variant="contained" color="third">Approve</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }, [pendingTeacher]);

  const PendingContentTable = useMemo(() => {
    if (!pendingContent) return <></>;
    return <TableContainer component={Paper} className="verification-table">
      <Table>
        <TableHead>
          <TableRow className="verification-table-header">
            <TableCell>Name</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Video URL</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingContent.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.video}</TableCell>
              <TableCell>
                {/* TODO 需要自定义approve按钮的行为 */}
                <Button variant="contained" color="third">Approve</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }, [pendingContent]);

  const TwoWeekVisitBar = useMemo(() => {
    if (!twoWeekVisit) return;
    let xLabel = [];
    for (let i = twoWeekVisit.length; i > 0; i--) {
      xLabel.push("-" + i + " Day");
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
      </Box>
    </>
  );
}
