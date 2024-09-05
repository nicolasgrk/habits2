
const HomeLayout = ({
    children
}:{
    children: React.ReactNode;
}) =>{
    return(
        <div className="h-screen flex items-center justify-center bg-slate-100">
            <main className="w-full">
                {children}
            </main>
        </div>
    );
};

export default HomeLayout;