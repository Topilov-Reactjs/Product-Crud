import "./login.styles.scss"
import axios from "axios";
import Navbar from '../../components/navbar/navbar.component';
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        axios({
            // Endpoint to send files
            url: "https://profitmodel-server.herokuapp.com/api/auth/login",
            method: "POST",
            // Attaching the form data
            data: {
                phone: event.target.telephone.value,
                password: event.target.password.value
            },
        })
            .then(data => {
                navigate('/products');
                localStorage.setItem('token', data.data.data)
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
        <div className="login-page">
            <Navbar />
            <div className="container">
                <form onSubmit={onSubmit}>
                    <input type="tel" autoComplete="true" name="telephone" placeholder="Telephone number" required />
                    <input type="password" autoComplete="true" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;