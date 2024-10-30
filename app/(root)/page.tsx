import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: 'Yesterday',
      views: 55,
      auther: {_id: 2},
      _id: 2,
      description: "this is description",
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-robot-white-with-green-cute-robot-fantasy-scene-image_2199816.jpg',
      category: "Robots",
      title: "we Robots"
    }
  ]
  return (
  <>
   <section className="pink_container">
    <h1 className="heading">Pitch Your Startup, <br /> Connect With Developers</h1>
    <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
    <SearchForm query={query}/>
   </section>
   <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"` : 'All Startups'}
    </p>
    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        // @ts-ignore
        posts.map((post: StartupTypeCard, index: number) => (
          <StartupCard key={post?._id} post={post}/>
        ))
      ): (
        <p className="no-results">No startups found</p>
      )}
    </ul>
   </section>
   </>
  );
}
