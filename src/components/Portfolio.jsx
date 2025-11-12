import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import video files
import v1 from '../assets/AMB videos/v1.mp4';
import v2 from '../assets/AMB videos/v2.mp4';
import v3 from '../assets/AMB videos/v3.mp4';
import v4 from '../assets/AMB videos/v4.mp4';
import v5 from '../assets/AMB videos/v5.mp4';
import v6 from '../assets/AMB videos/v6.mp4';
import v7 from '../assets/AMB videos/v7.mp4';
import v8 from '../assets/AMB videos/v8.mp4';
import v9 from '../assets/AMB videos/v9.mp4';
import v10 from '../assets/AMB videos/v10.mp4';
import v11 from '../assets/AMB videos/v11.mp4';
import v12 from '../assets/AMB videos/v12.mp4';
import v13 from '../assets/AMB videos/v13.mp4';

const allVideos = [
  { id: 1, src: v1, title: 'Before & After #1' },
  { id: 2, src: v2, title: 'Before & After #2' },
  { id: 3, src: v3, title: 'Before & After #3' },
  { id: 4, src: v4, title: 'Before & After #4' },
  { id: 5, src: v5, title: 'Before & After #5' },
  { id: 6, src: v6, title: 'Before & After #6' },
  { id: 7, src: v7, title: 'Before & After #7' },
  { id: 8, src: v8, title: 'Before & After #8' },
  { id: 9, src: v9, title: 'Before & After #9' },
  { id: 10, src: v10, title: 'Before & After #10' },
  { id: 11, src: v11, title: 'Before & After #11' },
  { id: 12, src: v12, title: 'Before & After #12' },
  { id: 13, src: v13, title: 'Before & After #13' },
];

const Portfolio = ({ videos = allVideos, showTitle = true, limit = null }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const displayVideos = limit ? videos.slice(0, limit) : videos;

  const openVideo = (video, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    // Save current scroll position
    scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    
    // Prevent body scroll - lock position without moving viewport
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const navigateVideo = (direction) => {
    if (!selectedVideo) return;
    
    const currentIndex = displayVideos.findIndex(v => v.id === selectedVideo.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : displayVideos.length - 1;
    } else {
      newIndex = currentIndex < displayVideos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedVideo(displayVideos[newIndex]);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const closeVideo = () => {
    // Pause and reset video
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    
    // Restore body scroll and position FIRST
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    
    // Restore scroll position
    const scrollPosition = scrollY ? parseInt(scrollY.replace('px', '')) * -1 : scrollPositionRef.current;
    window.scrollTo(0, scrollPosition);
    
    // Clear state after restoring scroll
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Cleanup: restore body scroll on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  // Handle video playback when modal opens
  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      // Small delay to ensure video element is fully mounted
      const timer = setTimeout(() => {
        const playVideo = async () => {
          try {
            // Try to play the video
            videoRef.current.currentTime = 0;
            await videoRef.current.play();
            setIsPlaying(true);
          } catch (err) {
            console.log('Video autoplay prevented:', err);
            // Some browsers require user interaction for autoplay
            // The user can manually click play if needed
          }
        };
        playVideo();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [selectedVideo]);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Before & After Transformations
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVideos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={(e) => openVideo(video, e)}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-200"
              aria-label={`Play ${video.title}`}
            >
              <div className="relative aspect-video w-full">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{video.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedVideo && createPortal(
          <div
            className="fixed z-[9999] bg-black/80 backdrop-blur-sm"
            onClick={closeVideo}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1rem',
              overflow: 'auto',
              zIndex: 9999,
              margin: 0
            }}
          >
            <div
              className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                position: 'relative'
              }}
            >
              <div 
                className="w-full bg-gray-900 flex items-center justify-center relative"
                style={{ 
                  aspectRatio: '16/9',
                  maxHeight: '80vh',
                  minHeight: '400px'
                }}
              >
                <video
                  ref={videoRef}
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-t-xl"
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block'
                  }}
                  onPlay={() => {
                    setIsPlaying(true);
                  }}
                  onPause={() => setIsPlaying(false)}
                  onLoadedData={() => {
                    if (videoRef.current) {
                      videoRef.current.play().catch((err) => {
                        console.log('Video autoplay error:', err);
                      });
                    }
                  }}
                  onCanPlay={() => {
                    // Try to play when video can start playing
                    if (videoRef.current && videoRef.current.paused) {
                      videoRef.current.play().catch((err) => {
                        console.log('Video autoplay on canPlay error:', err);
                      });
                    }
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Navigation buttons at bottom */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateVideo('prev');
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Prev
                </button>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeVideo();
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  aria-label="Close video"
                >
                  Close
                </button>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateVideo('next');
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  aria-label="Next video"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Portfolio;
export { allVideos };
