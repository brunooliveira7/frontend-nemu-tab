import { useMemo } from "react";
import {
  DataGrid,
  type GridInitialState,
  type GridColDef,
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export interface TouchPoint {
  channel: string;
  created_at: string | Date; 
}

export interface SessionData {
  sessionId: string;
  touchPoints: TouchPoint[];
}

interface GridRow {
  id: string;
  sessionId: string;
  journey: string;
  touchPointCount: number;
  channel: string;
  medium: string;
  campaign: string;
  content: string;
}

interface DataTableProps {
  data: SessionData[];
}

const columns: GridColDef[] = [
  {
    field: "journey",
    headerName: "Jornada",
    width: 400,
    groupable: false,
    headerAlign: "center",
  },
  {
    field: "touchPointCount",
    headerName: "Touch Points",
    type: "number",
    width: 150,
    groupable: false,
    headerAlign: "left",
  },
  { field: "medium", headerName: "Medium", width: 150, headerAlign: "left" },
  {
    field: "campaign",
    headerName: "Campaign",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "content",
    headerName: "Content",
    width: 150,
    headerAlign: "left",
  },
];

const useGridData = (sessions: SessionData[]): GridRow[] => {
  return useMemo(() => {
    return sessions.flatMap((session) => {
      const journeyString = session.touchPoints
        .map((tp) => tp.channel)
        .join(" > ");
      return session.touchPoints.map((touchPoint, index) => {
        const [medium = "N/A", campaign = "N/A", content = "N/A"] =
          touchPoint.channel.split("-");
        return {
          id: `${session.sessionId}-${index}`,
          sessionId: session.sessionId,
          journey: journeyString,
          touchPointCount: session.touchPoints.length,
          channel: touchPoint.channel,
          medium,
          campaign,
          content,
        };
      });
    });
  }, [sessions]);
};

export default function DataTable({ data }: DataTableProps) {
  const rows = useGridData(data);
  return (
    <Paper
      sx={{
        height: 600,
        width: "100%",
        justifyContent: "center",
        align: "right",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ }}
        initialState={
          {
            pagination: { paginationModel: { pageSize: 10 } },
          } satisfies GridInitialState
        }
        pageSizeOptions={[5, 10, 25]}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          },
          "& .MuiDataGrid-cell": {
            textAlign: "left",
            justifyContent: "flex-start",
          },
        }}
      />
    </Paper>
  );
}
