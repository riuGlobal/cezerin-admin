const clientUrl = process.env.REACT_APP_CLIENT_URL || 'http://localhost:3001';
const webSocket = process.env.REACT_APP_WEB_SOCKET || 'ws://localhost:3001';
// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `${clientUrl}/api/v1`,
	apiWebSocketUrl: `${webSocket}`,
	developerMode: true
};
