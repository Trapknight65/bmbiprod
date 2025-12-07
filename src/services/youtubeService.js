const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Bambi Visuals YouTube Channel ID
export const BAMBI_CHANNEL_ID = "UCW1HbhXjwXBrZEaq1XiyEpw";

export const fetchChannelVideos = async (channelId = BAMBI_CHANNEL_ID, maxResults = 6) => {
    if (!API_KEY) {
        console.warn('YouTube API Key is missing');
        return [];
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch videos');
        }

        const data = await response.json();

        return data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
        }));

    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return { error: error.message };
    }
};
