"use strict";
// Section B - Q1: Type-Safe Blog Post API
let blogs = [];
class Blogs {
    constructor(blogs) {
        this.blogs = blogs;
    }
    addPost(post) {
        this.blogs.push(post);
        return this.blogs;
    }
    removePost(id) {
        this.blogs = this.blogs.filter((blog) => blog.id != id);
        return this.blogs;
    }
    findPost(id) {
        let blog = this.blogs.find((blog) => blog.id == id);
        if (!blog) {
            return `Post not found`;
        }
        return blog;
    }
    filterByTag(tag) {
        let blogs = this.blogs.filter((blog) => blog.tags.includes(tag));
        return blogs;
    }
}
// Example usage:
// createBlogPost({ id: 1, title: "TS is great", content: "Typed safety rocks!", tags: ["tech"] });
