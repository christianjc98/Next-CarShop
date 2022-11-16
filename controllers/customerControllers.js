import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Customer from "../models/Customer.js";

const addClient = async (req, res) => {
  let { name, lastname } = req.body;
  const { address, city, rfc, phoneNumber, email } = req.body;

  if (!name || !lastname || !phoneNumber || !email) {
    throw new BadRequestError("Please provide all values");
  }

  name = name.charAt(0).toUpperCase() + name.slice(1);
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);

  const customer = await Customer.create({
    name,
    lastname,
    address,
    city,
    rfc,
    phoneNumber,
    email,
  });
  res.status(StatusCodes.CREATED).json({
    customer,
    status: StatusCodes.CREATED,
  });
};

const getCustomers = async (req, res) => {
  const { sort, search } = req.query;
  let queryObject = {};

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let result = Customer.find(queryObject);

  if (sort === "a-z") {
    result.sort("name");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  result.skip(skip).limit(limit);

  const customers = await result;

  const totalCustomers = await Customer.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalCustomers / limit);

  res.status(StatusCodes.OK).json({ customers, totalCustomers, numOfPages });
};

const getCustomerById = async (req, res) => {
  const { id: customerId } = req.params;

  const customer = await Customer.findOne({ _id: customerId });
  if (!customer) {
    throw new NotFoundError(`No customer with id: ${customerId}`);
  }

  res.status(StatusCodes.OK).json({ customer });
};

const updateCustomer = async (req, res) => {
  const { id: customerId } = req.params;
  const { name, lastname, address, city, rfc, phoneNumber, email } = req.body;
  if (!name || !lastname || !phoneNumber || !email) {
    throw new BadRequestError("Please provide all values");
  }

  const customer = await Customer.findOne({ _id: customerId });
  if (!customer) {
    throw new NotFoundError(`No customer with id: ${customerId}`);
  }

  const updatedCustomer = await Customer.findOneAndUpdate(
    { _id: customerId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedCustomer });
};

const deleteCustomer = async (req, res) => {
  const { id: customerId } = req.params;
  const customer = await Customer.findOne({ _id: customerId });
  if (!customer) {
    throw new NotFoundError(`No customer with id: ${customerId}`);
  }

  await customer.remove();
  res.status(StatusCodes.OK).json({ msg: "Customer deleted successfully" });
};

export {
  addClient,
  getCustomers,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
};
