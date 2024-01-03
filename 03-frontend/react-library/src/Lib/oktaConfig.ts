export const oktaConfig = {
    clientId: '0oae95f5uoHGFB9eN5d7',
    issuer: 'https://dev-96824086.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['opendid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}