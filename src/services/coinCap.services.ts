import axios from "axios";
import { Cryptocurrency } from "../interfaces/Crypto";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  const response = await axios.get(`${API_URL}/assets`);
  return response.data.data;
};

export const getCryptocurrencyDetails = async (
  id: string
): Promise<Cryptocurrency> => {
  const response = await axios.get(`${API_URL}/assets/${id}`);
  return response.data.data;
};

export const getCryptoHistory = async (
  id: string
): Promise<{ date: string; priceUsd: string }[]> => {
  const response = await fetch(
    `${API_URL}/assets/${id}/history?interval=d1`
  );
  const data = await response.json();
  return data.data;
};
