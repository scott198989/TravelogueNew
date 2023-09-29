import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PackingList from './pages/PackingList';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TravelLogueEdit from './pages/TravelLogueEdit';
import TravelLogueIndex from './pages/TravelLogueIndex';
import TravelLogueNew from './pages/TravelLogueNew';
import TravelLogueProtectedIndex from './pages/TravelLogueProtectedIndex';
import TravelLogueProtectedShow from './pages/TravelLogueProtectedShow';
import TravelLogueShow from './pages/TravelLogueShow';
import Header from './components/Header';
import Footer from './components/Footer';
import mockTrips from './mockTrips';


const App = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [trips, setTrips] = useState([])
    
    const url = "https://travelogue-d6r2.onrender.com";

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token")
        
        if (loggedInUser) {
            const authUserId = +JSON.parse(atob(loggedInUser?.split(".")[1])).sub
            setCurrentUser({ id: authUserId })
        }
        readTrip()
    }, [])

    
    const readTrip = () => {
        fetch(`${url}/trips`)
        .then(response => response.json())
        .then(payload => {
            setTrips(payload)
        })
        .catch(error => console.log(error))
    }
    
    const createTrip = (createdTrip) => {
        fetch(`${url}/trips`, {
        body: JSON.stringify(createdTrip),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
        })
        .then((response) => response.json())
        .then((payload) => readTrip())
        .catch((errors) => console.log("Trip create errors:", errors))
    }
    
    
    const updateTrip = (updatedTrip, id) => {
        fetch(`${url}/trips/${id}`, {
            body: JSON.stringify(updatedTrip),
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH"
        })
        .then((response) => response.json())
        .then((payload) => readTrip())
        .catch((errors) => console.log("Trip update errors:", errors))
    }
    
    const deleteTrip = (id) => {
        fetch(`${url}/trips/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
        .then((response) => response.json())
        .then((payload) => readTrip())
        .catch((errors) => console.log("delete errors:", errors))
    }

    const login = (userInfo) => {
        console.log("Login user info on App.js:", userInfo);
        fetch(`${url}/login`, {
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST"
        })
        .then(response => {
            if (!response.ok) {
            throw Error(response.statusText)
            }
            localStorage.setItem("token", response.headers.get("Authorization"))
            return response.json()
        })
        .then(payload => {
            setCurrentUser(payload)
        })
        .catch(error => console.log("login errors: ", error))
    }
  
    const signup = (userInfo) => {
        fetch(`${url}/signup`, {
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST"
        })
        .then(response => {
            if (!response.ok) {
            throw Error(response.statusText)
            }
            localStorage.setItem("token", response.headers.get("Authorization"))
            return response.json()
        })
        .then(payload => {
        setCurrentUser(payload)
        })
        .catch(error => console.log("login errors: ", error))
    }
  
    const logout = () => {
        fetch(`${url}/logout`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            method: "DELETE"
        })
        .then(payload => {
            localStorage.removeItem("token")
            setCurrentUser(null)
        })
        .catch(error => console.log("log out errors: ", error))
    }

      

    return (

        <div className="app gradient-background">
            <Header currentUser={currentUser} logout={logout}/>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} 
                />
                <Route 
                    path="/meetRST" 
                    element={<AboutUs />} 
                />
                <Route 
                    path="/demotrips" 
                    element={<TravelLogueIndex trips={mockTrips}/>} 
                />
                <Route 
                    path="/demotrips/:id" 
                    element={<TravelLogueShow trips={mockTrips}/>} 
                />
                <Route 
                    path="/login" 
                    element={<Login login={login}/>} 
                />
                <Route 
                    path="/signup" 
                    element={<SignUp signup={signup}/>} 
                />
                <Route 
                    path="/PackingList" 
                    element={<PackingList currentUser={currentUser} trips={trips} />} 
                />
                {currentUser && (
                    <>
                        <Route 
                            path="/mytrips" 
                            element={<TravelLogueProtectedIndex currentUser={currentUser} trips={trips} />} 
                        />
                        <Route 
                            path="/mytrips/:id" 
                            element={<TravelLogueProtectedShow currentUser={currentUser} trips={trips} />} 
                        />
                        <Route 
                            path="/addtrip" 
                            element={<TravelLogueNew currentUser={currentUser} createTrip={createTrip} />} 
                        />
                        <Route 
                            path="/changetrips/:id" 
                            element={<TravelLogueEdit trips={trips} updateTrip={updateTrip} deleteTrip={deleteTrip} currentUser={currentUser} />} 
                        />
                    </>
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}


export default App