import Post from "../model/postSchema.js";

// Cursor-based pagination (for infinite scroll) & limit/offset pagination (for normal pagination)
export const getAllPosts = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10; // Default limit
  const cursor = req.query.cursor || null; // Cursor for infinite scroll
  const page = parseInt(req.query.page) || 0; // Page number for numbered pagination

  try {
    let posts;

    if (cursor) {
      // For infinite scrolling: Fetch posts after the cursor (assume cursor is the post ID)
      posts = await Post.find({ _id: { $gt: cursor } })
        .sort({ createdAt: -1 }) // Sort by ID ascending
        .limit(limit);
    } else {
      // For normal pagination: Skip to the offset and fetch the next set of posts
      posts = await Post.find()
        .skip(page * limit)
        .limit(limit)
        .sort({ createdAt: -1 }); // Sort by creation date descending
    }

    const nextCursor = posts.length ? posts[posts.length - 1]._id : null;
    const hasMore = posts.length === limit; // If we fetched full limit, there are more posts

    res.status(200).json({
      success: true,
      posts,
      nextCursor, // For infinite scroll
      hasMore, // For both infinite scroll and pagination
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};
