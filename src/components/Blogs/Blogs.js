import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='blogs'>
      <h2>Question No 1 : What is context API ?</h2>
      <p>

        <big className='green'>Ans : </big> context API হল global variables তৈরি  করার উপায় যা  component tree এর চারপাশে পাস করা যেতে পারে। এটি prop drilling এর সমাধানে অনেক সহায়তা করে। context api তৈরি করতে হয় .createContext(); দিয়ে। এবং এই context api  আমাদের দুইটা component  দিয়ে দেয়। একটি হল Context.Provider আরেকটি হল Context.Consumer</p>
      <h2>Question No 2 : What is Semantic Tag?</h2>
      <p> <big className='green'>Ans : </big> Semantic tag  হল  যেই tag এর meaningful name  থাকে। অর্থাৎ এক একটা section  এর জন্য  meaningful tag তৈরি করা আছে।  এই গুলোকেই html এর semantic tag বলা হয়। semantic tag ব্যবহার করা হয় মূলত ওয়েব পেইজের  বিভিন্ন  অংশ কে meaningful  রাখার জন্য। উদাহরণ : header,  nav, section,  aside, article,  footer.</p>

      <h2>Question No 3 : Difference between inline and block elements ?</h2>
      <big className='green'>Ans : </big>
      <h3>Inline Elements</h3>

      <p>&bull; An inline element does not start on a new line.</p>
      <p>&bull; An inline element only takes up as much width as necessary.</p>
      <p>&bull;উদাহরণ : a, span, big, img, br, input,button </p>


      <h3>Block Elements</h3>
      <p>&bull; একটি ব্লক-স্তরের উপাদান সর্বদা একটি নতুন লাইনে শুরু হয় এবং ব্রাউজারগুলি স্বয়ংক্রিয়ভাবে উপাদানের আগে এবং পরে কিছু স্থান (একটি মার্জিন) যোগ করে।</p>
      <p>&bull; A block-level element always takes up the full width available</p>
      <p>&bull;উদাহরণ : p , div, address, header, li, ul, footer,</p>

    </div>
  );
};

export default Blogs;