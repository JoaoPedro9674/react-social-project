export default {
    // error: null,
    loading: false,
    postIds: [],
    posts: {},
    user: {
        authenticated: false,
        email: null,
        provider: null,
        id: null
    },
    settings: {
        email: null,
        profilePictureURL: '',
        newsletters: {
            updates: false,
            alerts: false
        }
    }
};
