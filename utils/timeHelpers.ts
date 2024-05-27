/**
 * Converts a movie duration in seconds into a human-readable format like "xh y min".
 *
 * @param durationInSeconds - The duration of the movie in seconds.
 * @returns A string representing the duration in the format "xh y min" (e.g., "2h 30min").
 *          If the duration is less than 60 seconds, it will simply be displayed as "0min".
 */
export function humanFriendlyMovieDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);

  let formattedDuration = "";
  if (hours > 0) {
    formattedDuration += `${hours}h `;
  }
  formattedDuration += `${minutes}min`;

  return formattedDuration;
}