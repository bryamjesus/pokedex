import { Footer } from '@/components/Navigation/Footer';
import { NavBar } from '@/components/Navigation/NavBar';

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
