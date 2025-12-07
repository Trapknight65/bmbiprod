import React, { useEffect, useState } from 'react';
import { fetchChannelVideos } from '../services/youtubeService';

export default function VideoGallery({ channelId }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const loadVideos = async () => {
            if (channelId) {
                const fetchedVideos = await fetchChannelVideos(channelId);
                setVideos(fetchedVideos);
            }
            setLoading(false);
        };

        loadVideos();
    }, [channelId]);

    if (loading) return <div className="text-center text-fog/60 py-10">Loading videos...</div>;

    if (videos.length === 0) return null;

    return (
        <div className="py-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Latest Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedVideo(video.id)}
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-3 shimmer-effect border border-white/10 group-hover:border-gold/50 transition-all">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-red/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium line-clamp-2 group-hover:text-gold transition-colors">{video.title}</h3>
                        <p className="text-sm text-fog/60 mt-1">{new Date(video.publishedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedVideo(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
