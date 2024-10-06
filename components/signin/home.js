import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { UserAuthForm } from "./form";

export default function AuthenticationPage() {
  return (
    <div className="relative space-y-6 mx-auto flex w-full h-screen flex-col items-center ">
      <div className="flex flex-col space-y-2 text-center mt-20">
        <h1 className="sm:text-8xl text-4xl font-semibold tracking-tight">
          Discover{" "}
          <i className="font-bold text-transparent bg-gradient-to-br from-blue-800 to-zinc-200  bg-clip-text">
            Arthur!
          </i>
        </h1>
        <p className="white text-muted-foreground text-balance sm:text-base text-sm w-3/4 mx-auto">
          Enter your email below to show you are a human
        </p>
      </div>
      <div className="sm:w-[550px] w-full mx-auto pt-10 px-3">
        <UserAuthForm />

        <p className="pt-8 text-center text-sm text-muted-foreground">
          This is just a DEMO, not the real product
        </p>
        {/* <p className="py-2 text-center text-sm text-muted-foreground">
          By clicking on continue you accept the terms and condition. <br />
          <a href="https://mailchimp.com/legal/terms" className="underline">
            Discover more here
          </a>{" "}
          about them.
        </p> */}
      </div>
    </div>
  );
}
