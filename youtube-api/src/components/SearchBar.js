import { Paper, TextField } from "@mui/material";
import React from "react";

class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  handelChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    };
    
    handelSubmit = (event) => {

        event.preventDefault();
        
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm)

        
    }

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handelSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handelChange} />
        </form>
      </Paper>
    );
  }
}

export default Searchbar;
