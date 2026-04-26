///////////////////////////////////////////////
// Observer/Event Bus Pattern (Դիտորդ/Իրադարձությունների Ավտոբուս)
//
// Pub/Sub մեխանիզմ որ թույլ տալ component-ներին
// կապ հաստել իրար հետ առանց tree hierarchy-ի:
//
// Components: publish(event, data) -> ուղարկել իրադարձություն
// Components: subscribe(event, callback) -> լսել իրադարձություն
//
// Առավելություն: Decoupled communication, no prop drilling,
// տարբեր ենթատեղերի միջև ազատ հաղորդակցություն
///////////////////////////////////////////////

const listeners = {};

export const eventBus = {
  subscribe(event, callback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(callback);
    return () => {
      listeners[event] = listeners[event].filter((cb) => cb !== callback);
    };
  },

  publish(event, data) {
    if (listeners[event]) {
      listeners[event].forEach((callback) => callback(data));
    }
  },

  clear() {
    Object.keys(listeners).forEach((key) => {
      listeners[key] = [];
    });
  },
};

export default eventBus;
