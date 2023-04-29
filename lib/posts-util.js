import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "posts");
export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
};

export function getPostData(fileName) {
    //slug will be postId in url
    const postSlug = fileName.replace(/\.md$/, '');
    //this will remove file extension .md
    //this will read the all conent of markdown file
    const filePath=path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const {data,content }= matter(fileContent)
    //this matter will return an object with 2 properties data:metadata and content:actual content
    const PostData = {
        slug: postSlug,
        ...data,
        content,
    }
    return PostData;
};

export function getAllPosts() {
    const postFiles = getPostsFiles()
    //this will return array of strings of posts in posts folder
    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
};
export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => {
        return post.isFeatured;
    })
    return featuredPosts;
}