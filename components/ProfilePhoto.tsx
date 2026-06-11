"use client";

import { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";

interface ProfilePhotoProps {
  className?: string;
}

export default function ProfilePhoto({ className = "" }: ProfilePhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the browser already has the image cached, onLoad won't fire — check on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      img.naturalWidth > 0 ? setLoaded(true) : setError(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {(!loaded || error) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/5">
          <User size={48} strokeWidth={1} className="text-white/20" />
          <span className="text-[9px] font-mono text-white/25 text-center px-3 uppercase tracking-[0.2em] leading-relaxed">
            drop your photo at<br />
            /public/profile.jpg
          </span>
        </div>
      )}
      {!error && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/profile.jpg"
          alt="Rachit Gandhi"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
