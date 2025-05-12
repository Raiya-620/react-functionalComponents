import BlogCard from "./components/Card";
import img from "./assets/Rectangle.png";
function App() {
  return (
    <>
      <div className="flex gap-2 justify-center items-center min-h-screen">
        <BlogCard
          title={"The future of technology is Healthcare"}
          summary={
            "Exploring how empowering technologies with AI and IoT are transforming patient care and medical research"
          }
          coverImage={img}
          tags={["Healthcare", "Healthcare", "Healthcare", "+1"]}
        />
        <BlogCard
          title={"The future of technology is Healthcare"}
          summary={
            "Exploring how empowering technologies with AI and IoT are transforming patient care and medical research"
          }
          coverImage={img}
          tags={["Healthcare", "Healthcare", "Healthcare", "+1"]}
        />
        <BlogCard
          title={"The future of technology is Healthcare"}
          summary={
            "Exploring how empowering technologies with AI and IoT are transforming patient care and medical research"
          }
          coverImage={img}
          tags={["Healthcare", "Healthcare", "Healthcare", "+1"]}
        />
      </div>
    </>
  );
}

export default App;
