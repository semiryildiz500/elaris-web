"use client";

import { useRef, useState } from "react";

/**
 * Hazır altyapı: ileride /public/audio/ambient.mp3 (hafif piyano + yağmur)
 * eklendiğinde bu bileşen layout'a dahil edilerek kullanılabilir.
 * Şu an gerçek ses dosyası olmadığı için bu bileşen sayfada render edilmiyor.
 */
const AMBIENT_SRC = "/audio/ambient.mp3";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      void audio.play().catch(() => {});
    }
    setPlaying((v) => !v);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={AMBIENT_SRC} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Ambiyans sesini kapat" : "Ambiyans sesini aç"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/90 text-gold shadow-sm backdrop-blur transition-colors hover:bg-gold hover:text-cream"
      >
        {playing ? "⏸" : "♪"}
      </button>
    </div>
  );
}
