import { BACKEND } from '$env/static/private';

export const load = async () => {
    try {
      const res = await fetch("http://service-staging.pfs360llc.com/v1/clients");
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return {
        clients: data,
      };
    } catch (error) {
      console.error("Error in load function:", error);
      return { clients: [] }; // Return an empty array to prevent errors in rendering
    }
  };