import { LoggerService } from "./logger.service";
describe("LoggerService", () => {
  it("getLogMessage should return the message", () => {
    //arrange
    let logger = new LoggerService();
    //act
    let result = logger.getLogMessage(" Hi UnitTesting");
    //assert
    expect(result).toBe(" Hi UnitTesting");
  });
});
