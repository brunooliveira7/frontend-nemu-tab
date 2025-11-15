import { useQuery } from "@tanstack/react-query";
import DataTable, { type SessionData } from "./components/data-table.tsx";
import axios from "axios";

// 1. A lógica de busca de dados é encapsulada em uma função async.
const fetchJourneys = async (): Promise<SessionData[]> => {
  console.log("Buscando dados da API...");
  const { data } = await axios.get("http://localhost:3333/api/journeys");
  return data;
};

export default function App() {
  // 2. O hook useQuery gerencia automaticamente o carregamento, erros e os dados.
  const {
    data: sessions,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["journeys"], queryFn: fetchJourneys });

  // Log para depuração: veja o que está no estado 'sessions'
  console.log({ isLoading, isError, sessions });

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
