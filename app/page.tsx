export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Webhook Receiver</h1>
      <p>Webhook service is deployed. Use the API endpoint to test connectivity.</p>
      <p><code>/api/webhook</code></p>
    </main>
  );
}
