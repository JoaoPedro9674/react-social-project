_3ef‍.e([["app",()=>app],["auth",()=>auth],["posts",()=>posts],["comments",()=>comments],["profile",()=>profile]]);const app = {
    LOADING: 'letters-social/app/loading',
    LOADED: 'letters-social/app/loaded'
};

const auth = {
    LOGIN: 'letters-social/auth/login',
    LOGOUT: 'letters-social/auth/logout'
};

const posts = {
    CREATE: 'letters-social/post/create',
    DELETE: 'letters-social/post/delete',
    UPDATE: 'letters-social/post/update',
    LOAD_MORE: 'letters-social/post/load_more',
    LIKE: 'letters-social/post/like'
};

const comments = {
    CREATE: 'letters-social/comment/create',
    DELETE: 'letters-social/comment/delete',
    UPDATE: 'letters-social/comment/update'
};

const profile = {
    UPDATE_EMAIL_PREFERENCES: 'letters-social/profile/update_email_preferences',
    UPDATE_EMAIL: 'letters-social/profile/update_email',
    UPDATE_PROFILE_PICTURE: 'letters-social/profile/update_profile_picture'
};
