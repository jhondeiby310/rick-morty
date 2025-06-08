import axios from 'axios';
import { BASE_URL } from '@/constants';

/**
 * Get a character by its ID from the Rick and Morty API.
 */
export const getCharacterById = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/character/${id}`);
  return res.data;
};