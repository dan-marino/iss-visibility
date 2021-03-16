import React, { Component } from "react";
import { getIssVisibility } from "../actions/issVisibilityServer";

class Display extends Component {
  state = { issVisibilityData: null };

  componentDidMount = async () => {
    const issVisibilityData = await getIssVisibility();
    this.setState({ issVisibilityData: issVisibilityData.data });
  };

  determineCityAndCountry = () => {
    const { name, country } = this.state.issVisibilityData;
    return country ? `${name}, ${country}` : `some unknown area`
  };

  longitudeAndLatitude = () => {
    const { lon, lat } = this.state.issVisibilityData
    return `Longitude: ${lon}, Latitude: ${lat}`
  }

  determineVisibility = () => {
    if (this.nightTimeAnd("clear")) return "";
    return this.nightTimeAnd("clouds") ? " possibly" : " not"
  };

  nightTimeAnd = (option) => {
    const { dt, sunset, sunrise, main } = this.state.issVisibilityData;
    return (dt > sunset || dt < sunrise) && main.toLowerCase() === option;
  };

  loadingCircle = () => {
    return (
      <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading</div>
      </div>
    );
  };

  render() {
    if (this.state.issVisibilityData === null) return this.loadingCircle();
    return (
      <div>
        <h1>ISS is currently over {this.determineCityAndCountry()}.</h1>
        <h3>{this.longitudeAndLatitude()}</h3>
        <p>It is{this.determineVisibility()} visible at this time.</p>
      </div>
    );
  }
}
export default Display;
