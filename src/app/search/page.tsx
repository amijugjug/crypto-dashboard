import SearchPage from "@/components/SearchPage";
import { getCryptocurrencies } from "@/services/coinCap.services";

const page = async ({ searchParams }: { searchParams: string }) => {
  const cryptoList = await getCryptocurrencies();

  const filteredCryptoList = cryptoList.filter(
    (crypto) =>
      crypto.symbol
        .toLowerCase()
        .includes(searchParams?.query?.toLowerCase()) ||
      crypto.name.toLowerCase().includes(searchParams?.query?.toLowerCase())
  );

  return (
    <SearchPage
      cryptoList={searchParams?.query?.length > 0 ? filteredCryptoList : []}
      query={searchParams?.query}
    />
  );
};

export default page;
