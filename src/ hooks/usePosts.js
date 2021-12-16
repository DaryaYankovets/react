import { useMemo } from "react";

export const useSortedPosts = (posts, methodSort) => {
  const sortedPosts = useMemo(() => {
      if (methodSort) {
        return [...posts].sort((a, b) => a[methodSort].localeCompare(b[methodSort]));
      }
      return posts;
    }, [methodSort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, methodSort, searchPost) => {
  const sortedPosts = useSortedPosts(posts, methodSort);

  const sortedAndSearchPost = useMemo (() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchPost.toLowerCase()));
  }, [searchPost, sortedPosts]);

  return sortedAndSearchPost;
} 