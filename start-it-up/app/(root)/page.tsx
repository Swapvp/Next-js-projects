
import SearchForm from "../../components/SearchForm"

export default async function Home({searchParams}:{searchParams: Promise<{ query?: string}>}) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">

      <h1 className="heading"> Submit Your Start up <br /> Connect With Entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">Submit ideas, Vote on Start ups, and Get Noticed</p>

    <SearchForm/>
    </section>
    </>
  );
}
