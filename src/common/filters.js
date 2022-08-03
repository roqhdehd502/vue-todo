export const priceFormatting = (price) => {
  return new Intl.NumberFormat('en-US').format(Math.round(price));
};

export const pricePercentChangeColor = (percentChange) => {
  if(percentChange > 0) {
    return 'upper-red';
  } else if(percentChange < 0) {
    return 'lower-blue';
  } else {
    return 'maintain-black';
  }
}