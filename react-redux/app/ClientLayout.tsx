"use client";
import { Provider } from "react-redux";
import store from "../app/redux/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="container flex flex-col min-h-screen min-w-full">
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </section>
    </>
  );
}
