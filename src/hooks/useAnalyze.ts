import { useQuery } from "@tanstack/react-query"
import type { AnalyzeResponse } from "../types/instagram"

const useAnalyze = (username: string) => {

  const getAnalyze = async (): Promise<AnalyzeResponse> => {
    const res = await fetch(`https://adverdict-worker.idshobedebot.workers.dev/analyze/${username}`);

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
  };

  return useQuery({
    queryKey: ['analyze', username],
    queryFn: getAnalyze
  })

}

export default useAnalyze