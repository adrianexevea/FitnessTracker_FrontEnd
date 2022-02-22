import React, { useState, useEffect } from "react";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const Routines = (props) => {
  const [routines, setRoutines] = useState([]);

  const returnRoutines = async () => {
      try {
        const getRoutines = await fetch(`${BASE_URL}/routines`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await getRoutines.json();
      console.log(response);
      setRoutines(response);
      } catch (error) {
          throw(error)
      }
    
  };
  useEffect(() => {
    returnRoutines();
  }, []);

  return (
    <>

      {routines.map((routine) => {
        return (
          <div>
            <br></br>
            <div className="routines" >
                <strong>Routine Name:</strong> {routine.name}
                <strong>Goal:</strong> {routine.goal}
                <strong>User:</strong> {routine.creatorName}

        {routine.activities.map((activity) => {
        return (
            <div className="activity">
            <ul><strong>Activity:</strong> <span>{activity.name}</span></ul>
            <ul><strong>Activity Description:</strong> <span>{activity.description}</span></ul>
            <ul><strong>Duration:</strong> <span>{activity.duration}</span></ul>
            <ul><strong>Count:</strong> <span>{activity.count}</span></ul>
            </div>
        );
        })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Routines;