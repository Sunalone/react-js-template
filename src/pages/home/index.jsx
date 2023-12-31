import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "antd";
import { useSelector } from "react-redux";
import styles from "./index.module.less";

function Home() {
    const todo = useSelector((state) => state.todo);
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>{todo.title}</div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button type="primary" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <p className={styles.color}>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default Home;
