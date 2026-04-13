import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollAndFocus(ref, targetId) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === targetId) {
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView();

        ref?.current?.focus();
      }, 300);
    }
  }, [hash, ref, targetId]);
}