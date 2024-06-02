import Layout from '../app/layout';

export default function Home() {
  return (
    <Layout>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4">
            We are a dedicated group of individuals working towards a better future.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4">
            Our mission is to create positive change in our community through various initiatives and projects.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4">
            You can reach us at{' '}
            <a href="mailto:contact@myorganization.org" className="text-primary-dark underline">
              contact@myorganization.org
            </a>
          </p>
        </section>
      </Layout>
  );
}
