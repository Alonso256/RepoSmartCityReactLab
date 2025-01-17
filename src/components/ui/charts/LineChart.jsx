import { useState, useEffect } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../../Loader";

const COLORS = {
  accidentes: "#14b8a6",
  multas: "#f43f5e",
  contaminacion: "#3b82f6",
};

export function LineChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [multas, accidentalidad, contaminacion] = await Promise.all([
          fetch("http://localhost:5000/multas").then((res) => res.json()),
          fetch("http://localhost:5000/accidentalidad").then((res) => res.json()),
          fetch("http://localhost:5000/contaminacion-acustica").then((res) => res.json()),
        ]);

        // Crear un mapa para combinar datos por mes
        const combinedDataMap = new Map();

        const addDataToMap = (source, key, valueKey, additionalFields = {}) => {
          source.forEach((item) => {
            const monthKey = item.month; // Usar mes como clave
            if (!combinedDataMap.has(monthKey)) {
              combinedDataMap.set(monthKey, { month: monthKey });
            }
            const entry = combinedDataMap.get(monthKey);
            entry[key] = item[valueKey] || 0; // Asignar el valor o usar 0 si está ausente

            // Agregar campos adicionales si se proporcionan
            Object.keys(additionalFields).forEach((fieldKey) => {
              entry[fieldKey] = item[additionalFields[fieldKey]] || 0;
            });
          });
        };

        // Combinar datos de cada endpoint
        addDataToMap(multas, "totalMultas", "totalFines", { avgPoints: "avgPoints" });
        addDataToMap(accidentalidad, "accidentes", "totalAccidents", {
          positiveAlcohol: "positiveAlcohol",
          positiveDrugs: "positiveDrugs",
        });
        addDataToMap(contaminacion, "avgLAeq24", "avgLAeq24");

        // Convertir el mapa a un arreglo, ordenar por mes, y limitar a los primeros 6 meses
        const combinedData = Array.from(combinedDataMap.values())
          .sort((a, b) => a.month - b.month)
          .filter((item) => item.month <= 6); // Limitar a los primeros 6 meses

        setChartData(combinedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const formatMonth = (month) => `${String(month).padStart(2, "0")}`;

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
        <div><strong>TRANQUILIDAD 🪷</strong></div>
      <RechartsLineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickFormatter={(value) => formatMonth(value)}
          label={{ value: "Mes", position: "insideBottomRight", offset: -5 }}
        />
        <Tooltip
          formatter={(value, name, props) => {
            const labels = {
              totalMultas: "Multas",
              accidentes: "Accidentes",
              avgLAeq24: "Nivel acústico (LAeq24)",
            };

            // Personalizar tooltip para accidentes
            if (name === "Accidentes") {
              return [
                `Accidentes: ${props.payload.accidentes || 0}, Positivos en alcohol: ${
                  props.payload.positiveAlcohol || 0
                }, Positivos en drogas: ${props.payload.positiveDrugs || 0}`,
                "Accidentes",
              ];
            }

            // Personalizar tooltip para multas
            if (name === "Multas") {
              return [
                `Multas: ${props.payload.totalMultas || 0}, Media de puntos retirados: ${
                  props.payload.avgPoints || 0
                }`,
                "Multas",
              ];
            }

            return [`${value}`, labels[name]];
          }}
          labelFormatter={(label) => `Mes: ${formatMonth(label)}`}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="accidentes"
          stroke={COLORS.accidentes}
          strokeWidth={2}
          dot={false}
          name="Accidentes"
        />
        <Line
          type="monotone"
          dataKey="totalMultas"
          stroke={COLORS.multas}
          strokeWidth={2}
          dot={false}
          name="Multas"
        />
        <Line
          type="monotone"
          dataKey="avgLAeq24"
          stroke={COLORS.contaminacion}
          strokeWidth={2}
          dot={false}
          name="Contaminación acústica (LAeq24)"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
