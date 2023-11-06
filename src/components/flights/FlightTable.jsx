import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const dummyData = [
  {
    flightNo: "AA123",
    from: "New York",
    to: "Los Angeles",
    departure: "08:00 AM",
    arrival: "10:00 AM",
  },
  {
    flightNo: "BA456",
    from: "Chicago",
    to: "Miami",
    departure: "09:30 AM",
    arrival: "11:30 AM",
  },
  // Add more dummy data as needed
];

const FlightTable = () => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ border: "none" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell sx={{ color: "white" }}>Flight No</TableCell>
              <TableCell sx={{ color: "white" }}>From</TableCell>
              <TableCell sx={{ color: "white" }}>To</TableCell>
              <TableCell sx={{ color: "white" }}>Departure</TableCell>
              <TableCell sx={{ color: "white" }}>Arrival</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((data, index) => (
              <TableRow key={index} sx={{ borderBottom: "none" }}>
                <TableCell>{data.flightNo}</TableCell>
                <TableCell>{data.from}</TableCell>
                <TableCell>{data.to}</TableCell>
                <TableCell>{data.departure}</TableCell>
                <TableCell>{data.arrival}</TableCell>
                <TableCell>
                  <IconButton
                    style={{
                      backgroundColor: '#f5f5f5',
                      marginLeft: "5px",
                      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)'
                    }}
                  >
                    <EditIcon sx={{ cursor: "pointer", color: "black" }} />
                  </IconButton>

                  <IconButton
                    style={{
                      marginLeft: "5px",
                      backgroundColor: '#f5f5f5',
                      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)'
                    }}
                  >
                    <DeleteIcon sx={{ cursor: "pointer", color: "black" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default FlightTable;
