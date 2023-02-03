// import yoda from "../assets/images/image.png"
import { useNavigate } from "react-router";
export const Main = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div>
                    <h1>
                        <strong>Find</strong> all your favorite <strong>character</strong>
                    </h1>
                </div>
                <div>
                    You can find out all the information about your favorite characters
                </div>
                <div onClick={() => navigate("/characters")}> See more...</div>
            </div>

            <div>{/* <img src={yoda} /> */}</div>
        </div>
    );
};
