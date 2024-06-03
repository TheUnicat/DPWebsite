// src/pages/resources.js
import Layout from '../app/layout';

export default function Resources() {
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Resources</h2>
        <p className="mt-4">
          Here are some resources that might help you:
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>
            <a href="https://www.example.com/resource1" className="text-primary-dark underline">
              Resource 1
            </a>
          </li>
          <li>
            <a href="https://www.example.com/resource2" className="text-primary-dark underline">
              Resource 2
            </a>
          </li>
          <li>
            <a href="https://www.example.com/resource3" className="text-primary-dark underline">
              Resource 3
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
