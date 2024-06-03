// src/pages/contact.js
import Layout from '../app/layout';

export default function Contact() {
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-4">
          You can reach us at{' '}
          <a href="mailto:contact@myorganization.org" className="text-primary-dark underline">
            contact@myorganization.org
          </a>
        </p>
        <p className="mt-4">
          Our address is:
          <br />
          123 Charity Lane
          <br />
          Nonprofit City, NP 12345
        </p>
      </section>
    </Layout>
  );
}
