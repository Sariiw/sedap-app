import axios from "axios";

const API_URL = "https://ikntakuewlwhuuqwwdjs.supabase.co/rest/v1/notes";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrbnRha3Vld2x3aHV1cXd3ZGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDkyMjUsImV4cCI6MjA2NDQ4NTIyNX0.-6RDvdxRbluw3FuHnbZAdqHW8WgmX4GuAXT2ZQ95mh4";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },
  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
