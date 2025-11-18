import { useQuery } from "@tanstack/react-query";
import DataTable, { type SessionData } from "./components/data-table.tsx";
import axios from "axios";

//Busca na API
const fetchJourneys = async (): Promise<SessionData[]> => {
  console.log("Buscando dados da API...");

  //Delay - simulação
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await axios.get("http://localhost:3333/api/journeys");
  return data;
};

export default function App() {
  const {
    data: sessions,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["journeys"], queryFn: fetchJourneys });

  return (
    <>
      <div className="m-6">
        <h1 className="text-2xl font-bold mb-4">Jornada de Sessões</h1>
        {isLoading && <p>Carregando dados...</p>}
        {isError && (
          <p style={{ color: "red" }}>Falha ao carregar os dados da jornada.</p>
        )}
        {sessions && <DataTable data={sessions} />}
      </div>
    </>
  );
}
