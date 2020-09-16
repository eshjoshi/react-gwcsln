import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // console.log(document.title);
    console.log("clicked")
  },[counts,count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

       <p>You clicked {counts} times</p>
      <button onClick={() => setCounts(counts + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;