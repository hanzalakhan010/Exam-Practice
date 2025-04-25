// Section B - Q1: Type-Safe Blog Post API

type Tag = "tech" | "news" | "life";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: Tag[];
}
let blogs: BlogPost[] = [];

class Blogs {
  blogs: BlogPost[];
  constructor(blogs: BlogPost[]) {
    this.blogs = blogs;
  }
  addPost(post: BlogPost): BlogPost[] {
    this.blogs.push(post);
    return this.blogs;
  }
  removePost(id: number) {
    this.blogs = this.blogs.filter((blog) => blog.id != id);
    return this.blogs;
  }
  findPost(id: number) {
    let blog = this.blogs.find((blog) => blog.id == id);
    if (!blog) {
      return `Post not found`;
    }
    return blog;
  }
  filterByTag(tag: Tag) {
    let blogs = this.blogs.filter((blog) => blog.tags.includes(tag));
    return blogs;
  }
}

// Example usage:
// createBlogPost({ id: 1, title: "TS is great", content: "Typed safety rocks!", tags: ["tech"] });
