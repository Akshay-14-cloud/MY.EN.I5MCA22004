export async function GET() {
  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/notifications");

    if (!res.ok) throw new Error();

    const data = await res.json();

    if (!Array.isArray(data)) throw new Error();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch {
    const fallback = [
      {
        id: 1,
        type: "placement",
        message: "Amazon Hiring",
        timestamp: Date.now(),
        read: false
      },
      {
        id: 2,
        type: "event",
        message: "Hackathon",
        timestamp: Date.now() - 100000,
        read: false
      },
      {
        id: 3,
        type: "result",
        message: "Exam Result",
        timestamp: Date.now() - 200000,
        read: false
      }
    ];

    return new Response(JSON.stringify(fallback), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
}