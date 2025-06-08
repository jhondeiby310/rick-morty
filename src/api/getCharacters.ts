import axios from 'axios';
import { BASE_URL } from '@/constants';

/**
 * Get characters from the Rick and Morty API with optional filters.
 */
export const getCharacters = async (params?: { name?: string; species?: string }) => {
  const res = await axios.get(`${BASE_URL}/character`, {
    params,
  });
  return res.data.results;
};