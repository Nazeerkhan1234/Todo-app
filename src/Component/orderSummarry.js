import { useNavigate } from "react-router-dom";
const OrderSummarry = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>order confirmed !</div>;
      <button onClick={() => navigate(-1)}>GO back</button>
    </>
  );
};
export default OrderSummarry;
