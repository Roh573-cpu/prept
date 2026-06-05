import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { CalendarDays, Users } from "lucide-react";
import CreditButton from "./CreditButton";
import RoleRedirect from "./RoleRedirect";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      {/* Logo  */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Prept logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>
      {/* Redirection Logic  */}
      {user && <RoleRedirect role={user.role} />}

      {/* Sign in  */}
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          <SignInButton>
            <Button variant="ghost"> Sign In </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="gold"> Get Started → </Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          {/* Links  */}
          {user?.role === "INTERVIEWER" && (
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          )}
          {user?.role === "INTERVIEWEE" && (
            <>
              <Button variant="ghost" asChild>
                <Link href="/explore">
                  <Users size={16} />
                  <span className="hidden md:inline">Explore</span>
                </Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="/appointments">
                  <CalendarDays size={16} />
                  <span className="hidden md:inline">My Appointments</span>
                </Link>
              </Button>
            </>
          )}

          {/* Credits  */}
          <CreditButton
            role={user?.role === "INTERVIEWER" ? "INTERVIEWER" : "INTERVIEWEE"}
            credits={
              (user?.role === "INTERVIEWER"
                ? user?.creditBalance
                : user?.credits) ?? 0
            }
          />
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default Header;
