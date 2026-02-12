"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="md:py-24 py-16 px-5 text-center">
      <h2 className="text-3xl font-bold mb-6 ">Contact</h2>
      <Link
        href="mailto:kriteshketan@gmail.com"
        className="text-gray-400 block">
        kriteshketan@gmail.com
      </Link>
      <Link href="tel:+9188882138411" className="text-gray-400 block">
        +91 88882138411
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/ketan-kritesh-7b662b136/"
        className="text-gray-400 block">
        https://www.linkedin.com/in/ketan-kritesh-7b662b136/
      </Link>
    </section>
  );
}
