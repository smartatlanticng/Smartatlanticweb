import "./insights.css";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import InsightsBg from "/title/insights.jpg";
import dayjs from "dayjs";
import Blogs from "../../data/insights.json";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";

function Insights() {
  const [selectedCategory, setSelectedCategories] = useState("");
  console.log("selectedCategory", selectedCategory);
  const categories = Array.from(new Set(Blogs.map((blog) => blog.category)));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const filterBlogs = selectedCategory
    ? Blogs.filter((blog) => blog.category === selectedCategory.value)
    : Blogs;

  return (
    <div>
      <Header />
      <PageTitle title="Insight" titleBg={InsightsBg} />
      <div className="insights">
        <div className="container">
          <h2 className="h2-title">Explore Our Latest Insights</h2>
          <div>
            <select
              options={categoryOptions}
              // isclearable
              placeholder="Select a category"
              onChange={(selectOption) => setSelectedCategories(selectOption)}
              value={selectedCategory}
            />
          </div>
          <div className="row">
            {filterBlogs &&
              filterBlogs.map((blog) => {
                return (
                  <div className="col-sm col-md-4" key={blog.id}>
                    <div className="card">
                      <div className="card-image">
                        <img src={blog.image} alt="{blog.title}" />
                        <div className="card-category">
                          <h5 className="category-text">{blog.category}</h5>
                        </div>
                      </div>
                      <div className="card-date">
                        <div className="card-date-top">
                          <div className="day">
                            {dayjs(blog.date).format("DD")}
                          </div>
                          <div className="myr">
                            {dayjs(blog.date).format("MMM, YY")}
                          </div>
                        </div>
                        <div className="triangle-topleft"></div>
                      </div>

                      <div className="card-info">
                        <Link to="/">
                          <h5>{blog.title}</h5>
                          <p>{blog.excerpt}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Insights;
