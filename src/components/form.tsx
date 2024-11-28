import { createPost } from "@/actions/actions";

export default function Form() {
  return (
    <form className="flex flex-col gap-2 my-10 max-w-[400px] mx-auto"
            action={createPost} >
                
            <input className="border rounded px-3 h-full"
                type="text"
                name="title"
                placeholder="Title for new post"
                required
            />

            <textarea
                name="body"
                placeholder="Body content for new post"
                className="border rounded px-3 py-2"
                rows={6}
                required
            />

            <button className="bg-blue-500 text-white rounded px-5 h-10">Submit</button>
        </form>
  )
}
