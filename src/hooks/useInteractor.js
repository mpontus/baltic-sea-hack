import { useCallback, useState } from "react";

export const useInteractor = callback => {
  const [isPending, setPending] = useState(false);
  const invoke = useCallback(
    async (...args) => {
      setPending(true);
      const result = await callback(...args);
      setPending(false);
      return result;
    },
    [callback]
  );

  return [isPending, invoke];
};
