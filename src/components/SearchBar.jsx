import React, { useState } from "react";  
import "./Header.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect, useDispatch, useStore } from "react-redux";
import { addCategory, ADD_CATEGORY } from "../actionCreators";
import { withStyles } from "@mui/material";



function Search(){
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();

  const styles = {
    transparentBar: {
      color: '#FFFFFF'
    }
  };

  function handleSelectChange(event) {
    dispatch({
      type: ADD_CATEGORY,
      category: event.target.value,
    });
  }
  const category = store.getState().category;

    return (
      <FormControl fullWidth >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="category"
        onChange={handleSelectChange}
      >
        <option value="all" className="option">Select a Category</option>
        <option value="carbon" className="option">Carbon Emission</option>
        <option value="wildfire" className="option">Wildfire</option>
        <option value="earthquake" className="option">Money</option>
      </Select>
    </FormControl>
    );
  }

  function mapStateToProps(state) {
    const { category } = state;
    return { category: state.category };
  }
  

export default Search;

function dispatch() {
  throw new Error("Function not implemented.");
}
function styles() {
  throw new Error("Function not implemented.");
}
