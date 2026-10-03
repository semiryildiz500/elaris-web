"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Next.js App Router'da <html lang> yalnızca kök layout'ta tanımlanabilir.
 * TR ("/") ve EN ("/en") aynı kök layout'u paylaştığından, doğru dil
 * etiketini yansıtmak için istemcide document.documentElement.lang
 * güncellenir.
 */
export default function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
