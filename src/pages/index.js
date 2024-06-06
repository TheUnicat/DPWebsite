import Layout from '../app/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Mission Statement</h2>
        <p className="mt-4">
          The Dignity Club is a club at Johnston Heights Secondary School that aims to destigmatize and combat homelessness
          through the promotion of empathy, understanding, and awareness. Through material donations to homeless shelters
          and empowering the voices of those who have experienced homelessness, we hope to make a difference in our community.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Follow Us on Instagram</h2>
        <p className="mt-4">
          Stay updated with our latest activities and initiatives by following us on Instagram.
        </p>
        <div className="mt-4">
          <iframe
            src="https://www.instagram.com/p/CJ5tFf9g3NN/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
