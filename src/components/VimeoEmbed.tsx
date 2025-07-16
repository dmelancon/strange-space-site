import React from 'react';

interface VimeoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, title = "Vimeo video", className = "" }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          // src={`https://player.vimeo.com/video/${videoId}?h=autoplay=0&title=0&byline=0&portrait=0`}
          src={`src\\assets\\Strange.Space_LandingVideo_v02.mp4`}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow=" fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VimeoEmbed; 