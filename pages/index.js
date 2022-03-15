import Link from "next/link";
import ListItems from "../pages/excercise_six";

export default function IndexPage() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      <h1>Chaitanya Mohite</h1>
      <h2>React Exercies</h2>

      <Link href="/excercise_one">
        <a>
          <h4>Exercise 1 : Hello World</h4>
        </a>
      </Link>

      <Link href="/excercise_two">
        <a>
          <h4>Exercise 2 : Capturing User Clicks</h4>
        </a>
      </Link>

      <Link href="/excercise_three">
        <a>
          <h4>Exercise 3 : Custom Component</h4>
        </a>
      </Link>

      <Link href="/excercise_four">
        <a>
          <h4>Exercise 4 : State and Props</h4>
        </a>
      </Link>

      <Link href="/exercise_five">
        <a>
          <h4>Exercise 5 : Mapping a List</h4>
        </a>
      </Link>

      <h4>Exercise 6 : Mapping a List From seperate components</h4>
      <ListItems animals={animals} />

      <Link href="/excercise_seven">
        <a>Exercise 7 : Building Forms</a>
      </Link>

      <div>
        <Link href="/excercise_eight">
          <a>Exercise 8 : Rendering JSON</a>
        </Link>
      </div>

      <Link href="/excercise_nine">
        <a>Exercise 9 : API Calling</a>
      </Link>
    </div>
  );
}
