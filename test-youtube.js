const https = require('https');

const API_KEY = 'AIzaSyASGIKrMThsV27scWKriDneCxR4y0wy-cM';
const CHANNEL_ID = 'UCW1HbhXjwXBrZEaq1XiyEpw';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`;

console.log('Testing NEW YouTube API key...');
console.log(`Channel ID: ${CHANNEL_ID}\n`);

https.get(URL, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            if (parsedData.error) {
                console.error('❌ API Error:');
                console.error('  Code:', parsedData.error.code);
                console.error('  Message:', parsedData.error.message);
                console.error('  Status:', parsedData.error.status);
            } else if (parsedData.items) {
                console.log(`✅ SUCCESS! Found ${parsedData.items.length} videos\n`);
                if (parsedData.items.length > 0) {
                    console.log('First 3 videos:');
                    parsedData.items.slice(0, 3).forEach((item, i) => {
                        console.log(`  ${i + 1}. ${item.snippet.title}`);
                    });
                } else {
                    console.log('⚠️  Channel has no public videos');
                }
            } else {
                console.log('⚠️  Unexpected response:', JSON.stringify(parsedData, null, 2));
            }
        } catch (e) {
            console.error('❌ Parse Error:', e.message);
            console.log('Raw response:', data);
        }
    });
}).on('error', (err) => {
    console.error('❌ Network Error:', err.message);
});
