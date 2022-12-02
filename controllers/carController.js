import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Car from "../models/Car.js";

const addCar = async (req, res) => {
  const { brand, model, year, serialNumber, plates } = req.body;

  if (!brand || !model || !year || !serialNumber || !plates) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.customer = req.query.customer;

  const car = await Car.create(req.body);
  res.status(StatusCodes.CREATED).json(car);
};

const getAllCarsByCustomerId = async (req, res) => {
  console.log(req.params.id);
  const queryObject = {
    createdBy: req.params.id,
  };

  let result = Car.find(queryObject);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  result.skip(skip).limit(limit);

  const cars = await result;

  const totalCars = await Car.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalCars / limit);

  res.status(StatusCodes.OK).json({ cars, totalCars, numOfPages });
};

export { addCar, getAllCarsByCustomerId };
