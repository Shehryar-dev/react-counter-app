# React Counter App 🚀

A simple **React Counter App** that allows users to **increment** and **decrement** the count value, with limits set between **0 and 20**.

## 🎯 Features
✅ Increase count (Max limit: 20)  
✅ Decrease count (Min limit: 0)  
✅ Alert when limits are exceeded  
✅ Styled buttons with a simple UI  

## 🛠️ Technologies Used
- React.js
- useState Hook
- JSX
- Inline CSS

## 📂 Project Setup
Follow these steps to set up the project locally.

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/yourusername/react-counter-app.git
```
Replace `yourusername` with your GitHub username.

### 🔹 2. Navigate to Project Directory
```sh
cd react-counter-app
```

### 🔹 3. Install Dependencies
```sh
npm install
```

### 🔹 4. Start the App
```sh
npm run dev
```
Now, open **http://localhost:3000/** in your browser to see the app running.

## 📜 Code Overview
The core functionality is handled using the **useState hook**.

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You can't go beyond 20");
    }
  };

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go below 0");
    }
  };

  return (
    <>
      <h1>React Counter App</h1>
      <h1>Your Count is: {count}</h1>

      <div className="card" style={{ width: '18rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={addCount} style={{ marginLeft: '10px', borderRadius: '10px', background:'#3B6790', color:'white' }}>
          Increment
        </button>
        <button onClick={subtractCount} style={{ marginLeft: '10px', borderRadius: '10px', background:'#3B6790', color:'white' }}> 
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
```

## 📌 Improvements
Here are some possible improvements for the future:
- Add a **reset button** to reset the count.
- Improve the UI using **Tailwind CSS** or **Bootstrap**.
- Store the count in **localStorage** to retain value after refresh.

## 📄 License
This project is licensed under the **MIT License**.
