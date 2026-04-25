///////////////////////////////////////////////
// Notifications Component - Listeners կայքից
//
// Այս կոմպոնենտը subscribe-ում է event bus-ին
// և լսում է "notification" իրադարձություններ։
//
// Երբ որեւ մեկ այլ component-ից publish-ում է
// notification - այստեղ ստանում ենք դա անմիջապես
// առանց որ այն կոմպոնենտ ուղիղ կապ ունենա մեզ հետ:
///////////////////////////////////////////////

import { useState, useEffect } from 'react';
import eventBus from './eventBus';
import './Observer.css';

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe('notification', data => {
      const id = Date.now();
      const notification = { id, ...data };
      setNotifications(prev => [...prev, notification]);
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 3000);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="notifications-container">
      {notifications.map(notification => (
        <div key={notification.id} className={`notification ${notification.type || 'info'}`}>
          <div className="notification-content">
            <span className="notification-icon">{notification.icon}</span>
            <div className="notification-message">
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
