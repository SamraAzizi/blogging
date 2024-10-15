import Image from "next/image";
import FormNewPost from "@/components/form-new-post";

export default async function Home() {
  
  return (
    <main className="max-w-4xl mx-auto my-5">
      <FormNewPost /> {/* Correct PascalCase usage */}
    </main>
  );
}
