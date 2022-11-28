import React from "react";
import PhotoAlbum from "react-photo-album";
const Gallery = () => {
  const photos = [
    {
      src: "https://content.jdmagicbox.com/comp/amravati/d2/9999px721.x721.220908154649.i6d2/catalogue/couch-puffy-nandgaon-peth-amravati-furniture-dealers-iinyw1xagp.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6x7zEA4U7_fAd_qs4m86Xgokd9Hn34teLwQ&usqp=CAU",
      width: 1600,
      height: 900,
    },
    {
      src: "https://images.ctfassets.net/5de70he6op10/2HQTZ9clc4AnFjAkBr1MhZ/8577afad514b484edc28d6953e19a729/Furniture_Gateway_02.jpg?w=856&q=80&fm=jpg&fl=progressive",
      width: 800,
      height: 600,
    },
    {
      src: "https://res.cloudinary.com/dbiz6wppa/image/upload/w_494,c_limit,f_auto,q_auto/hp-image-2.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1613645764/131613645763383.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "https://www.pattardkitchen.com/wp-content/uploads/2022/07/61.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "https://www.thejoinery.com/sites/default/files/styles/full_slide/public/slides/Shakerkentonset.jpg?itok=RenyjBss",
      width: 800,
      height: 600,
    },
    {
      src: "https://www.weknowboise.com/uploads/shared/images/blog/best-boise-furniture-home-decor-stores.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15700878770.jpeg",
      width: 1600,
      height: 900,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI318cEULGFw_InZoqJdu6vub_QbRf1jzWrdQM122v9z8mlsrh5a2rT9yzizUYwnBGUAA&usqp=CAU",
      width: 1600,
      height: 900,
    },
  ];
  return (
    <section className="pb-12 border-b border-gray-300 pt-5 object-cover">
      <h1 className="sm:text-3xl text-xl font-semibold pl-4 pb-6 ">Gallery</h1>

      <PhotoAlbum layout="columns" photos={photos} />
    </section>
  );
};

export default Gallery;
