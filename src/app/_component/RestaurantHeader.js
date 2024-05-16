import Link from "next/link";
import image from '../vecteezy_food-delivery-logo_8687818.jpg'
const Header = () => {
    return (
        <div className="header-wrapper">
            <div>
                {/* <img style={{width:200}} src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" /> */}
                <img style={{width:200}} src={image.src} />
{/* D:\MP\java8_new_features_in_simple_way_complete_study_material\next project\food-order-app\src\app\vecteezy_food-delivery-logo_8687818.jpg */}
            </div>
            <ul>
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">Login/SignUp</Link>
                </li>
                <li>
                    <Link href="">Profile</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Header;