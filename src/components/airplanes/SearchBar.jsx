import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          style={{ width: "300px", marginRight: "16px" }}
          variant="outlined"
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
            width: "30px", // Set the desired width
            height: "30px", // Set the desired height
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
            width: "30px", // Set the desired width
            height: "30px", // Set the desired height
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
