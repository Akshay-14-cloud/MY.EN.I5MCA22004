import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NotificationCard({ data, markAsRead }) {
  return (
    <Card
      onClick={() => markAsRead(data.id)}
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: data.read ? "#f5f5f5" : "#e3f2fd",
        cursor: "pointer"
      }}
    >
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{
              color:
                data.type === "placement"
                  ? "green"
                  : data.type === "result"
                  ? "blue"
                  : "orange"
            }}
          >
            {data.type}
          </Typography>

          <Chip
            label={data.read ? "READ" : "NEW"}
            color={data.read ? "default" : "primary"}
            size="small"
          />
        </div>

        <Typography>{data.message}</Typography>

        <Typography variant="caption">
          {new Date(data.timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}