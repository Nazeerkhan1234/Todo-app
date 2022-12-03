import React from "react";

// function Football() {
//   const shoot = (c) => {
//     alert(c);
//   };

//   return <button onClick={() => shoot("Great Shot!")}>Take the shot!</button>;
// }

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}
export default Garage;
// export default Goal;
// export default Football;
