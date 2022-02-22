import { useEffect, useState } from "react";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const Activities = (props) => {
    const [returnedActivities, setReturnedActivities] = useState([]);

    const returnActivities = async () => {
      try {
        const getActivities = await fetch(`${BASE_URL}/activities`, {
            headers: { "Content-Type": "application/json" },
          });
    
      const response = await getActivities.json();
      setReturnedActivities(response);
      } catch (error) {
          throw(error)
      }

  };
  useEffect(() => {
    returnActivities();
  }, []);

  return (
    <>

      {returnedActivities.map((activity) => {
        return (
          <div>

            <div className="activities">

                <div>
                    <strong>Activity:</strong> <span>{activity.name}</span>
                </div>

                <br></br>

                <div>
                    <strong>Activity:</strong> <span>{activity.description}</span>
                </div>
                
            </div>

          </div>
        );
      })}
    </>
  );
};

export default Activities;