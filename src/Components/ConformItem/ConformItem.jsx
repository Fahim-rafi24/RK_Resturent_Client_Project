import { useContext, useEffect, useState } from "react";
import { axiosInstalled } from "../../Axios/Axios";
import { userStatusContext } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";


const ConformItem = ({ id }) => {
    const currentUser = useContext(userStatusContext);
    // const [savedData, setdata] = useState({});
    const navigate = useNavigate();

    // button No
    const handleNoBtn = () => {
        window.location.reload();
    }
    // button yes
    const handleYesBtn = () => {
        // axios call
        axiosInstalled
            .get(`food_targeted/${id}`, {})
            .then(res => {
                const savedData = res.data;
                const userEmail = currentUser.user;
                const postData = {
                    userEmail,
                    price: savedData.price,
                    name: savedData.name,
                    image: savedData.image
                };
                // call fetch for update card data 
                fetch("http://localhost:5000/user_card_add", {
                    method: "POST",
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify(postData),
                })
                    .then(res => res.json())
                    .then(data => {
                        return window.location.reload();
                    })
            });
        // post data in card library db
        // axiosInstalled
        // .post(`/user_card_add`, postData)
        // .then(res => {
        // if(res.statusText === "OK"){
        // go to page
        // window.location.reload();
        // }
        // })
    }

    return (
        <section className="fixed z-10 top-0 w-[100vw] h-[100vh] bg-[#ffffffe3] flex justify-center items-center">
            <div className="md:w-[60%] h-fit p-10">
                <h1 className="text-5xl mb-3">Are You sure</h1>
                <hr className="border-2 border-dotted" />
                <button onClick={handleYesBtn} className="btn btn-outline btn-info px-10 mr-5 mt-10">Ok</button>
                <button onClick={handleNoBtn} className="btn btn-outline btn-error">NO</button>
            </div>
        </section>
    )
}
export default ConformItem