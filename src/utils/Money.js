const Money = (value) => {
  if (typeof value !== "number") {
    throw new Error("Value must be a number");
  }

  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default Money;
