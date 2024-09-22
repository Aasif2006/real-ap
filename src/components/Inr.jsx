const Inr = ({ price }) => {
  return Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
    price,
  )
};

export default Inr;
