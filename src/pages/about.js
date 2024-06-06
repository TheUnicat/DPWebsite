// src/pages/about.js
import Layout from '../app/layout';

export default function About() {
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-4">
          We are a dedicated group of <strike>individuals</strike> uwucats and owocats working towards a better future.
        </p>
      </section>
    </Layout>
  );
}
