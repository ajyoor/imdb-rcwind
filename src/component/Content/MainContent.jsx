import React from "react";

export const MainContent = () => {
  return (
    <div className="p-7">
      <span className="block w-full text-left text-2xl">Now Trending</span>
      <div className="pt-5 grid xl:grid-cols-3 sm:grid-cols-2 m-auto w-full gap-5 place-items-center">
        <div className="card xl:w-96 sm:w-auto bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* upcoming movies */}
      <span className="block w-full text-left text-2xl pt-5">
        Upcoming Movies
      </span>
      <div className="mt-5 carousel carousel-center rounded-box">
        <div className="carousel-item group/item h group/item relative">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Pizza"
            className="hover:opacity-20 w-full"
          />
          <div className="hidden group-hover/item:flex absolute flex-col gap-2 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <span className="text-yellow-300 italic text-sm">
              20 Oct 2024
            </span>
            <span className="text-3xl">Judul</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nihil aliquid minima expedita? Eum tempore tenetur, repellat
              repudiandae sequi harum ex quibusdam quas magnam nihil dolore
              facere atque veritatis sit.
            </span>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
          />
        </div>
      </div>
      {/* recommendation movies */}
      <span className="block w-full text-left text-2xl pt-5">
        Recommendation
      </span>
      <div className="pt-5 grid xl:grid-cols-3 sm:grid-cols-2 m-auto w-full gap-5 place-items-center">
        <div className="card xl:w-96 sm:w-auto bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
