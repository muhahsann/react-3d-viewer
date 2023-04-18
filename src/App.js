import React, { useState } from "react";
function App() {
  const [isFlyout, setIsFlyout] = useState(false);
  return (
    <>
      <div>
        <div
          onMouseEnter={() => setIsFlyout(true)}
          onMouseLeave={() => setIsFlyout(false)}
        >
          Punjab
        </div>

        {/* {isFlyout && <div
          style={{
            position: "absolute",
            top: "0px",
            marginLeft: "150px",
            width: "200px",
            height: "200px",
            border: "1px solid red",
          }}
        >
          testing
        </div>} */}
      </div>
    </>
  );
}

export default App;
