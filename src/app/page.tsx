import { getCryptocurrencies } from "@/services/coinCap.services";
import HomePage from "@/components/HomePage";

const page = async () => {
  const cryptoList = await getCryptocurrencies();

  return <HomePage cryptoList={cryptoList} />;
};

export default page;
