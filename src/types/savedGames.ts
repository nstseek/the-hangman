/**
 * This interface defines what we are going to save in our localStorage
 */
interface SavedGames {
  date: string;
  errors: number;
  finished: boolean;
  word: string;
}

export default SavedGames;
