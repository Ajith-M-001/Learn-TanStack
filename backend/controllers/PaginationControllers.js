import Post from "../model/postSchema.js";

const getPaginatedPosts = async (skip, limit) => {
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalPosts = await Post.countDocuments();
  const totalPages = Math.ceil(totalPosts / limit);

  return { posts, totalPosts, totalPages };
};

export const getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const { posts, totalPosts, totalPages } = await getPaginatedPosts(
      skip,
      limit
    );

    res.status(200).json({
      success: true,
      data: posts,
      currentPage: page,
      totalPages,
      totalPosts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
    });
  }
};
