import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

// product component
function Product() {
    return (
        <div className="products">
            <div className="box">
                <img src={one} alt="image1"></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus fugiat explicabo eius. Quasi dolorum rem quod exercitationem doloremque, eaque illo iusto, distinctio provident quae saepe tempora reiciendis cupiditate magnam quam.ś</p>
            </div>

            <div className="box">
                <img src={two} alt="image2"></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus fugiat explicabo eius. Quasi dolorum rem quod exercitationem doloremque, eaque illo iusto, distinctio provident quae saepe tempora reiciendis cupiditate magnam quam.ś</p>
            </div>

            <div className="box">
                <img src={three} alt="image3"></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus fugiat explicabo eius. Quasi dolorum rem quod exercitationem doloremque, eaque illo iusto, distinctio provident quae saepe tempora reiciendis cupiditate magnam quam.ś</p>
            </div>
        </div>
    )
}

export default Product