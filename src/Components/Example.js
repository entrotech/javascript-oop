import React from "react";
import {
  CarRegistration,
  TruckRegistration
} from "../Libraries/RegistrationLib.js";

class Example extends React.Component {
  constructor() {
    super();
    this.state = { vehicles: this.createTestData() };
  }

  createTestData = () => {
    const car1 = new CarRegistration(
      "John",
      "Galt",
      new Date(2018, 12, 15),
      18000,
      false
    );

    const car2 = new CarRegistration(
      "Simon",
      "Ramo",
      new Date(2019, 2, 2),
      67500,
      true
    );

    const truck = new TruckRegistration(
      "Chuck",
      "Norris",
      new Date(2019, 4, 5),
      3,
      8500
    );

    return [car1, car2, truck];
  };

  render() {
    const { vehicles } = this.state;
    return (
      <React.Fragment>
        <h1>Vehicles</h1>
        <hr />
        {vehicles ? (
          vehicles.map(vehicle => {
            return (
              <React.Fragment key={vehicle.id}>
                <div>
                  <h3>{`${vehicle.firstName} ${vehicle.lastName}`}</h3>
                  <p>{vehicle.getDescription()}</p>
                  <p>{`Fee: ${vehicle.getRegistrationFee()}`}</p>
                </div>
                <hr />
              </React.Fragment>
            );
          })
        ) : (
          <h3>No vehicles found</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Example;
