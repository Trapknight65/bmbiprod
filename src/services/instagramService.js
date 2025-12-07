const ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
const BASE_URL = 'https://graph.instagram.com/me/media';

export const fetchInstagramMedia = async (limit = 6) => {
    if (!ACCESS_TOKEN) {
        console.warn('Instagram Access Token is missing');
        return [];
    }

    try {
        const response = await fetch(
            `${BASE_URL}?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}&limit=${limit}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch Instagram media');
        }

        const data = await response.json();
        return data.data.map(item => ({
            id: item.id,
            caption: item.caption,
            mediaType: item.media_type,
            mediaUrl: item.media_url,
            thumbnailUrl: item.thumbnail_url || item.media_url, // thumbnail_url is only for VIDEO
            permalink: item.permalink,
        }));
    } catch (error) {
        console.error('Error fetching Instagram media:', error);
        return [];
    }
};
