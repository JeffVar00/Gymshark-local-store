import React from "react";
import Image from "next/image";

// Your Product Page Component
const ProductPage = async ({ params }) => {
  const { id } = params;

  const product = {
    id: 4,
    title: "Contour Heart Seamless Tank",
    desc: "Black/Asphalt Grey",
    imgs: [
      "/clothexample5.avif",
      "/clothexample5.avif",
      "/clothexample5.avif",
      "/clothexample5.avif",
      "/clothexample5.avif",
    ],
    price: 55,
    availableSizes: ["XS", "S", "M", "XL", "L", "XXL", "3XL"],
    relatedProducts: [
      { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
      { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
    ],
  };

  const relatedProducts = [
    {
      id: 4,
      title: "Contour Heart Seamless Tank",
      desc: "Black/Asphalt Grey",
      imgs: [
        "/clothexample1.jpg",
        "/clothexample2.jpg",
        "/clothexample3.jpg",
        "/clothexample4.jpg",
        "/clothexample5.jpg",
      ],
      price: 55,
      availableSizes: ["XS", "S", "M", "XL", "L", "XXL", "3XL"],
      relatedProducts: [
        { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
        { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
      ],
    },
    {
      id: 4,
      title: "Contour Heart Seamless Tank",
      desc: "Black/Asphalt Grey",
      imgs: [
        "/clothexample1.jpg",
        "/clothexample2.jpg",
        "/clothexample3.jpg",
        "/clothexample4.jpg",
        "/clothexample5.jpg",
      ],
      price: 55,
      availableSizes: ["XS", "S", "M", "XL", "L", "XXL", "3XL"],
      relatedProducts: [
        { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
        { title: "Contour Heart Seamless Tank", image: "/clothexample6.jpg" },
      ],
    },
  ];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:pr-4 pt-8 md:pt-16">
      {/* Left Section - Image Grid */}
      <div className="w-full md:w-1/2 xl:w-5/6 h-screen overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {product.imgs.length > 0 ? (
            product.imgs.map((image, index) => (
              <div
                key={index}
                className={`w-full h-[120vw] relative ${
                  (index + 1) % 3 === 0
                    ? "md:col-span-2 xl:h-[73vw] md:h-[59vw]"
                    : "xl:h-[36vw] md:h-[30vw]"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  fill="responsive"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
              {/* Placeholder for no image */}
              <span className="text-webprimary">No Image</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex flex-col lg:w-1/2 lg:pl-8 items-center ">
        <h1 className="text-xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-red-500 mb-4">
          <span className="line-through text-gray-500">${product.price}</span>
        </p>

        {/* Related Products */}
        <div className="flex">
          {product.relatedProducts.map((relatedProduct, index) => (
            <div key={index} className="w-16 h-16 relative ">
              <Image
                src={relatedProduct.image}
                alt={relatedProduct.title}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <p className="mb-4 text-gray-500 ">{product.desc}</p>

        {/* Size Selector */}
        <div className=" flex flex-col mb-4 text-start ">
          <label className="block mb-2 text-sm font-medium text-gray-700 ml-2">
            Select a size
          </label>

          <div className="flex gap-2 border-2 rounded-xl border-gray-200 items-center text-center justify-center">
            {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
              <button
                key={size}
                className={`flex items-center justify-center w-10 my-1 p-3 text-xs e rounded-sm border-webprimary ${
                  product.availableSizes.includes(size)
                    ? "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!product.availableSizes.includes(size)}
              >
                <span>{size}</span>
              </button>
            ))}
          </div>

          <button className="py-3 bg-webprimary text-websecundary font-bold rounded-lg mb-6">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
