"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NotificationCard from "./components/NotificationCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notifications")
      .then(res => res.json())
      .then(data => {
        setData(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  function markAsRead(id) {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  }

  return (
    <>
      <Navbar />

      <div style={{ maxWidth: "800px", margin: "auto", padding: "10px" }}>
        <h2 style={{ textAlign: "center" }}>All Notifications</h2>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {!loading && data.length === 0 && (
          <p style={{ textAlign: "center" }}>No notifications available</p>
        )}

        {data.map((n, i) => (
          <NotificationCard key={i} data={n} markAsRead={markAsRead} />
        ))}
      </div>
    </>
  );
}