import React, { useState } from 'react';
import { useAuth } from "../App";
import { useNavigate } from "react-router";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { query, where, getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function LoginPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const { setIsLogin } = useAuth();
    const [error, setError] = useState('');
    const handleLogin = async () => {
        const q = query(collection(db, "users"), where("login", "==", login), where("password", "==", password));

        try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setError('Логин или пароль неверный');
                console.log('Логин или пароль неверный');
            } else {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });
                setIsLogin(true);
                navigate("/");
            }
        } catch (error) {
            console.error("Error reading document: ", error);
            setError('Ошибка при попытке входа');
        }
    };

    const handleRegister = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                login: login,
                password: password,
            });
            console.log("Document written with ID: ", docRef.id);
            setIsLogin(true);
            navigate("/");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const switchToRegister = () => {
        setIsRegistering(true);
    };

    const switchToLogin = () => {
        setIsRegistering(false);
    };

    return (
        <div style={{
            backgroundImage: "linear-gradient(135deg, white,darkblue, lightgreen )",
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
            gap: "48px",
            alignItems: 'center',
            height: '100vh',
            backgroundSize: 'cover',
            position: "relative"
        }}>
            <h1 style={{marginBottom: '20px',zIndex: 10, color:"#f5f5f5"}}>El Dauysy</h1>
            <div style={{
                zIndex: 10,
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '400px',
            }}>
                <h2 style={{marginBottom: '20px', fontSize: "20px"}}>
                    {isRegistering ? "Регистрация" : "Авторизациядан өтіңіз"}
                </h2>
                <TextField
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Логин"
                    style={{padding: '10px', marginBottom: '10px', width: '100%'}}
                />
                <TextField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Құпия сөз"
                    style={{padding: '10px', marginBottom: '20px', width: '100%'}}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                    {isRegistering ? (
                        <Button onClick={handleRegister} sx={{padding: '10px 20px', cursor: 'pointer',
                            textTransform: "none", backgroundColor: "#757ce8", color: "white"
                        }}>
                            Создать
                        </Button>
                    ) : (
                        <Button onClick={switchToRegister} sx={{padding: '10px 20px', cursor: 'pointer',
                            textTransform: "none", color: "blue"
                        }}>
                            Регистрация
                        </Button>
                    )}
                    {isRegistering ? (
                        <Button onClick={switchToLogin} sx={{padding: '10px 20px', cursor: 'pointer',
                            textTransform: "none", backgroundColor: "#757ce8", color: "white"
                        }}>
                            Вход
                        </Button>
                    ) : (
                        <Button onClick={handleLogin} sx={{padding: '10px 20px', cursor: 'pointer',
                            textTransform: "none", backgroundColor: "#757ce8", color: "white"
                        }}>
                            Кіру
                        </Button>
                    )}
                </Box>

            </div>
        </div>
    );
}

export default LoginPage;
