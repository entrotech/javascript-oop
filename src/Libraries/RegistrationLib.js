import moment from "moment";

export class Registration {
  constructor(firstName, lastName, expirationDate, marketValue, isLuxury) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.expirationDate = expirationDate;
  }

  getRegistrationFee() {
    throw new Error(
      "You can only calculate fees for a CarRegistration or TruckRegistration."
    );
  }

  getDescription() {
    return `Exp: ${moment(this.expirationDate).format("L")}`;
  }
}

export class CarRegistration extends Registration {
  constructor(firstName, lastName, expirationDate, marketValue, isLuxury) {
    super(firstName, lastName, expirationDate);
    this.marketValue = marketValue;
    this.isLuxury = isLuxury;
  }

  getRegistrationFee() {
    return this.isLuxury
      ? this.marketValue *
          CarRegistration.VALUE_MULTIPLIER *
          CarRegistration.LUXURY_MULTIPLIER
      : this.marketValue * CarRegistration.VALUE_MULTIPLIER;
  }

  getDescription() {
    return (
      super.getDescription() +
      " " +
      this.marketValue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }) +
      (this.isLuxury ? " L" : "")
    );
  }
}
CarRegistration.VALUE_MULTIPLIER = 0.01;
CarRegistration.LUXURY_MULTIPLIER = 1.2;

export class TruckRegistration extends Registration {
  constructor(firstName, lastName, expirationDate, axles, gvw) {
    super(firstName, lastName, expirationDate);
    this.axles = axles;
    this.gvw = gvw;
  }

  getRegistrationFee() {
    return (
      this.gvw *
      TruckRegistration.WEIGHT_MULTIPLIER *
      (this.axles - 1) *
      TruckRegistration.AXLE_MULTIPLIER
    );
  }

  getDescription() {
    return super.getDescription() + ` Axles: ${this.axles} GVW: ${this.gvw} lb`;
  }
}
TruckRegistration.WEIGHT_MULTIPLIER = 0.05;
TruckRegistration.AXLE_MULTIPLIER = 1.5;
