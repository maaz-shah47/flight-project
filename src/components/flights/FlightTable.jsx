// FlightTable.jsx

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

const FlightTable = ({ flights }) => {
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
          {flights.map((flight, index) => (
            <TableRow key={index} sx={{ borderBottom: "none" }}>
              <TableCell>{flight.planeCode}</TableCell>
              <TableCell>{flight.startLat}</TableCell>
              <TableCell>{flight.endLat}</TableCell>
              <TableCell>{flight.departureTime}</TableCell>
              <TableCell>{flight.arrivalTime}</TableCell>
              <TableCell>
                <IconButton
                  style={{
                    backgroundColor: "#f5f5f5",
                    marginLeft: "5px",
                    boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.1)",
                  }}
                >
                  <EditIcon sx={{ cursor: "pointer", color: "black" }} />
                </IconButton>

                <IconButton
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.1)",
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
