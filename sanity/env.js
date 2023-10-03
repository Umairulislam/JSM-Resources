export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-09-26";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = false;
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  "Missing ENV: NEXT_PUBLIC_SANITY_TOKEN"
);

function assertValue(value, errorMessage) {
  if (value === undefined || value === null) {
    throw new Error(errorMessage);
  }
  return value;
}
