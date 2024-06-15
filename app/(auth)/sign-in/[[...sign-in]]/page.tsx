import { Loader2 } from "lucide-react";
import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back</h1>
                </div>
                <p className="text-base text-[#7E8CA0]">
                    Login in or create Account to get back to your dashboard!
                </p>
                <div className="flex items-center justify-center mt-8">
                    <ClerkLoaded>
                        <SignIn />;
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>

            <div className="h-full bg-blue-600 hidden lg:flex flex-items justify-center">
                <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
            </div>
        </div>
    );
}