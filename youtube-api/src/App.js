import React from "react";

import { Grid } from "@mui/material";

import { SearchBar, VideoList, VideoDetail } from "./components/index";

import youtube from "./api/youtube";
class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });

    this.setState({
      video: response.data.item,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {<SearchBar onFormSubmit={this.handleSubmit} />}
            </Grid>
            <Grid item xs={8}>
              {<VideoDetail video={selectedVideo} />}
            </Grid>
            <Grid item xs={4}>
              {<VideoList />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
