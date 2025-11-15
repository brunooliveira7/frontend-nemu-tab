import { useMemo } from "react";
import {
  DataGrid,
  type GridColDef,
  type GridColumnGroupingModel,
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

// Tipos para os dados da API
export interface TouchPoint {
  channel: string;
  created_at: string;
}

export interface SessionData {
  sessionId: string;
  touchPoints: TouchPoint[];
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

const initialGroupingModel: GridColumnGroupingModel = [
  { groupId: "medium", children: [{ field: "medium" }] },
  { groupId: "campaign", children: [{ field: "campaign" }] },
];

export default function DataTable({ data }: DataTableProps) {
  const rows = useMemo(
    () =>
      data.flatMap((session) =>
        session.touchPoints.map((touchPoint, index) => {
          const parts = touchPoint.channel.split("-");
          return {
            id: `${session.sessionId}-${index}`,
            sessionId: session.sessionId,
            journey: session.touchPoints.map((tp) => tp.channel).join(" > "),
            touchPointCount: session.touchPoints.length,
            channel: touchPoint.channel,
            medium: parts[0] || "N/A",
            campaign: parts[1] || "N/A",
            content: parts[2] || "N/A",
          };
        })
      ),
    [data]
  );

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
        experimentalFeatures={{ rowGrouping: true } as any}
        initialState={
          {
            rowGrouping: {
              model: initialGroupingModel,
            },
            pagination: { paginationModel: { pageSize: 10 } },
          } as any
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
