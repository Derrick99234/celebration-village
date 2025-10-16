import About from "@/components/home-page/aboutPage";
import CustomerTestimonials from "@/components/home-page/CustomerTestimonials";
import WhyChooseUs from "@/components/home-page/WhyChooseUs";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  // const images = [
  //   "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg", // Make sure to put your images in the public folder
  //   "https://cdn.pixabay.com/photo/2013/09/05/10/38/catering-179046_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg",
  //   // "https://cdn.pixabay.com/photo/2024/08/06/10/43/wine-8949009_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2019/12/19/09/07/deco-4705709_1280.jpg",
  // ];
  const slides = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      h1: "Where Every Moment Becomes a Masterpiece",
      text: "Welcome to Celebration Village, a place where every event is crafted with love, elegance, and creativity. From intimate gatherings to grand celebrations, we design unforgettable moments that leave a lasting impression. Let us bring your vision to life with passion, tradition, and attention to every detail.",
      ctaText: "Book Your Consultation",
      ctaLink: "/book-event",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2013/09/05/10/38/catering-179046_1280.jpg",
      h1: "Your Dream Event, Our Passionate Craft",
      text: "At Celebration Village, we believe in transforming each celebration into a timeless experience. Our team of passionate creators works with you to design, plan, and execute every detail with grace. Experience a celebration beyond your imagination, where every moment tells a story of connection, joy, and celebration.",
      ctaText: "Start Planning",
      ctaLink: "/plan-event",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg",
      h1: "Elegance in Every Detail, Joy in Every Moment",
      text: "Step into Celebration Village, where your special occasion is more than just an event—it's a journey of emotions, culture, and togetherness. From the first idea to the final flourish, we create personalized celebrations filled with heart and creativity, designed to reflect your unique story and vision.",
      ctaText: "Book Your Consultation",
      ctaLink: "/book-event",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2019/12/19/09/07/deco-4705709_1280.jpg",
      h1: "Creating Timeless Memories, One Celebration at a Time",
      text: "At Celebration Village, we understand that the most important part of any celebration is the connection it fosters. Whether it's the beauty of shared traditions or the excitement of new beginnings, we deliver a seamless event experience that feels both personal and extraordinary. Let us guide you through every step of crafting a day that will be remembered forever.",
      ctaText: "Book Your Consultation",
      ctaLink: "/book-event",
    },
  ];
  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
        <ImageSlider content={slides} />
      </div>
      <About />
      <WhyChooseUs />
      <CustomerTestimonials />
    </>
  );
}
