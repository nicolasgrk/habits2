import { Navbar } from "./_components/navbar";

const ApplicationLayout = ({children}: {
    children: React.ReactNode;
}) =>{
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default ApplicationLayout;