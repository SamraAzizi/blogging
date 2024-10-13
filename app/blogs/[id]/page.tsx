import Comments from "@/components/comments"; // Make sure this is the correct path
import FormComments from "@/components/form-comments";

const BlogDetailPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold">Post One</h1>
            <p>Written by: [Author Name]</p> {/* Replace with dynamic author name if needed */}
            <div className="mt-4">
                {/* Here you can add the post content or additional details */}
                <p>This is the content of the blog post.</p>
            </div>

            <Comments /> 
            <FormComments /> 
        </div>
    );
};

export default BlogDetailPage;
