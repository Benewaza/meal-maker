import { FC, useEffect, useState } from "react";

interface ImageGridProps {
  title: string;
}

interface Image {
  download_url: string;
  id: string;
}

const ImageGrid: FC<ImageGridProps> = ({ title }) => {
  const [randomImages, setRandomImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=4").then((response) =>
      response.json().then((data) => {
        setRandomImages(data);
      })
    );
  }, []);

  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col">
        <h2 className="mb-8 text-2xl">{title}</h2>
        <div className="grid grid-cols-4 gap-4">
          {randomImages.map((img) => {
            return (
              <div className="block" key={img.id}>
                <img src={img.download_url} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
