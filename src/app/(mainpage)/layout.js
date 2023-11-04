import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/NavBar";
import "./layout.css";



export default function RootLayout({ children }) {
    return (
        <div>
            <div>
                <div className="container">
                    <NavBar />
                    <div className="wrapper">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}