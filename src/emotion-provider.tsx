import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

export default function EmotionProvider({ children }: { children: ReactNode }) {
  const cache = createEmotionCache();
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}