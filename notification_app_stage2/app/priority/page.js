"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";
import { getTopNotifications } from "../utils/priority";
import { Select, MenuItem } from "@mui/material";

export default function Priority() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("all");
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

  const top = getTopNotifications(data, limit, filter);

  return (
    <>
      <Navbar />

      <div style={{ maxWidth: "800px", margin: "auto", padding: "10px" }}>
        <h2 style={{ textAlign: "center" }}>Priority Inbox</h2>

        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <Select value={limit} onChange={(e) => setLimit(e.target.value)}>
            <MenuItem value={10}>Top 10</MenuItem>
            <MenuItem value={15}>Top 15</MenuItem>
            <MenuItem value={20}>Top 20</MenuItem>
          </Select>

          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="placement">Placement</MenuItem>
            <MenuItem value="result">Result</MenuItem>
            <MenuItem value="event">Event</MenuItem>
          </Select>
        </div>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {!loading && top.length === 0 && (
          <p style={{ textAlign: "center" }}>No notifications</p>
        )}

        {top.map((n, i) => (
          <NotificationCard key={i} data={n} markAsRead={markAsRead} />
        ))}
      </div>
    </>
  );
}