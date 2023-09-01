const {
  FlightRepository,
  AirplaneRepository,
} = require("../repositories/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    if (!compareTime(data.arrivalTime, data.departureTime)) {
      throw { error: "Arrival time cannot be greater than departure time" };
    }
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = FlightService;
