import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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
  multas: "#f43f5e",
  accidentalidad: "#14b8a6",
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
          fetch("http://localhost:5000/tranquilidad/multas").then((res) => res.json()),
          fetch("http://localhost:5000/tranquilidad/accidentalidad").then((res) => res.json()),
          fetch("http://localhost:5000/tranquilidad/contaminacion-acustica").then((res) => res.json()),
        ]);

        // Combinar datos por mes y año
        const combinedData = [];
        const mergeData = (source, key, valueKey) => {
          source.forEach((item) => {
            const existing = combinedData.find(
              (d) => d.month === item.month && d.year === item.year
            );
            if (existing) {
              existing[key] = item[valueKey];
            } else {
              combinedData.push({
                month: item.month,
                year: item.year,
                [key]: item[valueKey],
              });
            }
          });
        };

        mergeData(multas, "avgPoints", "avgPoints");
        mergeData(accidentalidad, "positiveAlcohol", "positiveAlcohol");
        mergeData(accidentalidad, "positiveDrugs", "positiveDrugs");
        mergeData(contaminacion, "avgLAeq24", "avgLAeq24");

        // Ordenar por año y mes
        combinedData.sort((a, b) => (a.year - b.year || a.month - b.month));
        setChartData(combinedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const formatMonth = (month, year) => `${year}-${String(month).padStart(2, "0")}`;

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (

        <ResponsiveContainer width="100%" height={400}>
          <RechartsLineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={(item) => formatMonth(item.month, item.year)}
              tickFormatter={(value) => value}
            />
            <Popup
              formatter={(value, name) => {
                const labels = {
                  avgPoints: "Puntos retirados (media)",
                  positiveAlcohol: "Positivos en alcohol",
                  positiveDrugs: "Positivos en drogas",
                  avgLAeq24: "Nivel acústico (LAeq24)",
                };
                return [`${value}`, labels[name]];
              }}
              labelFormatter={(label) => `Mes: ${label}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="avgPoints"
              stroke={COLORS.multas}
              strokeWidth={2}
              dot={false}
              name="Puntos retirados (media)"
            />
            <Line
              type="monotone"
              dataKey="positiveAlcohol"
              stroke={COLORS.accidentalidad}
              strokeWidth={2}
              dot={false}
              name="Positivos en alcohol"
            />
            <Line
              type="monotone"
              dataKey="positiveDrugs"
              stroke={COLORS.accidentalidad}
              strokeWidth={2}
              dot={false}
              name="Positivos en drogas"
            />
            <Line
              type="monotone"
              dataKey="avgLAeq24"
              stroke={COLORS.contaminacion}
              strokeWidth={2}
              dot={false}
              name="Nivel acústico (LAeq24)"
            />
          </RechartsLineChart>
        </ResponsiveContainer>

  );
}
