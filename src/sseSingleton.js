// sseSingleton.js
let eventSourceInstance = null;

export function getEventSource(url) {
  if (!eventSourceInstance) {
    eventSourceInstance = new EventSource(url);

    eventSourceInstance.onopen = () => {
      console.log("SSE connected");
    };

    eventSourceInstance.onerror = (err) => {
      console.error("SSE error", err);
      // optionally handle reconnection logic
    };
  }
  return eventSourceInstance;
}
