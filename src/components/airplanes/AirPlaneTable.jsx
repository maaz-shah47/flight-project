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
import AiroplaneIcon from '../../assets/aeroplane.png';

const dummyData = [
  {
    flightNo: "AA123",
    number: "Pilatus PC-12",
    seats: "8",
    registered_date: "22 oct 2023",
  },
  {
    flightNo: "BA456",
    number: "Pilatus PC-12",
    seats: "10",
    registered_date: "23 oct 2023",
  },
  // Add more dummy data as needed
];

const FlightTable = ({ planes }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ border: "none" }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell sx={{ color: "white" }}>Image</TableCell>
            <TableCell sx={{ color: "white" }}>Plane Name</TableCell>
            <TableCell sx={{ color: "white" }}>Number</TableCell>
            <TableCell sx={{ color: "white" }}>Total Seats</TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planes && planes.map((data, index) => (
            <TableRow key={index} sx={{ borderBottom: "none" }}>
              <TableCell><img src={AiroplaneIcon} alt="Seat Icon" style={{ height: '50px' }} /></TableCell>
              <TableCell>{data.planename}</TableCell>
              <TableCell>{data.codename}</TableCell>
              <TableCell>{data.planecapacity}</TableCell>
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
