import {
  getCryptocurrencyDetails,
  getCryptoHistory,
} from "@/services/coinCap.services";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CryptoDetailsPage from "@/components/CryptoDetailsPage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const page = async ({ params }: { params: { id: string } }) => {
  const cryptoData = await getCryptocurrencyDetails(params.id);

  const cryptoHistory = await getCryptoHistory(params.id);

  const data = {
    labels: cryptoHistory.map((entry) =>
      new Date(entry.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: cryptoHistory.map((entry) => parseFloat(entry.priceUsd)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <CryptoDetailsPage
      id={params.id}
      cryptoData={cryptoData}
      cryptoHistory={data}
    />
  );
};

export default page;
