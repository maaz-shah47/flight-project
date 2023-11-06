import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function SearchBar({ planes, onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handleSearchChange = (e) => {
    const query = e.target.value;
    console.log(query);
    setSearchQuery(query);
    
    // Clear suggestions if the query is empty
    if (query === "") {
      setSuggestions([]);
      onSearchChange(null);
    } else {
      // Filter the planes based on the query
      const filteredSuggestions = planes.filter((plane) =>
        plane.planename.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };
  

  const handleSuggestionSelect = (selectedPlane) => {
    setSearchQuery(selectedPlane.planename);
    onSearchChange(selectedPlane.id);
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <TextField
          style={{ width: "300px", marginRight: "16px" }}
          label=""
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <>
                {searchQuery === "" ? (
                  <Typography
                    style={{ display: "flex", alignItems: "center" }}
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                  >
                    <SearchIcon style={{ marginRight: "6px" }} />
                    Search
                  </Typography>
                ) : null}
              </>
            ),
          }}
        />
        {suggestions.length > 0 && (
          <List
            style={{
              position: "absolute",
              top: "100%", // Adjust the top position to align with the input field
              left: 0,
              right: 0,
              zIndex: 1, // Ensure suggestions are displayed above the input field
              backgroundColor: "white", // You can customize the appearance
              border: "1px solid #ccc", // Add a border for visual separation
            }}
          >
            {suggestions.map((plane) => (
              <ListItem
                button
                key={plane.id}
                onClick={() => handleSuggestionSelect(plane)}
              >
                <ListItemText primary={plane.planename} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
          sx={{ fontSize: 12 }}
        >
          Filter By <FilterAltIcon />
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
        </Typography>
        <IconButton
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            marginLeft: "5px",
            width: "30px",
            height: "30px",
          }}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftOutlined />
        </IconButton>
        <IconButton
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            marginLeft: "5px",
            width: "30px",
            height: "30px",
          }}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SearchBar;
