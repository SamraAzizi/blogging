
import { posts } from '@data/posts';

const BlogsPage = () =>{
    return (
    <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">
            Blogs</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         
        </div>

        {posts.map((post) =>(
            <a key ={post.id} href={`/blogs/${post.id}`} className='bg-white p-4 rounded-md shadow'>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <p>Written by: {post.username}</p>
            </a>
        ))}
        

    </div>
    );
};


export default BlogsPage;