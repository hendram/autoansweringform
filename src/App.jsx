import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import SmartInput from "./SmartInputTextDynamic/src/App.jsx";
import SmartDumpBox from "./SmartDumpBox/src/App.jsx";

export default function App() {
  const corporateRef = useRef(null);
  const topicRef = useRef(null);
  const searchedRef = useRef(null);
  const engineRef = useRef(null);
  const smartRef = useRef(null);
  const filterRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [urls, setUrls] = useState([]);

  // Handle Filter Change
   const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value && searchedRef.current) {
      searchedRef.current.value += ` ${value}`;
    }
  };

const handleCorporateSubmit = async () => {
  const payload = {
    topic: {
      corporate: corporateRef.current.value,
      topic: topicRef.current.value
    },
  };
  try {
    const res = await fetch("http://localhost:3000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Corporate Response:", data);
  } catch (err) {
    console.error("Corporate Error:", err);
  }
};

  // Submit Payload
  const handleSubmit = async () => {
    const sites = smartRef.current.getValues(); // assume SmartInput returns array
    setUrls(sites); // store urls for preview

    const payload = {
      topic: {
      searched: searchedRef.current.value,
      searchEngine: engineRef.current.value,
      site: sites
      }
    };

    console.log("Sending payload:", payload);

    try {
      const res = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Response:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Setup SSE Connection
  useEffect(() => {
    const evtSource = new EventSource("http://localhost:3000/stream");

    evtSource.onmessage = (event) => {
      console.log("SSE message:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    evtSource.onerror = (err) => {
      console.error("SSE error:", err);
      evtSource.close();
    };

    return () => {
      evtSource.close();
    };
  }, []);

return (
  <div className="main-layout">
    {/* Left side form */}
    <div className="app">
      <h2 className="app-title">Q&amp;A Generator Checker</h2>

<div className="field corporate-field">
  <label className="field-label">Corporate Knowledge Based Url</label>
  <input ref={corporateRef} type="text" className="field-input" />
</div>

<div className="field corporate-field">
  <label className="field-label">Topic</label>
  <input ref={topicRef} type="text" className="field-input" />
</div>


<button onClick={handleCorporateSubmit} className="submit-btn">
  Submit Corporate
</button>

      <div className="field search-field">
        <label className="field-label">Searched</label>
        <input ref={searchedRef} type="text" className="field-input" />
      </div>

      <div className="field filter-field">
        <label className="field-label">Filter</label>
        <select
          ref={filterRef}
          className="field-select"
          onChange={handleFilterChange}
        >
          <option value="">-- Select File Type --</option>
          <option value="--filetype=xhtml">xhtml</option>
          <option value="--filetype=html">html</option>
          <option value="--filetype=text">text</option>
        </select>
      </div>

      <div className="field engine-field">
        <label className="field-label">Search Engine</label>
        <input ref={engineRef} type="text" className="field-input" />
      </div>

      <div className="field smart-field">
        <label className="field-label">Site</label>
        <SmartInput ref={smartRef} className="smart-input" />
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>

      {/* SSE Messages Section */}
      <div className="messages">
        <h3>Live Updates</h3>
        <ul>
          {messages.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right side previews */}
    <div className="preview-panel">
     <SmartDumpBox
    items={urls.map((url) => url)} // urls from SmartInput
  />
   </div>
  </div>
);
}
