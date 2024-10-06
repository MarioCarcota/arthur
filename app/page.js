import AuthenticationPage from "@/components/signin/home";
import Particles from "@/components/ui/Particle";

export default async function Home() {
  return (
    <main className="relative flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center justify-between p-3 lg:p-6">
      <div className="fixed w-full h-full justify-center items-center overflow-hidden ">
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>
      <AuthenticationPage />
    </main>
  );
}
