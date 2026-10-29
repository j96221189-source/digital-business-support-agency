export async function GET() {
  return Response.json({
    status: "online",
    endpoint: "/api/webhook",
    accepts: ["POST"],
    mode: "connectivity-test"
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "unknown";

  // Do not log webhook bodies: they may contain sensitive payment data.
  console.info("Webhook request received", {
    contentType,
    timestamp: new Date().toISOString()
  });

  return Response.json(
    { received: true, mode: "connectivity-test" },
    { status: 200 }
  );
}
