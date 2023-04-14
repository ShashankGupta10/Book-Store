import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const App = ()=>{
    return (
      <>
        <Heading />
        <div className="AllBooks">
          <Books
            img="https://m.media-amazon.com/images/I/417fPoIPSTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Shashank's Biography"
            author="Shashank Gupta"
            price={400}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51nL8mRVtVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Shaggy's Autobiography"
            author="Shaggy Camillus Samuel"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/61RLgk2k-1L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Pranav's Autobiography"
            author="Pranav Patil"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51VfPmZt5yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Deep's Autobiography"
            author="Deep Prajapati"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/41VHgYCqnqL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Akshay's Autobiography"
            author="Akshay Rathod"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/41vmX4F35DL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Aryan's Autobiography"
            author="Aryan Singh"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51Dyzl8arAL._SY346_.jpg"
            title="Shreyas's Biography"
            author="Shreyas Dhamankar"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51Xfj-da+oL._SX258_BO1,204,203,200_.jpg"
            title="Shaunak's Biography"
            author="Shaunak Rananaware"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51vA-kBlkdL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Medhaj's Autobiography"
            author="Medhaj Sarang"
            price={200}
          />

          <Books
            img="https://m.media-amazon.com/images/I/51fZ-5PAgSL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Jainam's Autobiography"
            author="Jainam"
            price={200}
          />

          <Books
            img="https://m.media-amazon.com/images/I/41I4WFea6yL._SY346_.jpg"
            title="Mehak's Autobiography"
            author="Mehak Mehta"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/410klMB5-OL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Meetali's Biography"
            author="Meetali Kapse"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51xuD6F4LmL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Mamta's Autobiography"
            author="Mamta Gupta"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/41NWydAxHdL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Shagun's Autobiography"
            author="Shagun Gupta"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51HRZgi+8UL._SX258_BO1,204,203,200_.jpg"
            title="Sarthak's Biography"
            author="Sarthak Tanpure"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51HRZgi+8UL._SX258_BO1,204,203,200_.jpg"
            title="Sumil's Autobiography"
            author="Sumil Suthar"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/517vIwdPd0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Shrihari's Biography"
            author="Shrihari Sudevan"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51pE0oDjJUL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Ajay's Autobiography"
            author="Ajaykumar Maurya"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51uZ24-fnkL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            title="Surya's Autobiography"
            author="Surya ....."
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51EM9pVIldS._SY346_.jpg"
            title="Siddhant's Biography"
            author="Siddhant Dembi"
            price={200}
          />
          <Books
            img="https://m.media-amazon.com/images/I/51P+-7JEJdL._SY344_BO1,204,203,200_.jpg"
            title="Yash's Autobiography"
            author="Yash Khandelwal"
            price={200}
          />
        </div>
      </>
    );
}

const Heading = ()=>{
    return (
        <h1 className= "heading">Welcome to Shashank's Book Store !!!</h1>
    )
}


const Books = (props) =>{
    return (
    <section className="BookBox">

        <img src={props.img} />
        <h1>{props.title}</h1>
        <h1>{props.author}</h1>
        <h1>{props.price}</h1>

    </section>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

