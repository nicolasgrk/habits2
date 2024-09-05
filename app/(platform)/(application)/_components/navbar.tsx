import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { UserButton } from "@clerk/nextjs";


export const Navbar = () => {
    return (
        <nav className=" fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">

            <div className=" ml-auto flex utels-center gap-x-2">

                <UserButton 
                    appearance={{
                        elements:{
                            avatarBox:{
                                height: 30,
                                width: 30,
                            }
                        }
                    }}
                />
            </div>
        </nav>
    );
};
