import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
  friends: [];
  _id: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  location?: string;
  occupation?: string;
  viewedProfile?: string;
  impressions?: string;
};

export type PostType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  description: string;
  location: string;
  picturePath: string;
  userPicturePath: string;
  likes: {
    [key: string]: boolean;
  };
  comments: [];
};

export type initialStateType = {
  mode: "light" | "dark";
  currentLevel: string;
  user: UserType | null;
  token: string | null;
  posts: PostType[];
  tab: 0 | 1 | 2 | 3;
  level: {
    [key: string]: {
      [key: string]: boolean;
    };
  };
};

const initialState = {
  mode: "light",
  currentLevel: "",
  user: { friends: [], _id: "", picturePath: "", firstName: "", lastName: "" },
  token: null,
  posts: [],
  tab: 0,
  level: {
    Intro: {
      completed: false,
      spellingNinja: false,
      planetDefender: false,
    },
  },
} as initialStateType;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts as PostType[];
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setLevel: (state, action) => {
      if (state.level[action.payload.deckName]) {
        state.level[action.payload.deckName][action.payload.deckLevel] = true;
      }
      if (action.payload.deckLevel === "planetDefeder") {
        state.level[action.payload.deckName].completed = true;
      }
    },
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload;
    },
    setLevelCompleted: (state) => {
      state.level[state.currentLevel].completed = true;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
  setTab,
  setLevel,
  setCurrentLevel,
  setLevelCompleted,
} = authSlice.actions;
export default authSlice.reducer;
