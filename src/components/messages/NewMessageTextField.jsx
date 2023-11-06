import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function NewMessageTextField({ users, onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handleSearchChange = (e) => {
    const query = e.target.value;
    console.log(query);
    setSearchQuery(query);

    if (query === "") {
      setSuggestions([]);
      onSearchChange(null);
    } else {
      const filteredSuggestions = users.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };


  const handleSuggestionSelect = (selectedPlane) => {
    setSearchQuery(selectedPlane.planename);
    onSearchChange(selectedPlane.id);
    setSuggestions([]);
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
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 1,
              backgroundColor: "white",
              border: "1px solid #ccc",
            }}
          >
            {suggestions.map((user) => (
              <ListItem
                button
                key={user.id}
                onClick={() => handleSuggestionSelect(user)}
              >
                <ListItemText primary={user.username} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
}

export default NewMessageTextField;
