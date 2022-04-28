import * as React from "react";
import {useLoading} from "./useLoading";
import {useState} from "react";
import {useEffect} from "react";
import { Link} from "react-router-dom";
import {LoadingView} from "./LoadingView";
import {ErrorView} from "./ErrorView";


export function MessagingSystem({loadMessaging}) {

    const [messageFelt, setMessageFelt] = useState([]);

    const {loading, error} = useLoading(async () => await loadMessaging());
    const [message, setMessage] = useState("");
    const [ws, setWs] = useState();


    useEffect(() => {
        const ws = new WebSocket("ws://localhost:3000");
        ws.onopen = (event) => {
            console.log("opened", event);
        };
        ws.onmessage = (event) => {
            console.log("from server", event);
            setMessageFelt((messageFelt) => [...messageFelt, event.data]);
        };
        ws.onclose = (event) => {
            console.log("close", event);
        };
        setWs(ws);
    }, []);

    function handleSubmitMessage(e) {
        e.preventDefault();
        ws.send(message);
        setMessage("");

    }

    if (loading) {
        return <LoadingView/>
    }
    if (error) {
        return <ErrorView />

    }
    return (

        <>
            <header><h1>Welcome to our messaging system</h1>
                <Link to={"/"}>Home </Link>
                <div id ="sidebar">

                    <Link to="/add" className="btn btn-secondary"> Add user</Link>
                    <Link to={"/users"} className="btn btn-secondary"> Display users</Link>
                </div>
            </header>



            <main>
                <div id="messageFelt">
                    {messageFelt.map((message, index) => (
                        <div key={index}> {message}</div>
                    ))}
                </div>
            </main>
            <footer>
                <form onSubmit={handleSubmitMessage}>
                    <input type="text" placeholder="Type your message here"
                           autoFocus={true}
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}/>
                    <button id="sendMsg">Send message</button>
                </form>
            </footer>

        </>
    ); }




