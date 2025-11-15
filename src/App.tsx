import { useEffect, useState } from "react";
import DataTable, { type SessionData } from "./components/tab.tsx";

// Dados de exemplo que viriam da sua API
const apiData: SessionData[] = [
  {
    sessionId: "nemu__0B1wVx9XR",
    touchPoints: [
      {
        channel: "facebook-SiteLink-1",
        created_at: "2025-05-01T03:03:54.000Z",
      },
      {
        channel: "facebook-SiteLink-2",
        created_at: "2025-05-01T20:38:23.000Z",
      },
      { channel: "organic", created_at: "2025-05-01T04:15:44.000Z" },
      {
        channel: "facebookads-SiteLink-4",
        created_at: "2025-05-11T21:34:00.000Z",
      },
      {
        channel: "instagram-stories-promo",
        created_at: "2025-05-26T18:37:55.000Z",
      },
    ],
  },
  {
    sessionId: "nemu__A9aZ4fG3K",
    touchPoints: [
      {
        channel: "facebook-SiteLink-1",
        created_at: "2025-06-10T11:00:00.000Z",
      },
      {
        channel: "instagram-reels-tutorial",
        created_at: "2025-06-11T15:20:10.000Z",
      },
    ],
  },
];

export default function App() {
  const [sessions, setSessions] = useState<SessionData[]>([]);

  useEffect(() => {
    // TODO: Substituir pela chamada real da sua API
    // Ex: fetch('/api/sessions').then(res => res.json()).then(data => setSessions(data));
    setSessions(apiData);
  }, []);

  return (
    <>
      <div className="m-6">
        <DataTable data={sessions} />
      </div>
    </>
  );
}
