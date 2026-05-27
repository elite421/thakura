'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

export function FloatingVideo() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the user has already closed the video in this session
    const isClosed = sessionStorage.getItem('floating-video-dismissed');
    if (isClosed === 'true') {
      setIsOpen(false);
    }
  }, []);

  // Ensure video plays when state is open
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay blocked or video error:', err);
      });
    }
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    sessionStorage.setItem('floating-video-dismissed', 'true');
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`floating-video-wrapper ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleMute}
      title="Click to toggle audio"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src="/Tharkula%20limted.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="floating-video-player"
      />

      {/* Video Overlay / Header */}
      <div className="floating-video-overlay">
        <span className="floating-video-badge">
          <span className="live-dot" />
          Preview
        </span>
        <div className="floating-video-actions">
          <button
            onClick={toggleExpand}
            className="floating-video-btn"
            title={isExpanded ? 'Collapse' : 'Expand'}
            aria-label={isExpanded ? 'Collapse video' : 'Expand video'}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            onClick={toggleMute}
            className="floating-video-btn"
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
          <button
            onClick={handleClose}
            className="floating-video-btn close-btn"
            title="Dismiss"
            aria-label="Dismiss video"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="floating-video-info">
        <span className="info-title">Thakura Infratech</span>
        <span className="info-sub">{isMuted ? 'Tap for Sound' : 'Audio On'}</span>
      </div>
    </div>
  );
}
