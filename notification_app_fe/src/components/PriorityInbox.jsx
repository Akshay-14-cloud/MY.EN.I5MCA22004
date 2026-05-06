import { useState } from "react";
import { getTopNotifications } from "../utils/priority";
import { notifications } from "../data/mockNotifications";
import { Log } from "../utils/logger";

export default function PriorityInbox() {
  const [limit, setLimit] = useState(10);

  Log("frontend", "info", "PriorityInbox", "Component rendered");

  const topNotifications = getTopNotifications(notifications, limit);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Inbox</h2>

      <select
        onChange={(e) => {
          setLimit(Number(e.target.value));
          Log("frontend", "debug", "PriorityInbox", "Limit changed");
        }}
      >
        <option value={10}>Top 10</option>
        <option value={15}>Top 15</option>
        <option value={20}>Top 20</option>
      </select>

      <ul>
        {topNotifications.map((item) => (
          <li key={item.id}>
            <strong>{item.type}</strong> - {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
}