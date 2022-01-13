import { h } from "preact";
import style from "functional-stylesheet";
import scoped from "./dummy-component.css";

export const DummyComponent = style(scoped, () => {
  return (
    <article>
      <h1>Hi from DummyComponent.</h1>
      <em>Now let's play with Preact!</em>
    </article>
  )
});
