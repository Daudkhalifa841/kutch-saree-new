// import { Link } from "react-router-dom";
// import NavBar from "../features/navbar/Navbar";
// import Footer from "../features/common/Footer";

import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

    
function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            {/* <Footer></Footer> */}
        </div>
     );
}

export default Home;