import React, { useEffect, useState } from "react";
import axios from "axios";

const Link = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      console.log('lsdkflsdk');
    axios
      .get("http://localhost:4000/orders")
      .then((res) => {
        console.log('HELLO',res);
        setUserData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div >
      <h1>User Data</h1>

        {userData.length > 0 ?  
        userData.map((el) => (
          <div className="Data_Show" key={el.id}>
            <h4 className="first_row">Id : {el.id}</h4>
            <h4 className="second_row">Product : {el.product}</h4>
            <h4 className="third_row">Quantity : {el.quantity}</h4>



          </div>
        ))
         : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export default Link;


// userData.map((el) => console.log(el.id))