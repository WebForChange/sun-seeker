import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(900);
  return (
    <>
      <h1>Sun Seeker</h1>
      <p>Its like {temp} degrees in Catalonia right now.</p>
    </>
  );
}

export default App;
