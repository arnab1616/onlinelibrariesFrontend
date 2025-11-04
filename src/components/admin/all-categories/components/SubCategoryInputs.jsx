import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SubCategoryInputs = () => {
  const [options, setOptions] = useState([
    { title: "The Shawshank Redemption", id: 1 },
    { title: "The Godfather", id: 2 },
    { title: "The Godfather: Part II", id: 3 },
    { title: "The Dark Knight", id: 4 },
    { title: "12 Angry Men", id: 5 },
    { title: "Schindler's List", id: 6 },
    { title: "Pulp Fiction", id: 7 },
  ]);

  const [selected, setSelected] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      const value = event.target.value.trim();

      const exists = options.some(
        (item) => item.title.toLowerCase() === value.toLowerCase()
      );

      if (!exists) {
        const newOption = { title: value, id: options.length + 1 };
        setOptions((prev) => [...prev, newOption]);
        setSelected((prev) => [...prev, newOption]);
      }

      event.target.value = "";
      event.preventDefault();
    }
  };

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option.title}
      value={selected}
      onChange={(event, newValue) => setSelected(newValue)}
      onKeyDown={handleKeyDown}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Multiple Keywords"
          placeholder='Write and Press "Enter" key to add multiple keywords'
        />
      )}
      sx={{
        marginBottom: "1.2rem",
        background: "#f0f5f7",
        p: "8px 10px",
        borderRadius: "8px",
        '& label[data-shrink="false"] + .MuiInputBase-formControl .css-1yrc8ca-MuiInputBase-input-MuiInput-input': {padding:"10px 1rem"}
      }}
    />
  );
};

export default SubCategoryInputs;
