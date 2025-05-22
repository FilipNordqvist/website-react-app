import profilePic from "./assets/images.jpg"

function Card(){
return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Filip</h2>
        <p>System Developer and a runner</p>
    </div>
);
}

export default Card;