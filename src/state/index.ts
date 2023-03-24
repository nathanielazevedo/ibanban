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
  user: UserType | null;
  token: string | null;
  posts: PostType[];
};

const initialState = {
  mode: "light",
  user: { friends: [], _id: "", picturePath: "", firstName: "", lastName: "" },
  token: null,
  posts: [],
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
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
