import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import SmartInput from "./SmartInputTextDynamic/src/App.jsx";
import SmartDumpBox from "./SmartDumpBox/src/App.jsx";
import { getEventSource } from './sseSingleton';

export default function App() {
  const selectRef = useRef({status: closed});
  const corporateRef = useRef(null);
  const topicRef = useRef(null);
  const searchedRef = useRef(null);
  const engineRef = useRef(null);
  const smartRef = useRef(null);
  const filterRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [urls, setUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


  const [, forceUpdate] = useState(false);

  const toggleDropdown = () => {
    selectRef.current.status =
      selectRef.current.status === "closed" ? "open" : "closed";
    forceUpdate((prev) => !prev); // trigger re-render
  };

const handlePillClick = (value) => {
  if (searchedRef.current) {
    // if box is empty, just add value
    // else append with a space
    if (searchedRef.current.value.trim() === "") {
      searchedRef.current.value = value;
    } else {
      searchedRef.current.value += " " + value;
    }
    searchedRef.current.focus(); // optional, keep focus in input
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
  const es = getEventSource('http://localhost:3000/stream');

  const handleMessage = (e) => {
  try {
    const parsed = JSON.parse(e.data); // if it's valid JSON
    setMessages((curr) => [...curr, parsed]);
  } catch {
    setMessages((curr) => [...curr, e.data]); // fallback plain string
  }  
};

  es.addEventListener('message', handleMessage);

  return () => {
    es.removeEventListener('message', handleMessage);
    // note: we don't close EventSource here because it's shared
  };
}, []);

console.log("messages", messages);

return (
 <div className="mainbox">

  <div className="leftbox">

    <div className="leftbox corporatekb">
      <div className="leftbox corporatekburl">
        <label className="label">Corporate Knowledge Based Url</label>
        <div className="outsideinput">
          <input ref={corporateRef} type="text" className="input" />
        </div>
      </div> {/* closes corporatekburl */}

      <div className="leftbox corporatetopic">
        <label className="label">Topic</label>
        <div className="outsideinput">
          <input ref={topicRef} type="text" className="input" />
        </div>
      </div> {/* closes corporatetopic */}

      <button onClick={handleCorporateSubmit} className="leftbox topicsubmit">
        Submit Topic
      </button>
    </div> {/* closes corporatekb */}

    <div className="leftbox externalkb">

      <div className="leftbox searchbox">
        <label className="label">Searched</label>
        <div className="outsideinput">
          <input ref={searchedRef} type="text" className="input" />
        </div>
      </div> {/* closes searchbox */}

      <div className="leftbox filterbox">
        <label className="label">Filter</label>
  <div className="leftbox selectanchor">
   <div className="leftbox custom-select" onClick={toggleDropdown}>
        <span className="selectwords">Select filter type</span>
        <span className="arrow">{selectRef.current.status === "open" ? "▲" : "▼"}</span>
      </div>
  <div className={selectRef.current.status === "open"
    ? "pill-options-flex"
    : "pill-options" } >
        <div className="pill-option" id="1" onClick={() => handlePillClick("--filetype=xhtml")}>
          --filetype=xhtml
        </div>
        <div className="pill-option" id="2" onClick={() => handlePillClick("--filetype=html")}>
          --filetype=html
        </div>
        <div className="pill-option" id="3" onClick={() => handlePillClick("--filetype=text")}>
          --filetype=text
        </div>
  </div>
    </div>
      </div> {/* closes filterbox */}

      <div className="leftbox searchenginebox">
        <label className="label">Search Engine</label>
        <div className="outsideinput">
          <input ref={engineRef} type="text" className="input" />
        </div>
      </div> {/* closes searchenginebox */}

      <div className="leftbox sitebox">
        <label className="label">Site</label>
       <SmartInput ref={smartRef} className="smart-input" />
     <button onClick={handleSubmit} className="leftbox externalsubmit">
        Submit
      </button>

  </div> {/* closes sitebox */}
    </div> {/* closes externalkb */}

  </div> {/* closes leftbox */}

  <div className="rightbox">
    <div className="rightbox sitepreviewbox">

        <SmartDumpBox items={urls.map((url) => url)}  height="60vh"   currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} />
  </div>
      <div className="rightbox answerbox">
          <SmartDumpBox items={messages} height="30vh"  currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} />
      </div> {/* closes answerbox */}

  </div> {/* closes rightbox */}

</div> 
)
}
