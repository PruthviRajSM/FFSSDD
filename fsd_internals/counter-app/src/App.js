import { useState } from "react"; 
 
export default function App() { 
  const students = [ 
    { name: "Rocky", percentage: 90 }, 
    { name: "Sammy", percentage: 72 }, 
    { name: "Alpha", percentage: 68 }, 
    { name: "Prost", percentage: 60 }, 
    { name: "Mark", percentage: 89 }, 
    { name: "Rex", percentage: 92 }, 
  ]; 
 
  const distinction = students.filter(s => s.percentage >= 85).length; 
  const firstClass = students.filter(s => s.percentage >= 60 && s.percentage < 
85).length; 
 
  const [search, setSearch] = useState(""); 
  const filtered = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) 
  ); 
 
  return ( 
    <div style={{ padding: 20, fontFamily: "sans-serif" }}> 
      <h3>Scholarship Counter</h3> 
      <p>Distinction (≥85): {distinction}</p> 
      <p>First Class (60–84): {firstClass}</p> 
 
      <input 
        placeholder="Search name..." 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
      /> 
 
      <table border="1" style={{ marginTop: 10 }}> 
        <thead> 
          <tr><th>Name</th><th>Percentage</th></tr> 
        </thead> 
        <tbody> 
          {filtered.map((s, i) => ( 
            <tr key={i}> 
              <td>{s.name}</td> 
              <td>{s.percentage}%</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
} 

/*import { useState } from "react"; 
export default function App() { 
  const [text, setText] = useState(""); 
 
  return ( 
    <div style={{ padding: 20, fontFamily: "sans-serif" }}> 
      <h3>React Form</h3> 
      <textarea 
        rows="4" 
        cols="40" 
        placeholder="Enter text..." 
        value={text} 
        onChange={e => setText(e.target.value)} 
      /> 
      <p>{text}</p> 
    </div> 
  ); 
} */

  /*import { useState, useEffect } from "react"; 
export default function App() { 
  const [name, setName] = useState(""); 
  const [message, setMessage] = useState(""); 
 
  useEffect(() => { 
    if (!name) setMessage("Enter something"); 
    else if (!/^[A-Za-z\s]+$/.test(name)) setMessage("❌ Only letters 
allowed"); 
    else if (name.length < 3) setMessage("❌ At least 3 characters required"); 
    else setMessage("✅ Valid name"); 
  }, [name]); 
 
  return ( 
    <div style={{ padding: 20, fontFamily: "sans-serif" }}> 
      <h3>Input Validation</h3> 
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      /> 
      <p>{message}</p> 
    </div> 
  ); 
} */

  /*EXECUTION COMMANDS
  1.node -v
  2.npm -v
  3.npx create-react-app counter-app
  4.cd counter-app
  5.npm start or npx react-script start
  */

  