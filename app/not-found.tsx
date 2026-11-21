import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">This page is not on the menu.</h1>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
