// Importing the client from next-sanity
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, } from '../env'; // Assuming these are set up correctly

export const client = createClient({
  projectId: projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1qmwrewk',
  dataset: dataset || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: apiVersion || '2023-01-01',  // Update if a different version is required
  useCdn: true,  // Set to false if statically generating pages
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,  // Use if needed for server-side operations
});

export default client;
