import { FC } from "react";
import useFetch, { FetchResult } from "../hooks/useFetch";

interface ImageGridProps {
  title: string;
  queryString: string;
}

interface Image {
  download_url: string;
  id: string;
}

const ImageGrid: FC<ImageGridProps> = ({ title, queryString }) => {
  // Use FetchResult<Image[]> since the fetched data is an array of Image objects
  const { data, error, loading }: FetchResult<Image[]> = useFetch(
    `https://picsum.photos/v2/list?${queryString}`
  );

  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col">
        <h2 className="mb-8 text-2xl">{title}</h2>
        {loading && <p>Content loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && data && (
          <div className="grid grid-cols-4 gap-4">
            {data.map((img) => (
              <div className="block" key={img.id}>
                <img src={img.download_url} alt={`Image ${img.id}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
