import Image from 'next/image';
import { Heebo } from "next/font/google";
const heebo = Heebo({subsets:["latin"]})

const FeaturedWorks = () => {
  return (
    <div className="container mx-auto px-4 py-8 w-[919px]">
      <h2 className="text-2xl font-bold mb-6 ml-5">Featured Works</h2>
      <div className="space-y-6 ">
        {/* Item Start */}
        {[
          {
            imgSrc: '/assets/featuredimg1.png', // Replace with real paths
            title: 'Designing Dashboards',
            year: '2020',
            category: 'Dashboard',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
          {
            imgSrc: '/assets/featuredimg2.png',
            title: 'Designing Dashboards',
            year: '2020',
            category: 'Dashboard',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
          {
            imgSrc: '/assets/featuredimg3.png',
            title: 'Designing Dashboards',
            year: '2020',
            category: 'Dashboard',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-4 "
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={246}
                height={184}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-2/3 w-[623.46px]">
              <h3 className={`${heebo.className} text-lg font-bold text-[30px]`}>{item.title}</h3>
              <div className={`text-sm flex items-center space-x-2 mt-5`}>
                <span className={`${heebo.className} bg-myPink text-white py-1 px-2 rounded-full h-[24px]`}>{item.year}</span>
                <span className={`${heebo.className} text-gray-500 text-[20px]`}>{item.category}</span>
              </div>
              <p className={`${heebo.className} text-gray-700 mt-5 text-[18px]`}>{item.description}</p>
            </div>
          </div>
        ))}
        {/* Item End */}
      </div>
    </div>
  );
};

export default FeaturedWorks;
